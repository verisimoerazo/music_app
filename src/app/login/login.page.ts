import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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

   constructor(private formBuilder: FormBuilder) {
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
          Validators.maxLength(8),// Agregado - Actividad 3 V.E
          Validators.minLength(4)
        ])  
      ),

    })
   }

  ngOnInit() {
  }

}
