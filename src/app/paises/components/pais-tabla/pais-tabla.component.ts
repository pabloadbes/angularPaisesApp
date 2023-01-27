import { Component, Input } from '@angular/core';
import { Paises } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styles: [
  ]
})
export class PaisTablaComponent {

  @Input() paises: Paises[] = [];

  constructor() { }

}
