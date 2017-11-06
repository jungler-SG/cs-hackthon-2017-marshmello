export class VoiceLog {
    id: String;
    rmName: String;
    clientName: String;
    keywords: [String];
    waveformUri: String;
    subtitle: String;
    date: String;
    audioUri: String;

    constructor(response:any  /*id:String, rmName: String, clientName: String, keywords: [String], waveformUri: String, subTitle:String, date: String*/) {
        //console.log("____");
        //console.log(response);
        this.id = response.id;
        
        this.rmName = response.rmName;
        this.clientName = response.clientName;
        this.waveformUri = response.waveformUri;
        this.subtitle = response.subtitle;
        this.audioUri = response.audioUri;
        
        /*
        this.date = date;
        this.keywords = keywords;
        */
        
    }

}