import {Component, OnInit, ViewChild, OnDestroy} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HotKeywordNode} from '../hot-keyword/hot_keyword_node';
import {Vector} from '../hot-keyword/vector';
import {Constants} from '../constants';

@Component({
  selector: 'app-hot-keywords',
  templateUrl: './hot-keywords.component.html',
  styleUrls: ['./hot-keywords.component.css']
})
export class HotKeywordsComponent implements OnInit, OnDestroy {


  @ViewChild('canvasEl') canvasEl;

  AMBIENCE_RANDOM_ACTION_INTERVAL = 1000;
  AMBIENCE_WAIT_AFTER_USER_INPUT = 7000;
  LAME_NODE_COUNT = 25;

  canvas;
  canvas_width = 720;
  canvas_height = 720;
  done = false;
  context: CanvasRenderingContext2D;
  timer = window.requestAnimationFrame;

  frameCount = 0;
  nodes: Array<any> = [];
  activeNode;
  hoveredNode;
  nextActionTime;
  formVisible;
  mousePos;
  globalMousePos;
  hovered = false;
  pauseInteraction = false;
  selected_project: any = {};
  selected_project_changed = false;
  hovered_project: any = {};
  keywords_subscription;
  colors: string[];

  constructor(private http: HttpClient) {
  }

  /**
   * If on a screen narrower than MOBILE_WIDTH, do not render and navigate to
   * list page.
   */
  ngOnInit() {
    const dpi = 1;
    this.canvas = this.canvasEl.nativeElement;

    this.canvas.addEventListener('click', function (event) {
      this.clickHandler(event);
    }.bind(this), false);

    this.canvas.addEventListener('mousemove', function (event) {
      this.moveHandler(event);
    }.bind(this), false);

    // Size the canvas based on device dpi
    this.canvas.width = this.canvas_width * dpi;
    this.canvas.height = this.canvas_height * dpi;

    // Set 2d rendering context
    this.context = this.canvas.getContext('2d');
    this.context.scale(dpi, dpi);

    this.done = false;


    this.http.get('/api/keywords/popular').subscribe((keywords: any) => {
      const response = {'keywords': keywords, 'totalSize': keywords.length};
      this.selectNone();
      this.loadKeywords(response);
      this.doRandomAction();
      this.canvas.dispatchEvent(new Event('mousemove'));
    }, err => {
      console.log(err);
    });

    return this.timer(this.update);
  }

  ngOnDestroy() {
    this.keywords_subscription.unsubscribe();
    this.done = true;
  }

  private loadKeywords = (response) => {
    const keywords: any = response.keywords;
    const lame_node: Object = {lame: true};
    const _that = this;
    _that.nodes = [];
    let lame_index = 0;

    while (lame_index < this.LAME_NODE_COUNT) {
      keywords.push(lame_node);
      lame_index++;
    }

    keywords.forEach((function (keyword, index) {
      if (index > 15 && !keyword.lame) {
        keyword.small = true;
      }
      keyword.color = _that.getHex();
      keyword.RGB = _that.hexToRgb(keyword.color);
      _that.nodes.push(new HotKeywordNode(keyword));
    }));
  }

  /**
   * Global click handler. Determines coordinates of click, whether a node was
   * clicked, and routes the action accordingly.
   * @param evt  click event.
   */
  public clickHandler = (evt: MouseEvent) => {
    const box = this.canvas.getBoundingClientRect();
    const coords = {
      x: evt.pageX - box.left - window.pageXOffset,
      y: evt.pageY - box.top - window.pageYOffset
    };
    const clicked_node = this.getNodeUnder(
      coords.x - this.canvas_width / 2,
      coords.y - this.canvas_height / 2
    );
    if (clicked_node) {
      if (clicked_node.active) {
        clicked_node.onClick();
      } else {
        this.selectNone();
        clicked_node.onClick();
        this.selectProject(clicked_node);
      }
    } else {
      this.selectNone();
    }
    this.userActionOccurred();
  }

