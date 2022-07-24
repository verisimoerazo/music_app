import { ModalController, NavParams } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-album-modal',
  templateUrl: './album-modal.page.html',
  styleUrls: ['./album-modal.page.scss'],
})
export class AlbumModalPage implements OnInit {

  album: string;
  songs: any;

  constructor(private navParams: NavParams) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.album = this.navParams.data.album;
  }

}
