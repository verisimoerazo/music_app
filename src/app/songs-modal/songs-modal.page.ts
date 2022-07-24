import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { modalController } from '@ionic/core';

@Component({
  selector: 'app-songs-modal',
  templateUrl: './songs-modal.page.html',
  styleUrls: ['./songs-modal.page.scss'],
})
export class SongsModalPage implements OnInit {

  artist: string;
  songs: any;

  constructor(private navParams: NavParams, private modalController: ModalController) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.artist = this.navParams.data.artist;
    this.songs = this.navParams.data.songs;
  }

  closemodal(){
    this.modalController.dismiss()
  }

  async selectSong(song) {
    await this.modalController.dismiss(song)
  }

}
