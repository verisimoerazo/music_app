import { Injectable } from '@angular/core';
import * as dataArtists from "./artists.json";

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  header = {'Access-Control-Request-Headers': '*', 'Authorization': 'Bearer BQCrXN6zvDZE0tl29p9lYn9didm7CjN1VX3EJ_Y7JkZBbzy3ntZXOi9ZAMOoRokvm78V9KRrxMgM7kOf2ajlJHgSNFxWuIuKDuC7eHUHlnaFcRkdmxtRdyaqi6G5yfqSi7qlTopXEocVAJLw6gyfwsNqZ--b-nEAfDztu9W5i7wMkYmiO6-9srwfdLsRiInqe9g'};
  // url_server = "https://music-back-seminario.herokuapp.com/"; 

  constructor() { }

  getArtists() {
    return fetch("https://api.spotify.com/v1/artists?ids=2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6", { mode: 'cors' , headers: this.header} ).then(
      (artists) => artists.json()
    );
  }

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
