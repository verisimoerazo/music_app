import { Component } from '@angular/core';
import { MusicService } from '../services/music.service';
import { ModalController } from '@ionic/angular';
import { SongsModalPage } from '../songs-modal/songs-modal.page';
import { AlbumModalPage } from '../album-modal/album-modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  artists: any;
  artistsFromJson: any;
  albums: any;
  currentSong: HTMLAudioElement;
  newTime;
  // episodes: any;

  slideOps ={
    initialSlide: 1,
    slidesPerView: 3,
    centeredSlides: true,
    speed: 400

  }

  song = {
    playing: false,
    name: '',
    preview_url: ''
  }

  constructor(private musicService: MusicService, private modalController: ModalController) {}

  ionViewDidEnter() {
    //Lista de artistas desde api 
    this.musicService.getArtists().then(listArtists => {
      this.artists = listArtists;
    });

    // lista de artistas desde apijson 
    this.artistsFromJson = this.musicService.getArtistsFromJson();
    //console.log(this.artistsFromJson.artists);

    //albums desde api
    this.musicService.getAlbums().then(listAlbums => {
      this.albums = listAlbums;
    })
  }


    // Inicio de Actividad 6 V.E

    // this.musicService.getEpisodes().then(idEpisodes => {
    //   this.episodes = idEpisodes.episodes;  
      // console.log("get episodes", this.episodes);
    // })

    // Fin de Actividad 6 V.E


  async showSongs(artist){
    const songs = await this.musicService.getArtistTracks(artist.id);
    // console.log(songs)
    const modal = await this.modalController.create({
      component: SongsModalPage,
      componentProps: {
      songs: songs,
      artist: artist.name
      }
    });
    modal.onDidDismiss().then( dataReturned =>{
      this.song = dataReturned.data
    })
    return await modal.present();
  }

  async showAlbums(album){
    const albums = await this.musicService.getAlbumsTracks(album.id);
    console.log(albums)
    const modal = await this.modalController.create({
      component: AlbumModalPage,
      componentProps: {
        albums: albums,
        album: album.name
      }
    });
    modal.onDidDismiss().then( dataReturned =>{
      this.albums = dataReturned.data
    })
    return await modal.present();
  }

  play() {
    this.currentSong = new Audio(this.song.preview_url)
    this.currentSong.play();
    this.currentSong.addEventListener("timeupdate", () => {
      this.newTime = (1 / this.currentSong.duration ) * this.currentSong.currentTime;
    })
    this.song.playing = true;
  }

  pause() {
    this.currentSong.pause();
    this.song.playing = false;
  }

  parseTime( time = "0.00"){
    if (time){
      const partTime =parseInt(time.toString().split(".")[0], 10);
      let minutes = Math.floor(partTime / 60 ).toString();
      if(minutes.length == 1){
        minutes = "0" + minutes;
      }
      let seconds = (partTime % 60 ).toString();
      if (seconds.length == 1){
        seconds = "0" + seconds;
      }
      return minutes + ":" + seconds
    }
  }

}