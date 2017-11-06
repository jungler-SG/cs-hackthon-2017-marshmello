import {WordTime} from './word-time.model';

export class VoiceLog {
  id: string;
  rmName: string;
  clientName: string;
  waveform: string;
  fulltext: string;
  wavFile: string;
  wordTime: WordTime[];
  highlightFulltext: string;
  keywords: string[];

  constructor(response: any, keywords = '') {
    this.id = response.id;
    this.keywords = keywords.split(/(\s+)/);

    this.rmName = response.rmName;
    this.clientName = response.clientName;
    this.waveform = `/api/waveform/${this.id}.json`;
    this.fulltext = response.fulltext;
    this.wavFile = response.wavfile;
    this.wordTime = [];
    const wordTimeList = response.wordTime || [];
    wordTimeList.forEach((wordTime) => {
      this.wordTime.push(new WordTime(wordTime.word, wordTime.startTime, wordTime.endTime));
    });
    this.highlightFulltext = this.getFulltextHtmlWithHighlight();
  }

  getFulltextHtmlWithHighlight(): string {
    let highlightFulltext = this.fulltext;
    this.keywords.forEach((keyword) => {
      const rg = new RegExp(keyword, 'g');
      highlightFulltext = highlightFulltext.replace(rg, `<span class="highlight">${keyword}</span>`);
    });
    return highlightFulltext;
  }

}