  /**
   * Selects a given node (project).
   * @param node  the project object to be selected.
   */
  private selectProject = (node: any) => {
    console.log(node);
    this.selected_project = node.data;
    setTimeout(() => {
      this.selected_project_changed = true;
    }, 200);
  }

  /**
   * Global mouse move handler. Determines coordinates of mouse and updates the
   * `globalMousePos` and `mousePos` objects.
   * @param evt  mouse move event.
   */
  public moveHandler = (evt: MouseEvent) => {
    this.hoveredNode = this.mousePos ?
      this.getNodeUnder(this.mousePos.x, this.mousePos.y) : null;

    const box = this.canvas.getBoundingClientRect();
    this.globalMousePos = {
      x: evt.pageX - box.left - window.pageXOffset,
      y: evt.pageY - box.top - window.pageYOffset
    };
    this.mousePos = new Vector(
      this.globalMousePos.x - this.canvas_width / 2,
      this.globalMousePos.y - this.canvas_height / 2,
      0
    );
    evt.preventDefault();
    evt.stopPropagation();
  }

  /**
   * Figures out which node (project) was hovered.
   * @param evt  click event.
   */
  private hoverHandler = () => {
    if (!this.mousePos) {
      return;
    }
    const new_hovered_node =
      this.getNodeUnder(this.mousePos.x, this.mousePos.y);
    this.clearHoverStyles();

    if (this.hoveredNode && new_hovered_node) {
      this.setHoverStyles(new_hovered_node);
    }

    if (!this.hovered && this.hoveredNode && this.hoveredNode.data.small) {
      this.hoveredNode.fadeCount = 0;
    }
  }

  /**
   * Sets styles when a node is hovered.
   * @param new_hovered_node  project node being hovered.
   */
  private setHoverStyles = (new_hovered_node: any) => {
    this.canvas.style.cursor = 'pointer';
    this.hovered_project = new_hovered_node;

    if (new_hovered_node.data.name !== this.hoveredNode.data.name
      && this.hoveredNode.small) {
      new_hovered_node.data.focus = true;
      new_hovered_node.fadeCount = 0;
      this.hoveredNode.data.focus = false;
    } else {
      new_hovered_node.data.focus = false;
      this.hoveredNode.data.focus = true;
    }
    this.hovered = true;
  }

  /**
   * Removes styles when a node is NOT hovered.
   */
  private clearHoverStyles = () => {
    this.canvas.style.cursor = 'default';
    this.nodes.forEach((node) => {
      node.data.focus = false;
    });
    this.hovered = false;
  }

  /**
   * update is the body of the animation loop. Controls canvas rendering.
   * Called once every timer tick.
   */
  private update = () => {
    if (this.done) {
      return;
    }

    this.render(this.context);
    this.hoverHandler();

    if (this.nodes.length) {
      this.frameCount += 1;
    }

    if (this.frameCount === 1) {
      this.ambientActionOccurred();
    }

    this.createLinks();

    this.nodes.forEach((node) => {
      node.updateMousePos(this.mousePos);
      node.update(this.hoveredNode === node);
    });

    this.updateAmbience();

    return this.timer(this.update);
  }

  /**
   * Draws lines from/to random project nodes.
   */
  private createLinks = () => {
    for (const n of this.nodes) {
      if (n.link != null) {
        continue;
      }
      // # continue if Math.random() > 0.9
      n.linkTo(this.nodes[Math.floor(Math.random() * this.nodes.length)]);
    }
  }

  /**
   * The convas renderer. Everything is drawn into the canvas here.
   */
  private render = (ctx) => {
    ctx.clearRect(0, 0, this.canvas_width, this.canvas_height);
    ctx.save();
    ctx.translate(this.canvas_width / 2, this.canvas_height / 2);

    // Lame (gray non-interactive) nodes next
    this.nodes.forEach((node, index) => {
      if (node.data.lame && !node.active) {
        node.render(ctx);
      }
    });

    // Then small colored project nodes
    this.nodes.forEach((node, index) => {
      if (!node.data.lame && !node.active && node.data.small) {
        node.render(ctx);
      }
    });

    // Then large colored project nodes with logo
    this.nodes.forEach((node, index) => {
      if (!node.data.lame &&
        !node.active &&
        !node.data.small &&
        !node.data.focus) {
        node.render(ctx);
      }
    });

    // Hovered next
    this.nodes.forEach((node, index) => {
      if (!node.data.lame && !node.active && node.data.focus) {
        node.render(ctx);
      }
    });

    // Selected node on top
    this.nodes.forEach((node, index) => {
      if (!node.data.lame && node.active) {
        node.render(ctx);
      }
    });

    ctx.restore();
  }

