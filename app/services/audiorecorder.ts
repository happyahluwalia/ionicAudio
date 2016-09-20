//http://www.erikschierboom.com/2016/09/02/ionic2-audio-recorder/
import { MediaPlugin } from 'ionic-native';
import { Injectable } from '@angular/core';

@Injectable()
export class AudioRecorder{
    mediaPlugin: MediaPlugin = null;
    state: AudioRecorderState = AudioRecorderState.Ready;

    get MediaPlugin() : MediaPlugin{
        if (this.mediaPlugin == null){
            this.mediaPlugin = new MediaPlugin('../Library/NoCloud/recording.wav');
        }
        return this.mediaPlugin;    
    }

startRecording(){
  this.MediaPlugin.startRecord();
  this.state = AudioRecorderState.Recording;
}

stopRecording(){
  this.MediaPlugin.stopRecord();
  this.state = AudioRecorderState.Recorded;
}

startPlayback(){
  this.MediaPlugin.play();
  this.state = AudioRecorderState.Playing;
}

stopPlayback(){
  this.MediaPlugin.stop();
  this.state = AudioRecorderState.Ready;
}

}

export enum AudioRecorderState{
    Ready,
    Recording,
    Recorded,
    Playing
}