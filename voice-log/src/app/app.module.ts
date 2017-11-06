import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { VoiceLogListComponent } from './voice-log-list/voice-log-list.component';
import { VoiceLogComponent } from './voice-log/voice-log.component';
import { MessageService } from './message.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchBarComponent,
    VoiceLogListComponent,
    VoiceLogComponent
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
