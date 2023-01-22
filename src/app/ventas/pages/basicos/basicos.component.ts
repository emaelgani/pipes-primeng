import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {


  nombreLower: string = 'fernando';
  nombreUpper: string = 'EMANUEL';
  nombreCompleto: string = 'ElgAnI EmAnUeL';

  fecha: Date = new Date(); // El día de hoy.
}
