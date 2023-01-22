import { Component, DEFAULT_CURRENCY_CODE } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styles: [
  ],
  providers: [{provide: DEFAULT_CURRENCY_CODE, useValue: 'AR' }]
})
export class NumerosComponent {

  ventasNetas: number = 2567789.5567;
  porcentaje: number = 0.4856;

}
