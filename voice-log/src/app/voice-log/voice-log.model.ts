import {WordTime} from './word-time.model';
import {environment} from '../../environments/environment';

export class VoiceLog {
  id: string;
  rmId: string;
  clientId: string;
  waveform: string;
  fullText: string;
  wavFile: string;
  wordTime: WordTime[];
  highlightFulltext: string;
  keywords: string[];
  createdTime: string;

  constructor(response: any, keywords = '') {
    this.id = 'peaks_' + response.id;
    this.keywords = keywords.split(/(\s+)/);

    this.rmId = response.rmId;
    this.clientId = response.clientId;
    this.waveform = `${environment.waveformUri}/${response.id}.json`;
    this.fullText = response.fullText;
    this.wavFile = `${environment.voiceUri}/${response.wavfile}`;
    console.log(this.waveform);
    this.wordTime = [];
    const wordTimeList = response.keywordTimes || [];
    wordTimeList.forEach((wordTime) => {
      this.wordTime.push(new WordTime(wordTime[0], wordTime[1], wordTime[2]));
    });
    this.highlightFulltext = this.getFulltextHtmlWithHighlight();
    this.createdTime = response.createdTime;
  }

  getFulltextHtmlWithHighlight(): string {
    let highlightFulltext = this.fullText || '';
    this.keywords.forEach((keyword) => {
      const rg = new RegExp(keyword, 'g');
      highlightFulltext = highlightFulltext.replace(rg, `<span class="highlight">${keyword}</span>`);
    });
    return highlightFulltext;
  }

}
