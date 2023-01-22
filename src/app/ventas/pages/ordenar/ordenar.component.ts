import { Component } from '@angular/core';
import { MayusculasPipe } from '../../pipes/mayusculas.pipe';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ],
})
export class OrdenarComponent {

  enMayusculas: boolean = true;
  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Tommy shelby',
      vuela: true,
      color: Color.rojo
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.verde
    },
  ];
  ordenarPor: string = '';

  cambiarMayusculas(): void{
    this.enMayusculas = !this.enMayusculas;
  }


  cambiarOrden(valor: string){
    console.log(valor);
    this.ordenarPor = valor;
  }


}
