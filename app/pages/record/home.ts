import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AudioRecorder, AudioRecorderState } from '../../services/audiorecorder.ts';

@Component({
  templateUrl: 'build/pages/record/home.html',
  providers: [AudioRecorder]
})
export class RecordHomePage {

  //media: AudioRecorder; 
  AudioRecorderState = AudioRecorderState;

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController,
              public audioRecorder: AudioRecorder) {
    //this.audioRecorder.getMediaPlugin();
  }
  
  startRecording(){
  try{
    this.audioRecorder.startRecording();
  }
  catch(e){
    this.showAlert('Could not start recording '+e);
  }
}

stopRecording(){
  try{
      this.audioRecorder.stopRecording();
  }
  catch(e){
    this.showAlert('Could not stop recording');
  }
}

startPlayback(){
  try{
      this.audioRecorder.startPlayback();
  }
  catch(e){
    this.showAlert('Could not start audio playback');
  }
}

stopPlayback(){
  try{
      this.audioRecorder.stopPlayback();
  }
  catch(e){
    this.showAlert('Could not stop audio playback');
  }
}

showAlert(message){
  let alert = this.alertCtrl.create({
    title: 'Error',
    subTitle: message,
    buttons: ['OK']
  });
  alert.present();
}
}
