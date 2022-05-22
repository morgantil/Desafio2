import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactive-form-test',
  templateUrl: './reactive-form-test.component.html',
  styleUrls: ['./reactive-form-test.component.css']
})
export class ReactiveFormTestComponent implements OnInit {
  formEstudiante:FormGroup;

  get  nombreNoValido(){
    return this.formEstudiante.get('nombre').invalid && this.formEstudiante.get('nombre').touched;
  }
  get  apellidoNoValido(){
    return this.formEstudiante.get('apellido').invalid && this.formEstudiante.get('apellido').touched;
  }
  get  correoNoValido(){
    return this.formEstudiante.get('correo').invalid && this.formEstudiante.get('correo').touched;
  }



  constructor(private fb:FormBuilder) {
    this.crearFormulario();
  }

  ngOnInit(): void {
   
  }

  crearFormulario(){

    this.formEstudiante = this.fb.group({
      nombre  : ['', [ Validators.required, Validators.minLength(5) ]  ],
      apellido: ['', [Validators.required,Validators.minLength(5)] ],
      correo  : ['', [ Validators.required,Validators.email]],
    
    });

  }

  submit() {
    if ( this.formEstudiante.invalid ) {
    
   return Object.values(  this.formEstudiante.controls ).forEach( control => control.markAsTouched() );
      
      
    }
    console.log(this.formEstudiante.value);
  }

}



