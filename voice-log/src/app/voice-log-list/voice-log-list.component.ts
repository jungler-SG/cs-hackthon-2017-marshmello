import {Component, OnInit, OnDestroy} from '@angular/core';
import {VoiceLog} from '../voice-log/voice-log.model';
import {HttpClient} from '@angular/common/http';
import {Subscription} from 'rxjs/Subscription';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-voice-log-list',
  templateUrl: './voice-log-list.component.html',
  styleUrls: ['./voice-log-list.component.css']
})
export class VoiceLogListComponent implements OnInit, OnDestroy {

  voiceLogs: VoiceLog[];
  keywords: any;
  subscription: Subscription;
  state = 'hot';

  constructor(private http: HttpClient, private messageService: MessageService) {
    this.voiceLogs = [];
    this.subscription = this.messageService.getMessage().subscribe(keywords => {
      this.keywords = keywords.text;
      if (0 === this.keywords.length) {
        this.state = 'hot';
      } else {
        this.search(this.keywords);
      }

    });
  }

  search(keywords) {
    this.state = 'loading';
    this.voiceLogs.length = 0;
    this.http.get(`/api/search/${keywords}`).subscribe((data: any[]) => {
      this.state = 'loaded';
      data.forEach((record) => this.voiceLogs.push(new VoiceLog(record, this.keywords)));
    }, err => {
      this.state = 'error';
      console.log(err);
    });
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
