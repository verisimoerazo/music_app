import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { AuthenticateService } from '../services/authenticate.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;
  registerResult: boolean = true;
  errMessage;

  validation_messages = {
    name: [
      { type: "required", message: "El nombre es obligatorio" },

    ],

    last_name: [
      { type: "required", message: "El apellido es obligatorio" },
    ],

    email: [
      { type: "required", message: "El email es obligatorio" },
      { type: "pattern", message: "El email no es valido" }

    ],

    password: [
      { type: "required", message: "La Contraseña es obligatoria" },
      { type: "maxLength", message: "La contraseña debe tener maximo 8 caracteres" },
      { type: "minLength", message: "La contraseña debe tener minimo 4 caracteres" }  
    ]


  };
  
  constructor(
    private alertController: AlertController,
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
    private storage: Storage,
    private authService: AuthenticateService

  ) { 

    // Inicio Actividad 4 V.E

    this.registerForm = this.formBuilder.group({
      name: new FormControl(
        "",
        Validators.compose([
          Validators.required
        ])
      ),
      last_name: new FormControl(
        "",
        Validators.compose([
          Validators.required
        ])
      ),
      email: new FormControl(
          "",
          Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-]+$")
        ])
      ),
      password: new FormControl(
          "",
          Validators.compose([
          Validators.required,
          Validators.maxLength(8),
          Validators.minLength(4)
        ])
      )
    });

    // Fin Actividad 4 V.E

  }

  ngOnInit() {
  }

  register(registerFormValues) {
    this.authService.registerUser(registerFormValues).then( (data) => {
      console.log("usuario creado", data);
      this.errMessage = "";
       this.navCtrl.navigateBack("/login");
    }).catch( err => {
      this.presentAlert("Opps", "Hubo un error", err)
    })
  }

  async presentAlert(header, subHeader, message) {
    const alert = await this.alertController.create({
      header: header,
      subHeader: subHeader,
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }

  goToLogin(){
    //this.navCtrl.navigateForward("/login")
    this.navCtrl.navigateBack("/login").then((resp) => {
      console.log(resp)
    })
  }

}
