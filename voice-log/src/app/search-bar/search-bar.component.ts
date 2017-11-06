import {Component, OnInit} from '@angular/core';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  timeout: any;
  searchKeyword: string;

  constructor(private messageService: MessageService) {
  }

  ngOnInit() {
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
