import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  
  //i18nSelect
  nombre: string = 'Susana';
  genero: string = 'femenino';


  /* nombre: string = 'Emanuel';
  genero: string = 'masculino'; */


  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //-----------------------------

  //i18nSelect
  clientes: string[] = ['Maria', 'Moncho', 'Fernando', 'Carlos'];

  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    'other': 'tenemos # cliente esperando.' 
  }


  cambiarCliente(){
    this.nombre = 'Raul';
    this.genero = 'masculino';
    console.log("nombre cambiado")
  }

  borrarCliente(){
    this.clientes.pop();
  }




  //KeyValue pipe
  persona = {
    nombre: 'Emanuel',
    edad: 35,
    direccion:'Ottawa, Canadá'
  }



  //JSON pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    },
  ];



  //Async Pipe
  //Interval imprime los segundos. hasta los que pasemos por parametros
  miObservable = interval(1000); //0,1,2,3,4,5,.....


  valorPromesa = new Promise((resolve, reject) => {

    setTimeout(() => {
      resolve('Fin de la promesa')
    }, 3500);

  });

}
