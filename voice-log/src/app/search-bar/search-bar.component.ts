import {Component, OnInit, OnDestroy} from '@angular/core';
import {MessageService} from '../message.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit, OnDestroy {

  timeout: any;
  searchKeyword: string;
  subscription: Subscription;

  constructor(private messageService: MessageService) {
  }

  ngOnInit() {
    this.subscription = this.messageService.getMessage().subscribe(keywords => {
      const searchInput = document.querySelector('#searchInput');
      searchInput['value'] = keywords.text;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  typeForSearch(event: any) {
    clearTimeout(this.timeout);
    this.searchKeyword = event.target.value;
    this.timeout = setTimeout(() => {
      if (this.searchKeyword === event.target.value) {
        this.messageService.sendMessage(event.target.value);
      }
    }, 800);
  }

}
