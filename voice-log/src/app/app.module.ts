import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { VoiceLogListComponent } from './voice-log-list/voice-log-list.component';
import { VoiceLogComponent } from './voice-log/voice-log.component';
import { MessageService } from './message.service';
import { HotKeywordsComponent } from './hot-keywords/hot-keywords.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchBarComponent,
    VoiceLogListComponent,
    VoiceLogComponent,
    HotKeywordsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
