import { ModalController, NavParams } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { modalController } from '@ionic/core';

@Component({
  selector: 'app-album-modal',
  templateUrl: './album-modal.page.html',
  styleUrls: ['./album-modal.page.scss'],
})
export class AlbumModalPage implements OnInit {

  album: string;
  songs: any;

  constructor(private navParams: NavParams, private modalController: ModalController) { }

  ngOnInit() {
  }

// Inicio de Actividad 7 Nota Individual

  ionViewDidEnter(){
    this.album = this.navParams.data.album;
  }

  closemodal(){
    this.modalController.dismiss()
  }

  async selectAlbum(album) {
    await this.modalController.dismiss(album)
  }

  // Fin de Actividad 7 Nota Individual

}
