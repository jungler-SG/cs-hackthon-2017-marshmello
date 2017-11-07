export class WordTime {
    word: string;
    startTime: number;
    endTime: number;

    constructor(word: string, startTime: string, endTime: string) {
      this.word = word;
      this.startTime = parseFloat(startTime) / 1000;
      this.endTime = parseFloat(endTime) / 1000;
    }

}
