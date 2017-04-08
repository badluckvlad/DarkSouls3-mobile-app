import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Api } from '../../providers/api';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [YoutubeVideoPlayer, Storage]
})
export class HomePage {

  data: string[];
  shownGroup = null;
  test: any;

  constructor(
    public navCtrl: NavController,
    public api: Api,
    public youtube: YoutubeVideoPlayer
  ) {
  }

  ionViewDidLoad() {
    this.getData();
    console.log(this.data);
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
}