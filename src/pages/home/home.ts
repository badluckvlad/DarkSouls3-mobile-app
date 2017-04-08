import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Api } from '../../providers/api';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [YoutubeVideoPlayer]
})
export class HomePage {

  data: string[];
  shownGroup = null;
  test: any;

  constructor(
    public navCtrl: NavController,
    public api: Api,
    public youtube: YoutubeVideoPlayer,
    public storage: Storage
  ) {
    
  }

  ionViewDidLoad() {
    this.getData();
    console.log(this.data);
    this.testF();
  }

  getData() {
    this.api.getData()
      .subscribe(data => this.data = data);
  }

  video(videoId) {
    this.youtube.openVideo(videoId);
  }

  toggleGroup(group) {
    if (this.isShown(group)) {
      this.shownGroup = null;
    } else {
      this.shownGroup = group;
    }
  };
  isShown(group) {
    return this.shownGroup === group;
  };

  testF() {
    this.storage.ready().then(() => {

       // set a key/value
       this.storage.set('name', 'Max');

       // Or to get a key/value pair
       this.storage.get('name').then((val) => {
         console.log('Your age is', val);
       })
     });
  }
}