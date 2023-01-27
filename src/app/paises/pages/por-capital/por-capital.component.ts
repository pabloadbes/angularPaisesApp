import { Component, Input } from '@angular/core';
import { Paises } from '../../interfaces/paises.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  @Input() placeholder: string = '';
  
  termino: string = '';
  hayError: boolean = false;
  paises: Paises[] = [];

  constructor(
    private paisesService: PaisesService
  ) { }

  buscar( termino: string ) {
    this.termino = termino;
    this.hayError = false;
    this.paisesService.buscarCapital( termino )
      .subscribe( resp => {
        this.paises = resp;
      }, err => {
        this.hayError = true;
        this.paises = [];
      });
  }

  sugerencias( event: any ) {
    this.hayError = false;
  }

}
