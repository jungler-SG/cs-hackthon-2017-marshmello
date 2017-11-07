import {WordTime} from './word-time.model';

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

  constructor(response: any, keywords = '') {
    this.id = response.id;
    this.keywords = keywords.split(/(\s+)/);

    this.rmId = response.rmId;
    this.clientId = response.clientId;
    this.waveform = `/api/waveform/${this.id}.json`;
    this.fullText = response.fullText;
    this.wavFile = `/api/voice/${response.wavfile}`;
    this.wordTime = [];
    const wordTimeList = response.keywordTimes || [];
    wordTimeList.forEach((wordTime) => {
      this.wordTime.push(new WordTime(wordTime.word, wordTime.startTime, wordTime.endTime));
    });
    this.highlightFulltext = this.getFulltextHtmlWithHighlight();
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
