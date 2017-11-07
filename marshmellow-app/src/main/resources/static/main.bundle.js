webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-search-bar></app-search-bar>\n\n<app-voice-log-list></app-voice-log-list>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_bar_search_bar_component__ = __webpack_require__("../../../../../src/app/search-bar/search-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__voice_log_list_voice_log_list_component__ = __webpack_require__("../../../../../src/app/voice-log-list/voice-log-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__voice_log_voice_log_component__ = __webpack_require__("../../../../../src/app/voice-log/voice-log.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__message_service__ = __webpack_require__("../../../../../src/app/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__hot_keywords_hot_keywords_component__ = __webpack_require__("../../../../../src/app/hot-keywords/hot-keywords.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_5__search_bar_search_bar_component__["a" /* SearchBarComponent */],
                __WEBPACK_IMPORTED_MODULE_6__voice_log_list_voice_log_list_component__["a" /* VoiceLogListComponent */],
                __WEBPACK_IMPORTED_MODULE_7__voice_log_voice_log_component__["a" /* VoiceLogComponent */],
                __WEBPACK_IMPORTED_MODULE_9__hot_keywords_hot_keywords_component__["a" /* HotKeywordsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__message_service__["a" /* MessageService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Constants; });
var Constants = (function () {
    function Constants() {
    }
    Constants.COLORS = [
        '#DDCEC5',
        '#333332',
        '#E783FB',
        '#6285A7',
        '#4CC2F7',
        '#545454',
        '#DC4538',
        '#A7C640',
        '#06213C',
        '#2bace2',
        '#00e676',
        '#6B4B9F',
        '#B5D1FA',
        '#696969',
        '#A59B94',
        '#41929D',
        '#b3278a',
        '#6FD6E2',
        '#577EBF',
        '#AA7522',
        '#13D5BD',
        '#1ac222',
        '#323232',
        '#43A047',
        '#1E4689',
        '#394A4A',
        '#83AEF6',
        '#16AA9D',
        '#2B97A0',
        '#337FCC',
        '#181C1D',
        '#C76395',
        '#3C7CE9',
        '#326ce5',
        '#E26026'
    ];
    return Constants;
}());



/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cs-logo{\n    width: 73px;\n    height: 50px;\n    display: inline-block;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-image: url(" + __webpack_require__("../../../../../src/assets/images/credit-suisse-logo.png") + ");\n}\n\n.hackathon {\n    color: white;\n    text-decoration: none;\n}\n\n.cs-header {\n  text-align: right;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"cs-header\">\n  <h1>\n    <a class=\"hackathon\" href=\"/\">\n      <span>Credit Suisse Hackathon 2017</span>\n      <i class=\"cs-logo\"></i>\n    </a>\n  </h1>\n</header>\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/hot-keyword/hot_keyword_node.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotKeywordNode; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vector__ = __webpack_require__("../../../../../src/app/hot-keyword/vector.ts");

var HotKeywordNode = (function () {
    function HotKeywordNode(data) {
        var _this = this;
        this.getAge = function () {
            return new Date().getTime() - _this.start;
        };
        this.applyForces = function () {
            _this.vel.add(_this.acc);
            _this.pos.add(_this.vel);
            _this.acc = new __WEBPACK_IMPORTED_MODULE_0__vector__["a" /* Vector */](0, 0, 0);
        };
        this.update = function (hovered) {
            if (_this.active) {
                _this.STROKE_WIDTH = 10;
            }
            else if (!_this.data.lame && _this.data.small) {
                _this.STROKE_WIDTH = 6;
            }
            _this.age += 1;
            _this.applyForces();
            _this.updateLerps();
            _this.drag(_this.active ? _this.ACTIVE_DRAG : _this.IDLE_DRAG);
            if (!_this.active) {
                if (!hovered) {
                    _this.jitter(0.15);
                    _this.keepInRing(_this.RING_RADIUS, 0.00007);
                    _this.rotate(0.002);
                }
            }
            else {
                _this.moveToCenter();
            }
            _this.updateLink();
        };
        this.moveToCenter = function () {
            _this.pos.mult(0.85).add(_this.center.mult(0.15));
        };
        this.updateMousePos = function (mousePos) {
            if (!mousePos || _this.data.lame) {
                return;
            }
            var diff = _this.pos.copy().sub(mousePos);
            _this.hoverState =
                Math.max((_this.MOUSE_HOVER_DIST - diff.mag()) / _this.MOUSE_HOVER_DIST, 0);
            _this.hoverState *=
                Math.max(0, Math.min(1, (_this.getAge() - 1000) / 5000));
        };
        this.updateLerps = function () {
            var targetRadius = _this.active ? _this.ACTIVE_RADIUS : _this.IDLE_RADIUS;
            _this.radius = targetRadius * 0.1 + _this.radius * 0.9;
        };
        this.hitTest = function (x, y) {
            return new __WEBPACK_IMPORTED_MODULE_0__vector__["a" /* Vector */](x, y, 0)
                .sub(_this.pos).mag() < _this.getDisplayRadius() +
                _this.CLICKABLE_RADIUS_ADD;
        };
        this.onClick = function () {
            if (_this.active) {
                _this.deactivate();
            }
            else {
                _this.activate();
            }
        };
        this.activate = function () {
            if (!_this.data.lame) {
                _this.active = true;
            }
        };
        this.deactivate = function () {
            _this.active = false;
        };
        this.getDisplayRadius = function () {
            var r = _this.radius;
            if (!_this.active && !_this.data.lame) {
                if (_this.data.small) {
                    r += (_this.hoverState || 0) * 26;
                }
                else {
                    r += (_this.hoverState || 0) * 10;
                }
            }
            return r;
        };
        this.keepInRing = function (radius, amt) {
            var diff = _this.pos.copy();
            var mag = diff.mag();
            var force = amt * (radius - mag);
            // avoid divide by zero. #jitter() should take care of moving it off the origin
            if (mag != 0) {
                diff.normalize().mult(force);
            }
            if (mag < 80) {
                diff.mult(10); //push out faster from center on load
            }
            _this.acc.add(diff);
        };
        this.jitter = function (amt) {
            var force = new __WEBPACK_IMPORTED_MODULE_0__vector__["a" /* Vector */](Math.random() - 0.5, Math.random() - 0.5, 0);
            force.mult(amt);
            _this.acc.add(force);
        };
        this.drag = function (amt) {
            _this.vel.mult(1 - amt);
        };
        this.rotate = function (amt) {
            var force = _this.pos.copy();
            _a = [-force.y, force.x], force.x = _a[0], force.y = _a[1];
            force.mult(amt);
            _this.pos.add(force);
            var _a;
        };
        this.render = function (ctx) {
            var r = _this.getDisplayRadius();
            var alpha = (_this.data.small && !_this.data.focus) ? .65 : .5;
            ctx.save();
            ctx.beginPath();
            ctx.arc(_this.pos.x, _this.pos.y, r, 0, Math.PI * 2, true);
            ctx.fillStyle =
                _this.data.lame ?
                    '#ececec' :
                    'rgba(' +
                        _this.data.RGB.r + ',' +
                        _this.data.RGB.g + ',' +
                        _this.data.RGB.b + ',' +
                        alpha + ')';
            ctx.fill();
            _this.renderWhiteFill(ctx);
            if (!_this.data.small || _this.active || _this.data.lame || _this.data.focus) {
                // Wait a tick before drawing the logo
                if (!_this.active && !_this.data.lame && _this.fadeCount >= .5) {
                    _this.renderLogo(ctx);
                }
            }
            ctx.closePath();
            ctx.restore();
        };
        this.renderWhiteFill = function (ctx) {
            var r = _this.getDisplayRadius();
            r = (_this.getDisplayRadius() > _this.STROKE_WIDTH / 2) ?
                (r - _this.STROKE_WIDTH / 2) : r;
            ctx.globalAlpha = _this.active ? 1 : _this.fadeCount;
            ctx.beginPath();
            ctx.arc(_this.pos.x, _this.pos.y, r, 0, Math.PI * 2, true);
            ctx.fillStyle = 'white';
            ctx.fill();
            if (_this.fadeCount < 1) {
                _this.fadeCount += .05;
            }
        };
        this.renderLogo = function (ctx) {
            var logoSize = _this.getDisplayRadius() / 1.05;
            var logoPos = {
                x: _this.pos.x - logoSize / 2,
                y: _this.pos.y - logoSize / 2
            };
            // ctx.globalAlpha = (this.fadeCount <= .9) ? this.fadeCount : .9;
            // ctx.drawImage(this.thumbImg, logoPos.x, logoPos.y, logoSize, logoSize);
            ctx.fillStyle = _this.data.color;
            ctx.font = '20px Arial, "Helvetica Neue", Helvetica, sans-serif;';
            ctx.fillText(_this.data.keyword, logoPos.x, logoPos.y + 20, logoSize, logoSize);
            // Colorize fallback logo on non-IE browsers
            if (typeof _this.data.iconUrlSmall === 'undefined'
                && navigator.userAgent.indexOf('MSIE') === -1) {
                ctx.globalCompositeOperation = 'lighten';
                ctx.fillStyle = _this.data.fallbackColor;
                ctx.fillRect(logoPos.x, logoPos.y, logoSize, logoSize);
            }
        };
        this.getLineStart = function () {
            return new __WEBPACK_IMPORTED_MODULE_0__vector__["a" /* Vector */](_this.pos.x, _this.pos.y, 0);
        };
        this.getLineEnd = function () {
            return new __WEBPACK_IMPORTED_MODULE_0__vector__["a" /* Vector */](_this.link.pos.x, _this.link.pos.y, 0);
        };
        this.getDotAlpha = function () {
            return Math.min(1, _this.age / 10);
        };
        this.getLinkAlpha = function () {
            var distance = _this.pos.copy().sub(_this.link.pos).mag();
            return Math.max(0, (_this.MAX_LINK_LENGTH - distance) / _this.MAX_LINK_LENGTH);
        };
        this.renderLink = function (ctx, filter) {
            if (_this.link != null && !_this.data.lame) {
                ctx.save();
                ctx.beginPath();
                _this.doLinkPath(ctx);
                ctx.strokeStyle = '#ececec';
                ctx.globalAlpha = _this.getLinkAlpha();
                ctx.lineWidth = _this.STROKE_WIDTH - 8;
                ctx.stroke();
                ctx.closePath();
                ctx.restore();
            }
        };
        this.doLinkPath = function (ctx) {
            var start = _this.getLineStart();
            var end = _this.getLineEnd();
            ctx.moveTo(start.x, start.y);
            ctx.lineTo(end.x, end.y);
        };
        this.updateLink = function () {
            var ref;
            if (((ref = _this.link) != null ?
                ref.pos.copy().sub(_this.pos).mag() : void 0) > _this.MAX_LINK_LENGTH) {
                _this.killLink();
            }
        };
        this.linkTo = function (node) {
            if (!node.data.lame) {
                _this.linkStartTime = new Date;
                _this.link = node;
            }
        };
        this.killLink = function () {
            _this.link = null;
        };
        this.data = data;
        this.RING_RADIUS = 265;
        this.MAX_LINK_LENGTH = 290;
        this.MOUSE_HOVER_DIST = 120;
        this.CLICKABLE_RADIUS_ADD = 0;
        this.IDLE_DRAG = 0.02;
        this.ACTIVE_DRAG = 0.5;
        this.ACTIVE_RADIUS = 175;
        this.STROKE_WIDTH = 6;
        var startAngle = Math.random() * Math.PI * 2;
        var startRadius = Math.random() * 20;
        var fallbackImg = '/assets/images/alphabet/' + this.data.startsWith + '.gif';
        if (!this.data.lame && !this.data.small) {
            this.IDLE_RADIUS = 30;
        }
        else if (!this.data.lame && !this.active && this.data.small) {
            this.IDLE_RADIUS = 7;
            this.STROKE_WIDTH = 6;
        }
        else {
            this.STROKE_WIDTH = 5 - Math.floor(Math.random() * (3 - 0 + 1)) + 0;
            this.IDLE_RADIUS = 25 - (Math.floor(Math.random() * (22 - 17 + 1)) + 17);
        }
        this.emptyVector = new __WEBPACK_IMPORTED_MODULE_0__vector__["a" /* Vector */](0, 0, 0);
        this.hoverState = 0;
        this.fadeCount = 0;
        this.start = new Date();
        this.age = 0;
        this.pos = new __WEBPACK_IMPORTED_MODULE_0__vector__["a" /* Vector */](Math.cos(startAngle), Math.sin(startAngle), 0);
        this.pos = this.pos.mult(startRadius);
        this.vel = new __WEBPACK_IMPORTED_MODULE_0__vector__["a" /* Vector */](0, 0, 0);
        this.acc = new __WEBPACK_IMPORTED_MODULE_0__vector__["a" /* Vector */](0, 0, 0);
        this.radius = this.IDLE_RADIUS;
        this.center = new __WEBPACK_IMPORTED_MODULE_0__vector__["a" /* Vector */](0, 0, 0);
        this.active = false;
        this.thumbImg = document.createElement('img');
        if (typeof this.data.iconUrlSmall !== 'undefined' && !this.data.lame) {
            this.thumbImg.src = this.data.iconUrlSmall;
            // this.thumbImg.innerText = 'test';
        }
        else if (this.data.startsWith) {
            this.thumbImg.src = fallbackImg;
        }
        this.thumbImg.addEventListener('error', function () {
            _this.thumbImg.src = fallbackImg;
        });
    }
    return HotKeywordNode;
}());



