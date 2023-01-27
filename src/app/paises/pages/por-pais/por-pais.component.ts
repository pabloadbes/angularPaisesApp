import { Component } from '@angular/core';
import { Paises } from '../../interfaces/paises.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `
  ]
})
export class PorPaisComponent{

  termino: string = '';
  hayError: boolean = false;
  paises: Paises[] = [];
  paisesSugerencias: Paises[] = [];
  mostrarSugerencias: boolean = false;

  constructor(
    private paisesService: PaisesService 
  ) { }

  buscar( termino: string ) {
    this.termino = termino;
    this.hayError = false;
    this.mostrarSugerencias = false;

    this.paisesService.buscarPais( termino )
      .subscribe(
        {
          next: resp => {
            this.paises = resp;
          },
          error: err => {
            this.hayError = true;
            this.paises = [];
          }
        });
  }

  sugerencias( termino: string ) {
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;

    this.paisesService.buscarPais( termino )
      .subscribe( resp => {
        this.paisesSugerencias = resp.splice(0,5);
      }, err => {
        this.hayError = true;
        this.paisesSugerencias = [];
      })
  }
}
