import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from "@ionic/storage";

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
      title: "Titulo 1",
      subtitle: "sub title 1",
      img: "assets/images/slide1.jpg",
      icon: "radio-outline",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    
    {
      title: "Titulo 2",
      subtitle: "sub title 2",
      img: "assets/images/slide2.jpg",
      icon: "radio-outline",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },

    {
      title: "Titulo 3",
      subtitle: "sub title 3",
      img: "assets/images/slide2.jpg",
      icon: "radio-outline",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },

    {
      title: "Titulo 4",
      subtitle: "sub title 4",
      img: "assets/images/slide4.jpg",
      icon: "radio-outline",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    }
  

  ]

  constructor( private router: Router, private storage: Storage) { 
    this.storage.create();
  }

  ngOnInit(): void {
    this.showe().then( x => {
      // console.log(x);
      if (x){
        this.router.navigateByUrl("/home")
      }
    })
  }

  async showe() {
    const show = await this.storage.get("isIntroShowed");
    return show;
  }

  finish(){
    this.storage.set("isIntroShowed", true);
    this.router.navigateByUrl("/home");
  }


}
