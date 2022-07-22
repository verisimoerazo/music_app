import { Injectable } from '@angular/core';
import * as dataArtists from "./artists.json";

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  header = {'Access-Control-Request-Headers': '*', 'Authorization': 'Bearer BQBVm9DUlJg5kVmMfw6trp4wow3GbdgrARXG64jueSZof2VXrlX6yJWc0CUsQ07I3rgfGgelw5n9m4QqPLRqZQoxBtVkrrd3J7j6_4lV593GHUGWUnRhIiZ-Qxf7XROFW2rAwYViKie-XOpbRO2CPO6SjVeLM_5pqBxw4zMYslBi259dp4uW4oAroPla0b6NB-4'};
  // url_server = "https://music-back-seminario.herokuapp.com/"; 

  constructor() { }

  getArtists() {
    return fetch("https://api.spotify.com/v1/artists?ids=2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6", { mode: 'cors' , headers: this.header} ).then(
      (artists) => artists.json()
    );
  }

  // Inicio de Actividad 6 V.E

  getEpisodes(){
    return fetch("https://api.spotify.com/v1/episodes?ids=512ojhOuo1ktJprKbVcKyQ", { mode: 'cors' , headers: this.header} ).then(
      (episodes) => episodes.json()
    );
  }

  // Fin de Actividad 6 V.E

  getArtistsFromJson(){
    return dataArtists;
  };

  getAlbums() {
    return fetch("https://api.spotify.com/v1/albums?ids=382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc", { mode: 'cors' , headers: this.header} ).then(
      (albums) => albums.json()
    );
  }

  getArtistsTracks(artist_id){
    return []
  }

}
