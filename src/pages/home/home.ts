import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  url: string;

  constructor(private streamingMedia: StreamingMedia) { 
    this.url ='https://s3.amazonaws.com/muvieblues-movies/trail+movie/Appatlo+Okadundevadu+Full+Movie+-+2017+Telugu+Movies+-+Nara+Rohith%2C+Sree+Vishnu%2C+Tanya+Hope%2C+Sasha.mp4';    
  }
  
  playvideo(){
    let options: StreamingVideoOptions = {
      successCallback: () => { console.log('Video played') },
      errorCallback: (e) => { console.log('Error streaming') },
      orientation: 'landscape'
    };
    this.streamingMedia.playVideo(this.url, options);

  }

}
