import { Component, OnInit } from '@angular/core';
import { VoiceLog } from '../voice-log/voice-log.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-voice-log-list',
  templateUrl: './voice-log-list.component.html',
  styleUrls: ['./voice-log-list.component.css']
})
export class VoiceLogListComponent implements OnInit {

  voiceLogs: VoiceLog[];

  constructor(private http: HttpClient) {
    this.voiceLogs = [];
    this.http.get('/api/search').subscribe((data: any[]) => {
      console.log(data);
      data.forEach((record)=>this.voiceLogs.push(new VoiceLog(record)));
    },err => {
      console.log("Error occured.");
      console.log(err);
    });
    
  }

  ngOnInit() {
   
  }

}