  /**
   * Sets `nextActionTime` Date object.
   * @param offset  in milliseconds
   */
  private setNextActionDelay = (offset: number) => {
    this.nextActionTime = new Date(new Date().getTime() + offset);
  }

  /**
   * Sets `nextActionTime` Date object and selects active node.
   */
  private userActionOccurred = () => {
    this.setNextActionDelay(this.AMBIENCE_WAIT_AFTER_USER_INPUT);
    this.activeNode = this.getActiveNodes()[0];
  }

  /**
   * Selects active node.
   */
  private ambientActionOccurred = () => {
    this.activeNode = this.getActiveNodes()[0];
  }

  /**
   * Gets `nextActionTime` Date object minus current time.
   */
  private timeUntilNextAction = () => {
    return this.nextActionTime - new Date().getTime();
  }

  /**
   * Does random action when `timeUntilNextAction` gets to 0.
   */
  private updateAmbience = () => {
    if (this.timeUntilNextAction() < 0) {
      this.doRandomAction();
      return this.ambientActionOccurred();
    }
  }

  /**
   * Filters nodes by `active` attribute.
   */
  private getActiveNodes = () => {
    return this.nodes.filter(function (n) {
      return n.active;
    });
  }

  /**
   * Activates a random node.
   *
   * This method controls which nodes end up in the center, and for how
   * long (unless overridden by user input.)
   */
  private doRandomAction = () => {
    let node;
    const filteredNodes = this.filterLames();
    if (this.pauseInteraction) {
      return;
    }

    if (this.getActiveNodes().length) {
      // make the current node leave the center and schedule the next action.
      this.setNextActionDelay(this.AMBIENCE_RANDOM_ACTION_INTERVAL);
      return this.selectNone();
    } else {
      // pick a random node to display in the center
      node = filteredNodes[Math.floor(Math.random() * filteredNodes.length)];
      if (node != null) {
        this.setNextActionDelay(this.AMBIENCE_WAIT_AFTER_USER_INPUT);
        node.activate();
        this.selectProject(node);
      }
    }
  }

  /**
   * Filters out the grey (lame) nodes.
   */
  private filterLames = () => {
    return this.nodes.filter(
      node => !node.data.lame
    );
  }

  /**
   * Deselects all nodes.
   */
  private selectNone = () => {
    this.selected_project = {};
    this.selected_project_changed = false;

    for (const n of this.nodes) {
      n.deactivate();
    }

  }

  /**
   * Select the node under a specific x, y coordinate.
   * @param x  x coord.
   * @param y  y coord.
   */
  private getNodeUnder = (x: number, y: number) => {
    const nodes = [];
    let chosen = null;

    for (let i = this.nodes.length - 1; i >= 0; i += -1) {
      const n = this.nodes[i];
      if (n.hitTest(x, y) && !n.data.lame) {
        nodes.push(n);
      }
    }
    nodes.forEach((node) => {
      if (!node.data.small) {
        chosen = node;
      }
    });
    return (nodes.length && !chosen) ? nodes[0] : chosen;
  }


  public hexToRgb(hex): Object {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : {r: 0, g: 0, b: 0};
  }

  private getHex(): string {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    let hex;
    if (this.colors && this.colors.length > 0) {
      hex = this.colors.pop();
    } else {
      this.colors = Constants.COLORS.slice(0);
      hex = this.colors.pop();
    }
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
      return r + r + g + g + b + b;
    });
    return hex;
  }
}