/***/ }),

/***/ "../../../../../src/app/hot-keyword/vector.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Vector; });
/**
 * Vector math helper class for 2d animation.
 */
var Vector = (function () {
    function Vector(x, y, z) {
        var _this = this;
        this.copy = function () {
            return new Vector(_this.x, _this.y, _this.z);
        };
        this.mag = function () {
            return Math.sqrt(_this.magSq());
        };
        this.magSq = function () {
            return _this.x * _this.x + _this.y * _this.y + _this.z * _this.z;
        };
        this.normalize = function () {
            _this.div(_this.mag());
            return _this;
        };
        this.add = function (p) {
            _this.x += p.x;
            _this.y += p.y;
            _this.z += p.z;
            return _this;
        };
        this.sub = function (p) {
            _this.x -= p.x;
            _this.y -= p.y;
            _this.z -= p.z;
            return _this;
        };
        this.mult = function (n) {
            _this.x *= n;
            _this.y *= n;
            _this.z *= n;
            return _this;
        };
        this.div = function (n) {
            _this.x /= n;
            _this.y /= n;
            _this.z /= n;
            return _this;
        };
        this.x = x || 0;
        this.y = y || 0;
        this.z = z || 0;
    }
    return Vector;
}());



/***/ }),

/***/ "../../../../../src/app/hot-keywords/hot-keywords.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fancy-ball {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  position: relative;\n  color: #4c4c4c;\n}\n\n.selected-project {\n  position: absolute;\n  top: 45%;\n  width: 300px;\n  max-height: 200px;\n  text-align: center;\n  overflow: hidden;\n}\n\n.fancy-ball h1 {\n  font-size: 50px;\n}\n\n.fancy-ball h2 {\n  font-size: 50px;\n  color: #adadad;\n}\n\n.fancy-ball .hot-keyword {\n  cursor: pointer;\n}\n\n.fancy-ball .loader {\n  position: absolute;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/hot-keywords/hot-keywords.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"fancy-ball\">\n  <div class=\"loader\" *ngIf=\"state === 'loading'\">\n    <div class=\"spinner\">\n      <div class=\"bounce1\"></div>\n      <div class=\"bounce2\"></div>\n      <div class=\"bounce3\"></div>\n    </div>\n  </div>\n  <div class=\"selected-project\" *ngIf=\"selected_project_changed\">\n    <h1 class=\"hot-keyword\" (click)=\"search(selected_project.keyword)\">\n      {{selected_project.keyword}}\n    </h1>\n    <h2>\n      {{selected_project.count}}\n    </h2>\n  </div>\n  <canvas #canvasEl></canvas>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/hot-keywords/hot-keywords.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotKeywordsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hot_keyword_hot_keyword_node__ = __webpack_require__("../../../../../src/app/hot-keyword/hot_keyword_node.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hot_keyword_vector__ = __webpack_require__("../../../../../src/app/hot-keyword/vector.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__("../../../../../src/app/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__message_service__ = __webpack_require__("../../../../../src/app/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HotKeywordsComponent = (function () {
    function HotKeywordsComponent(http, messageService) {
        var _this = this;
        this.http = http;
        this.messageService = messageService;
        this.AMBIENCE_RANDOM_ACTION_INTERVAL = 1000;
        this.AMBIENCE_WAIT_AFTER_USER_INPUT = 7000;
        this.LAME_NODE_COUNT = 25;
        this.canvas_width = 720;
        this.canvas_height = 720;
        this.done = false;
        this.timer = window.requestAnimationFrame;
        this.frameCount = 0;
        this.nodes = [];
        this.hovered = false;
        this.pauseInteraction = false;
        this.selected_project = {};
        this.selected_project_changed = false;
        this.hovered_project = {};
        this.state = 'loading';
        this.loadKeywords = function (response) {
            var keywords = response.keywords;
            var lame_node = { lame: true };
            var _that = _this;
            _that.nodes = [];
            var lame_index = 0;
            while (lame_index < _this.LAME_NODE_COUNT) {
                keywords.push(lame_node);
                lame_index++;
            }
            keywords.forEach((function (keyword, index) {
                if (index > 15 && !keyword.lame) {
                    keyword.small = true;
                }
                keyword.color = _that.getHex();
                keyword.RGB = _that.hexToRgb(keyword.color);
                _that.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__hot_keyword_hot_keyword_node__["a" /* HotKeywordNode */](keyword));
            }));
        };
        /**
         * Global click handler. Determines coordinates of click, whether a node was
         * clicked, and routes the action accordingly.
         * @param evt  click event.
         */
        this.clickHandler = function (evt) {
            var box = _this.canvas.getBoundingClientRect();
            var coords = {
                x: evt.pageX - box.left - window.pageXOffset,
                y: evt.pageY - box.top - window.pageYOffset
            };
            var clicked_node = _this.getNodeUnder(coords.x - _this.canvas_width / 2, coords.y - _this.canvas_height / 2);
            if (clicked_node) {
                if (clicked_node.active) {
                    clicked_node.onClick();
                }
                else {
                    _this.selectNone();
                    clicked_node.onClick();
                    _this.selectProject(clicked_node);
                }
            }
            else {
                _this.selectNone();
            }
            _this.userActionOccurred();
        };
        /**
         * Selects a given node (project).
         * @param node  the project object to be selected.
         */
        this.selectProject = function (node) {
            _this.selected_project = node.data;
            setTimeout(function () {
                _this.selected_project_changed = true;
            }, 200);
        };
        /**
         * Global mouse move handler. Determines coordinates of mouse and updates the
         * `globalMousePos` and `mousePos` objects.
         * @param evt  mouse move event.
         */
        this.moveHandler = function (evt) {
            _this.hoveredNode = _this.mousePos ?
                _this.getNodeUnder(_this.mousePos.x, _this.mousePos.y) : null;
            var box = _this.canvas.getBoundingClientRect();
            _this.globalMousePos = {
                x: evt.pageX - box.left - window.pageXOffset,
                y: evt.pageY - box.top - window.pageYOffset
            };
            _this.mousePos = new __WEBPACK_IMPORTED_MODULE_3__hot_keyword_vector__["a" /* Vector */](_this.globalMousePos.x - _this.canvas_width / 2, _this.globalMousePos.y - _this.canvas_height / 2, 0);
            evt.preventDefault();
            evt.stopPropagation();
        };
        /**
         * Figures out which node (project) was hovered.
         * @param evt  click event.
         */
        this.hoverHandler = function () {
            if (!_this.mousePos) {
                return;
            }
            var new_hovered_node = _this.getNodeUnder(_this.mousePos.x, _this.mousePos.y);
            _this.clearHoverStyles();
            if (_this.hoveredNode && new_hovered_node) {
                _this.setHoverStyles(new_hovered_node);
            }
            if (!_this.hovered && _this.hoveredNode && _this.hoveredNode.data.small) {
                _this.hoveredNode.fadeCount = 0;
            }
        };
        /**
         * Sets styles when a node is hovered.
         * @param new_hovered_node  project node being hovered.
         */
        this.setHoverStyles = function (new_hovered_node) {
            _this.canvas.style.cursor = 'pointer';
            _this.hovered_project = new_hovered_node;
            if (new_hovered_node.data.name !== _this.hoveredNode.data.name
                && _this.hoveredNode.small) {
                new_hovered_node.data.focus = true;
                new_hovered_node.fadeCount = 0;
                _this.hoveredNode.data.focus = false;
            }
            else {
                new_hovered_node.data.focus = false;
                _this.hoveredNode.data.focus = true;
            }
            _this.hovered = true;
        };
        /**
         * Removes styles when a node is NOT hovered.
         */
        this.clearHoverStyles = function () {
            _this.canvas.style.cursor = 'default';
            _this.nodes.forEach(function (node) {
                node.data.focus = false;
            });
            _this.hovered = false;
        };
        /**
         * update is the body of the animation loop. Controls canvas rendering.
         * Called once every timer tick.
         */
        this.update = function () {
            if (_this.done) {
                return;
            }
            _this.render(_this.context);
            _this.hoverHandler();
            if (_this.nodes.length) {
                _this.frameCount += 1;
            }
            if (_this.frameCount === 1) {
                _this.ambientActionOccurred();
            }
            _this.createLinks();
            _this.nodes.forEach(function (node) {
                node.updateMousePos(_this.mousePos);
                node.update(_this.hoveredNode === node);
            });
            _this.updateAmbience();
            return _this.timer(_this.update);
        };
        /**
         * Draws lines from/to random project nodes.
         */
        this.createLinks = function () {
            for (var _i = 0, _a = _this.nodes; _i < _a.length; _i++) {
                var n = _a[_i];
                if (n.link != null) {
                    continue;
                }
                // # continue if Math.random() > 0.9
                n.linkTo(_this.nodes[Math.floor(Math.random() * _this.nodes.length)]);
            }
        };
        /**
         * The convas renderer. Everything is drawn into the canvas here.
         */
        this.render = function (ctx) {
            ctx.clearRect(0, 0, _this.canvas_width, _this.canvas_height);
            ctx.save();
            ctx.translate(_this.canvas_width / 2, _this.canvas_height / 2);
            // Lame (gray non-interactive) nodes next
            _this.nodes.forEach(function (node, index) {
                if (node.data.lame && !node.active) {
                    node.render(ctx);
                }
            });
            // Then small colored project nodes
            _this.nodes.forEach(function (node, index) {
                if (!node.data.lame && !node.active && node.data.small) {
                    node.render(ctx);
                }
            });
            // Then large colored project nodes with logo
            _this.nodes.forEach(function (node, index) {
                if (!node.data.lame &&
                    !node.active &&
                    !node.data.small &&
                    !node.data.focus) {
                    node.render(ctx);
                }
            });
            // Hovered next
            _this.nodes.forEach(function (node, index) {
                if (!node.data.lame && !node.active && node.data.focus) {
                    node.render(ctx);
                }
            });
            // Selected node on top
            _this.nodes.forEach(function (node, index) {
                if (!node.data.lame && node.active) {
                    node.render(ctx);
                }
            });
            ctx.restore();
        };
        /**
         * Sets `nextActionTime` Date object.
         * @param offset  in milliseconds
         */
        this.setNextActionDelay = function (offset) {
            _this.nextActionTime = new Date(new Date().getTime() + offset);
        };
        /**
         * Sets `nextActionTime` Date object and selects active node.
         */
        this.userActionOccurred = function () {
            _this.setNextActionDelay(_this.AMBIENCE_WAIT_AFTER_USER_INPUT);
            _this.activeNode = _this.getActiveNodes()[0];
        };
        /**
         * Selects active node.
         */
        this.ambientActionOccurred = function () {
            _this.activeNode = _this.getActiveNodes()[0];
        };
        /**
         * Gets `nextActionTime` Date object minus current time.
         */
        this.timeUntilNextAction = function () {
            return _this.nextActionTime - new Date().getTime();
        };
        /**
         * Does random action when `timeUntilNextAction` gets to 0.
         */
        this.updateAmbience = function () {
            if (_this.timeUntilNextAction() < 0) {
                _this.doRandomAction();
                return _this.ambientActionOccurred();
            }
        };
        /**
         * Filters nodes by `active` attribute.
         */
        this.getActiveNodes = function () {
            return _this.nodes.filter(function (n) {
                return n.active;
            });
        };
        /**
         * Activates a random node.
         *
         * This method controls which nodes end up in the center, and for how
         * long (unless overridden by user input.)
         */
        this.doRandomAction = function () {
            var node;
            var filteredNodes = _this.filterLames();
            if (_this.pauseInteraction) {
                return;
            }
            if (_this.getActiveNodes().length) {
                // make the current node leave the center and schedule the next action.
                _this.setNextActionDelay(_this.AMBIENCE_RANDOM_ACTION_INTERVAL);
                return _this.selectNone();
            }
            else {
                // pick a random node to display in the center
                node = filteredNodes[Math.floor(Math.random() * filteredNodes.length)];
                if (node != null) {
                    _this.setNextActionDelay(_this.AMBIENCE_WAIT_AFTER_USER_INPUT);
                    node.activate();
                    _this.selectProject(node);
                }
            }
        };
        /**
         * Filters out the grey (lame) nodes.
         */
        this.filterLames = function () {
            return _this.nodes.filter(function (node) { return !node.data.lame; });
        };
        /**
         * Deselects all nodes.
         */
        this.selectNone = function () {
            _this.selected_project = {};
            _this.selected_project_changed = false;
            for (var _i = 0, _a = _this.nodes; _i < _a.length; _i++) {
                var n = _a[_i];
                n.deactivate();
            }
        };
        /**
         * Select the node under a specific x, y coordinate.
         * @param x  x coord.
         * @param y  y coord.
         */
        this.getNodeUnder = function (x, y) {
            var nodes = [];
            var chosen = null;
            for (var i = _this.nodes.length - 1; i >= 0; i += -1) {
                var n = _this.nodes[i];
                if (n.hitTest(x, y) && !n.data.lame) {
                    nodes.push(n);
                }
            }
            nodes.forEach(function (node) {
                if (!node.data.small) {
                    chosen = node;
                }
            });
            return (nodes.length && !chosen) ? nodes[0] : chosen;
        };
    }
    /**
     * If on a screen narrower than MOBILE_WIDTH, do not render and navigate to
     * list page.
     */
    HotKeywordsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var dpi = 1;
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
        this.http.get('/api/keywords/popular').subscribe(function (keywords) {
            var response = { 'keywords': keywords, 'totalSize': keywords.length };
            _this.selectNone();
            _this.loadKeywords(response);
            _this.doRandomAction();
            _this.canvas.dispatchEvent(new Event('mousemove'));
            _this.state = 'loaded';
        }, function (err) {
            _this.state = 'error';
        });
        return this.timer(this.update);
    };
    HotKeywordsComponent.prototype.ngOnDestroy = function () {
        try {
            this.keywords_subscription.unsubscribe();
            this.done = true;
        }
        catch (e) {
        }
    };
    HotKeywordsComponent.prototype.search = function (keyword) {
        this.messageService.sendMessage(keyword);
    };
    HotKeywordsComponent.prototype.hexToRgb = function (hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : { r: 0, g: 0, b: 0 };
    };
    HotKeywordsComponent.prototype.getHex = function () {
        var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        var hex;
        if (this.colors && this.colors.length > 0) {
            hex = this.colors.pop();
        }
        else {
            this.colors = __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* Constants */].COLORS.slice(0);
            hex = this.colors.pop();
        }
        hex = hex.replace(shorthandRegex, function (m, r, g, b) {
            return r + r + g + g + b + b;
        });
        return hex;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ViewChild */])('canvasEl'),
        __metadata("design:type", Object)
    ], HotKeywordsComponent.prototype, "canvasEl", void 0);
    HotKeywordsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-hot-keywords',
            template: __webpack_require__("../../../../../src/app/hot-keywords/hot-keywords.component.html"),
            styles: [__webpack_require__("../../../../../src/app/hot-keywords/hot-keywords.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_5__message_service__["a" /* MessageService */]])
    ], HotKeywordsComponent);
    return HotKeywordsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/message.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessageService = (function () {
    function MessageService() {
        this.subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
    }
    MessageService.prototype.sendMessage = function (message) {
        this.subject.next({ text: message });
    };
    MessageService.prototype.clearMessage = function () {
        this.subject.next();
    };
    MessageService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    MessageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "../../../../../src/app/search-bar/search-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".search-bar {\n    box-sizing: border-box;\n    color: #ffffff;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    height: 280px;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    margin: 0 auto;\n    padding: 15px;\n    position: relative;\n    text-align: left;\n    background: url(" + __webpack_require__("../../../../../src/assets/images/bg-voice-log.png") + ") no-repeat;\n    background-size: cover;\n    background-position-y: 20%;\n}\n\n.search-input {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-line-pack: start;\n        align-content: flex-start;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n\n.search {\n    display: inline-block;\n    border: none;\n    border-bottom: 2px solid #ffffff;\n    border-radius: 0;\n    box-sizing: border-box;\n    color: #fff;\n    font-family: Roboto Slab,serif;\n    font-size: 14px;\n    height: 35px;\n    outline: none;\n    padding: 0 0 5px 0;\n    position: relative;\n    text-indent: 27px;\n    width: 100%;\n    z-index: 2;\n    background: url(\"data:image/svg+xml,%3C%3Fxml%20version%3D%271.0%27%20encoding%3D%27utf-8%27%3F%3E%0A%3Csvg%20version%3D%271.1%27%20id%3D%27Layer_1%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20x%3D%270px%27%20y%3D%270px%27%0A%20viewBox%3D%270%200%2018.4%2018.4%27%20style%3D%27enable-background%3Anew%200%200%2018.4%2018.4%3B%27%20xml%3Aspace%3D%27preserve%27%3E%0A%3Cstyle%20type%3D%27text%2Fcss%27%3E%0A.st0%7Bfill%3A%23FFFFFF%3B%7D%0A%3C%2Fstyle%3E%0A%3Cpath%20class%3D%27st0%27%20d%3D%27M13%2C11.5h-0.8l-0.3-0.3c1-1.1%2C1.6-2.6%2C1.6-4.2c0-3.6-2.9-6.5-6.5-6.5S0.5%2C3.4%2C0.5%2C7s2.9%2C6.5%2C6.5%2C6.5%0Ac1.6%2C0%2C3.1-0.6%2C4.2-1.6l0.3%2C0.3V13l5%2C5l1.5-1.5L13%2C11.5z%20M7%2C11.5c-2.5%2C0-4.5-2-4.5-4.5s2-4.5%2C4.5-4.5s4.5%2C2%2C4.5%2C4.5S9.5%2C11.5%2C7%2C11.5%0Az%27%2F%3E%0A%3C%2Fsvg%3E\") 0 5px no-repeat;\n    background-size: 18px 18px;\n}\n\n.search::-webkit-input-placeholder {\n  color: #f1f1f1;\n}\n\n.search:-ms-input-placeholder {\n  color: #f1f1f1;\n}\n\n.search::placeholder {\n  color: #f1f1f1;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/search-bar/search-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"search-bar\">\n  <div class=\"active\">\n    <app-header></app-header>\n    <h2>Voice log</h2>\n    <input id=\"searchInput\" class=\"search ng-pristine ng-valid ng-touched\" type=\"text\" placeholder=\"Type for search\"\n           (keyup)=\"typeForSearch($event)\" >\n  </div>\n  <div class=\"dark-canvas\"></div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/search-bar/search-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__message_service__ = __webpack_require__("../../../../../src/app/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchBarComponent = (function () {
    function SearchBarComponent(messageService) {
        this.messageService = messageService;
    }
    SearchBarComponent.prototype.ngOnInit = function () {
        this.subscription = this.messageService.getMessage().subscribe(function (keywords) {
            var searchInput = document.querySelector('#searchInput');
            searchInput['value'] = keywords.text;
        });
    };
    SearchBarComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    SearchBarComponent.prototype.typeForSearch = function (event) {
        var _this = this;
        clearTimeout(this.timeout);
        this.searchKeyword = event.target.value;
        this.timeout = setTimeout(function () {
            if (_this.searchKeyword === event.target.value) {
                _this.messageService.sendMessage(event.target.value);
            }
        }, 800);
    };
    SearchBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-search-bar',
            template: __webpack_require__("../../../../../src/app/search-bar/search-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/search-bar/search-bar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__message_service__["a" /* MessageService */]])
    ], SearchBarComponent);
    return SearchBarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/voice-log-list/voice-log-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".voice-log-list {\n  width: 100%;\n}\n\n.error, .no-data {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  min-height: 300px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/voice-log-list/voice-log-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"voice-log-list\" [ngSwitch]=\"state\">\n  <div *ngSwitchCase=\"'hot'\">\n    <app-hot-keywords></app-hot-keywords>\n  </div>\n  <div class=\"loader\" *ngSwitchCase=\"'loading'\">\n    <div class=\"spinner\">\n      <div class=\"bounce1\"></div>\n      <div class=\"bounce2\"></div>\n      <div class=\"bounce3\"></div>\n    </div>\n  </div>\n  <div class=\"list\" *ngSwitchCase=\"'loaded'\">\n    <div class=\"no-data\" *ngIf=\"voiceLogs.length === 0\">\n      <h2>No data!</h2>\n    </div>\n    <app-voice-log *ngFor=\"let voiceLog of voiceLogs\" [voiceLog]=\"voiceLog\"></app-voice-log>\n  </div>\n  <div class=\"error\" *ngSwitchCase=\"'error'\">\n    <h2>Error !</h2>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/voice-log-list/voice-log-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VoiceLogListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__voice_log_voice_log_model__ = __webpack_require__("../../../../../src/app/voice-log/voice-log.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__message_service__ = __webpack_require__("../../../../../src/app/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VoiceLogListComponent = (function () {
    function VoiceLogListComponent(http, messageService) {
        var _this = this;
        this.http = http;
        this.messageService = messageService;
        this.state = 'hot';
        this.voiceLogs = [];
        this.subscription = this.messageService.getMessage().subscribe(function (keywords) {
            _this.keywords = keywords.text;
            if (0 === _this.keywords.length) {
                _this.state = 'hot';
            }
            else {
                _this.search(_this.keywords);
            }
        });
    }
    VoiceLogListComponent.prototype.search = function (keywords) {
        var _this = this;
        this.state = 'loading';
        this.voiceLogs.length = 0;
        this.http.get("/api/search/" + keywords).subscribe(function (data) {
            _this.state = 'loaded';
            data.forEach(function (record) { return _this.voiceLogs.push(new __WEBPACK_IMPORTED_MODULE_1__voice_log_voice_log_model__["a" /* VoiceLog */](record, _this.keywords)); });
        }, function (err) {
            _this.state = 'error';
            console.log(err);
        });
    };
    VoiceLogListComponent.prototype.ngOnInit = function () {
    };
    VoiceLogListComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    VoiceLogListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-voice-log-list',
            template: __webpack_require__("../../../../../src/app/voice-log-list/voice-log-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/voice-log-list/voice-log-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__message_service__["a" /* MessageService */]])
    ], VoiceLogListComponent);
    return VoiceLogListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/voice-log/voice-log.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".voice-log {\n    width: auto;\n    padding: 20px 60px;\n    border-bottom: 1px dashed #4c4c4c;\n}\n\n.voice-subtitle {\n   color: gray;\n}\n\n.line {\n  display: inline-block;\n  width: 90px;\n  border: 1px solid;\n  margin-bottom: 4px;\n}\n\n.voice-log p {\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n\n.voice-log .fa-ellipsis-h {\n  font-size: 13px;\n}\n\n.log-action-bar {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 12px 0;\n}\n\n.create-time {\n  margin-top: 10px !important;\n  font-size: 12px;\n\n}\n\n.voice-waveform {\n  max-width: 600px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/voice-log/voice-log.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"voice-log\">\n  <div class=\"log-action-bar\">\n      <div>\n        <i class=\"fa fa-volume-control-phone\" aria-hidden=\"true\"></i>\n        <span>RM: {{voiceLog.rmId}}</span>\n        <i class=\"fa fa-ellipsis-h\" aria-hidden=\"true\"></i>\n        <span class=\"line\"></span>\n        <i class=\"fa fa-ellipsis-h\" aria-hidden=\"true\"></i>\n        <i class=\"fa fa-mobile\" aria-hidden=\"true\"></i>\n        <span>Client: {{voiceLog.clientId}}</span>\n\n      </div>\n      <div>\n        <button class=\"play-audio\" (click)=\"play()\" *ngIf=\"!isPlaying\">\n          <i class=\"fa fa-play\" aria-hidden=\"true\"></i>\n          play\n        </button>\n        <button class=\"pause-audio\" (click)=\"pause()\" *ngIf=\"isPlaying\">\n          <i class=\"fa fa-pause\" aria-hidden=\"true\"></i>\n          pause\n        </button>\n      </div>\n  </div>\n  <p class=\"voice-subtitle\" [innerHTML]=\"voiceLog.highlightFulltext\"></p>\n  <div id=\"{{voiceLog.id}}\" class=\"voice-waveform\"></div>\n  <audio id=\"{{voiceLog.id}}_audio\"></audio>\n  <p class=\"create-time\">\n    <span>{{voiceLog.createdTime}}</span>\n  </p>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/voice-log/voice-log.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VoiceLogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_peaks_js_peaks_js__ = __webpack_require__("../../../../peaks.js/peaks.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_peaks_js_peaks_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_peaks_js_peaks_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__voice_log_model__ = __webpack_require__("../../../../../src/app/voice-log/voice-log.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VoiceLogComponent = (function () {
    function VoiceLogComponent(voiceLogEle) {
        this.voiceLogEle = voiceLogEle;
        this.isPlaying = false;
    }
    VoiceLogComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.initPeak();
        var highlightList = this.voiceLogEle.nativeElement.querySelectorAll('.highlight');
        highlightList.forEach(function (ele, idx) {
            ele.setAttribute('segmentId', 'seg-' + idx);
            ele.addEventListener('click', function (event) {
                this.playKeyword(event);
            }.bind(_this));
        });
    };
    VoiceLogComponent.prototype.ngOnDestroy = function () {
        this.peaksInstance.player.destroy();
    };
    VoiceLogComponent.prototype.play = function () {
        this.loadAudio();
        this.isPlaying = true;
        this.peaksInstance.player.play();
    };
    VoiceLogComponent.prototype.pause = function () {
        this.loadAudio();
        this.isPlaying = false;
        this.peaksInstance.player.pause();
    };
    VoiceLogComponent.prototype.playKeyword = function (event) {
        this.loadAudio();
        this.isPlaying = true;
        var segmentId = event.target.getAttribute('segmentId');
        var segment = this.peaksInstance.segments.getSegment(segmentId);
        if (segment) {
            this.peaksInstance.player.playSegment(segment);
            clearInterval(this.interval);
            this.interval = setInterval(function () {
                if (this.peaksInstance.player.getCurrentTime() >= segment.endTime) {
                    clearInterval(this.interval);
                    this.play();
                }
            }.bind(this), 30);
        }
    };
    VoiceLogComponent.prototype.loadAudio = function () {
        var audioEle = document.querySelector("#" + this.voiceLog.id + "_audio");
        if (!audioEle.querySelectorAll('source').length) {
            audioEle.innerHTML += "<source src=\"" + this.voiceLog.wavFile + "\" type=\"audio/mpeg\">";
        }
    };
    VoiceLogComponent.prototype.initPeak = function () {
        var _this = this;
        this.peaksInstance = __WEBPACK_IMPORTED_MODULE_1_peaks_js_peaks_js__["init"]({
            container: document.querySelector("#" + this.voiceLog.id),
            mediaElement: document.querySelector("#" + this.voiceLog.id + "_audio"),
            height: 80,
            zoomLevels: [512, 1024, 2048, 4096],
            dataUri: this.voiceLog.waveform
        });
        this.peaksInstance.on('peaks.ready', function () {
            // this.createPoints();
            this.createSegment();
        }.bind(this));
        document.querySelector("#" + this.voiceLog.id + "_audio").addEventListener('ended', function () {
            _this.isPlaying = false;
        });
    };
    VoiceLogComponent.prototype.createSegment = function () {
        var _this = this;
        var enabledWordTimeList = this.voiceLog.wordTime.filter(function (wordTime) {
            return _this.voiceLog.keywords.indexOf(wordTime.word) > -1;
        });
        enabledWordTimeList.forEach(function (wordTime, index) {
            if (_this.voiceLog.keywords.indexOf(wordTime.word) > -1) {
                _this.peaksInstance.segments.add([{
                        startTime: wordTime.startTime,
                        endTime: wordTime.endTime + 0.8,
                        id: 'seg-' + index,
                        color: 'orange'
                    }
                ]);
            }
        });
    };
    VoiceLogComponent.prototype.createPoints = function () {
        var _this = this;
        this.voiceLog.wordTime.forEach(function (wordTime, index) {
            _this.peaksInstance.points.add([{
                    time: wordTime.startTime,
                    id: 'point-' + index,
                    color: 'orange'
                }
            ]);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__voice_log_model__["a" /* VoiceLog */])
    ], VoiceLogComponent.prototype, "voiceLog", void 0);
    VoiceLogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-voice-log',
            template: __webpack_require__("../../../../../src/app/voice-log/voice-log.component.html"),
            styles: [__webpack_require__("../../../../../src/app/voice-log/voice-log.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */]])
    ], VoiceLogComponent);
    return VoiceLogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/voice-log/voice-log.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VoiceLog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__word_time_model__ = __webpack_require__("../../../../../src/app/voice-log/word-time.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");


var VoiceLog = (function () {
    function VoiceLog(response, keywords) {
        if (keywords === void 0) { keywords = ''; }
        var _this = this;
        this.id = 'peaks_' + response.id;
        this.keywords = keywords.split(/(\s+)/);
        this.rmId = response.rmId;
        this.clientId = response.clientId;
        this.waveform = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].waveformUri + "/" + response.id + ".json";
        this.fullText = response.fullText;
        this.wavFile = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].voiceUri + "/" + response.wavfile;
        console.log(this.waveform);
        this.wordTime = [];
        var wordTimeList = response.keywordTimes || [];
        wordTimeList.forEach(function (wordTime) {
            _this.wordTime.push(new __WEBPACK_IMPORTED_MODULE_0__word_time_model__["a" /* WordTime */](wordTime[0], wordTime[1], wordTime[2]));
        });
        this.highlightFulltext = this.getFulltextHtmlWithHighlight();
        this.createdTime = response.createdTime;
    }
    VoiceLog.prototype.getFulltextHtmlWithHighlight = function () {
        var highlightFulltext = this.fullText || '';
        highlightFulltext = highlightFulltext.replace(/</g, '');
        highlightFulltext = highlightFulltext.replace(/>/g, '');
        this.keywords.forEach(function (keyword) {
            if (keyword.trim().length > 0) {
                var rg = new RegExp(keyword, 'g');
                highlightFulltext = highlightFulltext.replace(rg, "<" + keyword + ">");
            }
        });
        return highlightFulltext.replace(/<([\w@%&()_":\\'/.,]*)>/gi, '<span class="highlight">$1</span>');
    };
    return VoiceLog;
}());



/***/ }),

/***/ "../../../../../src/app/voice-log/word-time.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordTime; });
var WordTime = (function () {
    function WordTime(word, startTime, endTime) {
        this.word = word;
        this.startTime = parseFloat(startTime) / 1000;
        this.endTime = parseFloat(endTime) / 1000;
    }
    return WordTime;
}());



/***/ }),

/***/ "../../../../../src/assets/images/bg-voice-log.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bg-voice-log.3ef64e6cd0ca33b6d11f.png";

/***/ }),

/***/ "../../../../../src/assets/images/credit-suisse-logo.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    waveformUri: '/api/waveform',
    voiceUri: '/api/voice'
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map