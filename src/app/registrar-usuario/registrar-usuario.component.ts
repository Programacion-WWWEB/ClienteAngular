import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrarUsuarioService } from '../registrar-usuario.service';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {

  userForm: FormGroup;

  showRegistrarUsuario: boolean = true

  constructor(private formBuilder: FormBuilder, private registarUsuarioService: RegistrarUsuarioService){
    this.userForm = this.formBuilder.group({
      nombre:['',Validators.required],
      correo:['',Validators.compose([Validators.required,Validators.email])],
      contrasena:['',Validators.required],
      nombrePerfil:['',Validators.required]

    });
  }
  ngOnInit(){}

   onSubmit(){

    if (this.userForm.valid) {
      const userData = this.userForm.value;
      console.log(userData)
      this.registarUsuarioService.addUser(userData).subscribe(
        (response) => {
          console.log('se agrego en usuario')
        },
        (error) => {
        console.error('error fetching data')
        }
      );
    }
  }

}


