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

  data: any;
  shownItem = null;
  test: any;
  category = "estus_shards";

  constructor(
    public navCtrl: NavController,
    public api: Api,
    public youtube: YoutubeVideoPlayer,
    public storage: Storage
  ) { }

  ionViewDidLoad() {
    this.getData(this.category);
  }

  getData(category) {
    this.api.getData(category)
      .subscribe(data => this.data = data);
  }

  video(videoId) {
    this.youtube.openVideo(videoId);
  }

  toggleItem(item) {
    if (this.isShown(item)) {
      this.shownItem = null;
    } else {
      this.shownItem = item;
    }
  };
  
  isShown(item) {
    return this.shownItem === item;
  };

  storeKey() {
    this.storage.ready().then(() => {
       this.storage.get('name').then((val) => {
         this.test = val;
       })
     });
  }

  getItems(category) {
    this.category = category;
    this.getData(this.category);
  }
  
}