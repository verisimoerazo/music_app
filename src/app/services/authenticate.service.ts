import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HttpClient, HttpHeaders, HttpResponse, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  header = {'Access-Control-Request-Headers': '*',  'Content-Type': 'application/json'};

  url_server = "https://music-back-seminario.herokuapp.com/";
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Request-Headers': '*', observe: 'response' })
  };

  constructor(private storage: Storage, private http: HttpClient) {
    this.storage.create();
   }

  loginUser(credentials){
    return new Promise((accept, reject) => {
      this.storage.get("user").then((data) => {
        if (
          credentials.email == data.email && 
          credentials.password == "123456"
        ) {
          accept("Login Exitoso");
        } else {
          reject("Login Fallido")
        }
      }).catch( err => {
        return reject("fallo en el login")
      });
     
    });

  }

  registerUser(userData){
    // userData.password = btoa(userData.password);
    // userData.password = atob(userData.password); //Actividad 5 V.E
    let params = {
      "user": userData
    }
    return this.http.post(`${this.url_server}signup`, params, this.httpOptions)
  }
   
  
}