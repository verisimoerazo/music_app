import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  // Actividad 2 V.E

  slideOpt = {
    initialslide: 0, //slide incial
    slidesPerView: 1, //slide por vista
    centeredSlides: true, //que las slides esten centradas
    speed: 400 //velocida de transicion de cada slide en milisegundo
  }

  slides  = [
    {
      placeholder: "Buscar artista",
      title: "Guns and Roses",
      img: "assets/images/artista1.jpg",
      icon: "person-outline",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore consectetur atque quidem ratione itaque, ducimus quod natus dicta provident omnis adipisci? Nisi delectus et, laudantium, praesentium tenetur tempore enim quibusdam dignissimos dicta officia nam? Quia similique, incidunt tempore tenetur quos mollitia ea, esse eveniet soluta sunt rerum, voluptatem molestias ullam."
    },
    
    {
      placeholder: "Buscar artista",
      title: "Coldplay",
      img: "assets/images/artista2.jpg",
      icon: "person-outline",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore consectetur atque quidem ratione itaque, ducimus quod natus dicta provident omnis adipisci? Nisi delectus et, laudantium, praesentium tenetur tempore enim quibusdam dignissimos dicta officia nam? Quia similique, incidunt tempore tenetur quos mollitia ea, esse eveniet soluta sunt rerum, voluptatem molestias ullam."
    },

    {
      placeholder: "Buscar artista",
      title: "Michael Jackson",
      img: "assets/images/artista3.jpg",
      icon: "person-outline",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore consectetur atque quidem ratione itaque, ducimus quod natus dicta provident omnis adipisci? Nisi delectus et, laudantium, praesentium tenetur tempore enim quibusdam dignissimos dicta officia nam? Quia similique, incidunt tempore tenetur quos mollitia ea, esse eveniet soluta sunt rerum, voluptatem molestias ullam."
    },

    {
      
      title: "Freddy Mercury",
      img: "assets/images/artista4.jpg",
      icon: "person-outline",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore consectetur atque quidem ratione itaque, ducimus quod natus dicta provident omnis adipisci? Nisi delectus et, laudantium, praesentium tenetur tempore enim quibusdam dignissimos dicta officia nam? Quia similique, incidunt tempore tenetur quos mollitia ea, esse eveniet soluta sunt rerum, voluptatem molestias ullam."
    }
    
  ]

  // Fin Actividad 2 V.E

  constructor() {

  }

}
