import {Component, Input, AfterViewInit, ElementRef, OnDestroy} from '@angular/core';
import * as Peaks from 'peaks.js/peaks.js';
import {VoiceLog} from './voice-log.model';

@Component({
  selector: 'app-voice-log',
  templateUrl: './voice-log.component.html',
  styleUrls: ['./voice-log.component.css']
})
export class VoiceLogComponent implements AfterViewInit, OnDestroy {
  @Input() voiceLog: VoiceLog;

  peaksInstance: any;
  interval: any;

  constructor(private voiceLogEle: ElementRef) {

  }

  ngAfterViewInit() {
    this.initPeak();
    const highlightList = this.voiceLogEle.nativeElement.querySelectorAll('.highlight');
    highlightList.forEach((ele, idx) => {
      ele.setAttribute('segmentId', 'seg-' + idx);
      ele.addEventListener('click', function (event) {
        this.playKeyword(event);
      }.bind(this));
    });
  }

  ngOnDestroy() {
    this.peaksInstance.player.destroy();
  }


  play(): void {
    this.loadAudio();
    this.peaksInstance.player.play();
  }

  playKeyword(event): void {
    this.loadAudio();
    const segmentId = event.target.getAttribute('segmentId');
    const segment = this.peaksInstance.segments.getSegment(segmentId);
    if (segment) {
      this.peaksInstance.player.playSegment(segment);
      clearInterval(this.interval);
      this.interval = setInterval(function () {
        if (this.peaksInstance.player.getCurrentTime() >= segment.endTime) {
          clearInterval(this.interval);
          this.peaksInstance.player.play();
        }
      }.bind(this), 30);
    }

  }

  loadAudio(): void {
    const audioEle = document.querySelector(`#${this.voiceLog.id}_audio`);
    if (!audioEle.querySelectorAll('source').length) {
      audioEle.innerHTML += `<source src="${this.voiceLog.wavFile}" type="audio/mpeg">`;
    }
  }

  initPeak(): void {
    this.peaksInstance = Peaks.init({
      container: document.querySelector(`#${this.voiceLog.id}`),
      mediaElement: document.querySelector(`#${this.voiceLog.id}_audio`),
      height: 80,
      dataUri: this.voiceLog.waveform
    });
    this.peaksInstance.on('peaks.ready', function () {
      // this.createPoints();
      this.createSegment();
    }.bind(this));
  }

  createSegment(): void {
    const enabledWordTimeList = this.voiceLog.wordTime.filter((wordTime) => {
      return this.voiceLog.keywords.indexOf(wordTime.word) > -1;
    });
    enabledWordTimeList.forEach((wordTime, index) => {
      if (this.voiceLog.keywords.indexOf(wordTime.word) > -1) {
        this.peaksInstance.segments.add([{
          startTime: wordTime.startTime,
          endTime: wordTime.endTime + 0.8,
          id: 'seg-' + index,
          color: 'orange'
        }
        ]);
      }
    });
  }

  createPoints(): void {
    this.voiceLog.wordTime.forEach((wordTime, index) => {
      this.peaksInstance.points.add([{
        time: wordTime.startTime,
        id: 'point-' + index,
        color: 'orange'
      }
      ]);
    });
  }

}
