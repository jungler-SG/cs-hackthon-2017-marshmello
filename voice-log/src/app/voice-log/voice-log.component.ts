import { Component, Input, AfterViewInit } from '@angular/core';
import * as Peaks from 'peaks.js/peaks.js';
import { VoiceLog } from './voice-log.model';

@Component({
  selector: 'voice-log',
  templateUrl: './voice-log.component.html',
  styleUrls: ['./voice-log.component.css']
})
export class VoiceLogComponent implements AfterViewInit {
  
  @Input() voiceLog: VoiceLog;

  peaksInstance: any;

  constructor() { }

  ngAfterViewInit() {
    this.initPeak();
  }

  play(): void {
    let audoEle = document.querySelector(`#${this.voiceLog.id}_audio`);
    if(!audoEle.querySelectorAll('source').length) {
      audoEle.innerHTML += `<source src="${this.voiceLog.audioUri}" type="audio/mpeg">`;
    }
    
    this.peaksInstance.player.play();
  }

  private initPeak(): void {
    this.peaksInstance = Peaks.init({
      container: document.querySelector(`#${this.voiceLog.id}`),
      mediaElement: document.querySelector(`#${this.voiceLog.id}_audio`),
      height: 80,
      dataUri: this.voiceLog.waveformUri,
      //overviewWaveformColor: 'gray'
    });
  
    this.peaksInstance.on('peaks.ready', function() {
      console.log("peaks initialed");
    });
  }

}
