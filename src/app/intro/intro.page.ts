import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@capacitor/storage';


@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit{

  slideOpt = {
    initialslide: 0, //slide incial
    slidesPerView: 1, //slide por vista
    centeredSlides: true, //que las slides esten centradas
    speed: 400 //velocida de transicion de cada slide en milisegundo
  }

  slides  = [
    {
      title: "DAVID GUETTA",  //Actividad 3 V.E
      subtitle: "Play Hard", //Actividad 3 V.E
      img: "assets/images/slide5.jpg",
      icon: "radio-outline",
      description:"Pierre David Guetta​​​ es un DJ y productor francés. Actualmente, ocupa el puesto #1 según la encuesta realizada por DJ."
    },
    
    {
      title: "COLDPLAY",  //Actividad 3 V.E
      subtitle: "Fix You", //Actividad 3 V.E
      img: "assets/images/slide6.jpg",
      icon: "radio-outline",
      description:"Coldplay es una banda británica de pop rock y rock alternativo formada en Londres en 1996. Es uno de los grupos más relevantes de la década del 2000."
    },

    {
      title: "CARLOS VIVES", //Actividad 3 V.E
      subtitle: "La Cartera", // Activdad 3 V.E
      img: "assets/images/slide7.jpg",
      icon: "radio-outline",
      description:"Carlos Vives Restrepo es un cantautor y actor colombiano, conocido por fusionar música colombiana como la cumbia y el vallenato con el pop y el rock."
    },

    {
      title: "RIHANNA", //Actividad 3 V.E
      subtitle: "Tell my why", //Actividad 3 V.E
      img: "assets/images/slide8.jpg",
      icon: "radio-outline",
      description:"Rihanna, es una cantante, actriz, diseñadora y empresaria barbadense. Es conocida por fusionar algunos géneros caribeños con música pop."
    }
  

  ]

  constructor( private router: Router) { 
    // this.storage.create();
  }

  ngOnInit(): void {
  
  }

 

  finish() {
    Storage.set({key: "isIntroShowed", value: 'true'});
    this.router.navigateByUrl("/login");
  }


}
