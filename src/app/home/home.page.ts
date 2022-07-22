import { Component } from '@angular/core';
import { MusicService } from '../services/music.service';
import { ModalController } from '@ionic/angular';
import { SongsModalPage } from '../songs-modal/songs-modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  artists: any;
  artistsFromJson: any;
  albums: any;
  episodes: any;

  slideOps ={
    initialSlide: 1,
    slidesPerView: 3,
    centeredSlides: true,
    speed: 400

  }


  constructor(private musicService: MusicService, private modalController: ModalController) {}

  ionViewDidEnter() {
    //Lista de artistas desde api
    this.musicService.getArtists().then(listArtists => {
      this.artists = listArtists.artists;
      // console.log(this.artists)
    });

    // lista de artistas desde apijson 
    this.artistsFromJson = this.musicService.getArtistsFromJson();
    //console.log(this.artistsFromJson.artists);

    //albums desde api
    this.musicService.getAlbums().then(listAlbums => {
      this.albums = listAlbums.albums;
      console.log("get albums", this.albums);
    })

    // Inicio de Actividad 6 V.E

    this.musicService.getEpisodes().then(idEpisodes => {
      this.episodes = idEpisodes.episodes;  
      console.log("get episodes", this.episodes);
    })

    // Fin de Actividad 6 V.E

  }

  async showSongs(artist){
    const songs = await this.musicService.getArtistsTracks(artist.id);
    const modal = await this.modalController.create({
      component: SongsModalPage,
      componentProps: {
        songs: songs,
        artist: artist.name
      }
    });
    modal.present();
  }

}
