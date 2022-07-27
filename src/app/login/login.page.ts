import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { AuthenticateService } from '../services/authenticate.service';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  validation_messages = {

    email: [
      { type: "required", message: "El email es obligatorio" },
      { type: "pattern", message: "El email no es valido" }

    ],

    password: [
      { type: "required", message: "La Contraseña es obligatoria" }, // Agredado - Actividad 3 V.E
      { type: "maxLength", message: "La contraseña debe tener maximo 8 caracteres" }, // Agredado - Actividad 3 V.E
      { type: "minLength", message: "La contraseña debe tener minimo 4 caracteres" }  // Agregado - Actividad 3 V.E
    ]
  };

    errorMessage: any;
    

   constructor(
     private alertController: AlertController,
     private formBuilder: FormBuilder,
     private authService: AuthenticateService, 
     private navCtrl: NavController) {

      // this.storage.create();

      this.loginForm = this.formBuilder.group({
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
          Validators.maxLength(20),// Agregado - Actividad 3 V.E
          Validators.minLength(4)
        ])  
      ),

    })
   }

  ngOnInit() {
  }
  
  loginUser(credentials) {
    this.authService.loginUser(credentials).then( (res: any) => {
      console.log("res: ", res)
      Storage.set({key: "isUserLoggedIn", value: 'true'})
      console.log("conversion id a string",(res.user.id).toString())
      console.log("id como number",res.user.id)
      Storage.set({key: "user_id", value: (res.user.id).toString()})
      this.navCtrl.navigateForward("/menu");
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

  goToRegister(){
    this.navCtrl.navigateForward("/register");
  }

}
