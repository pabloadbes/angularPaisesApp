import { Component } from '@angular/core';
import { PaisesService } from '../../services/paises.service';
import { Paises } from "../../interfaces/paises.interface";

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
      button {
        margin-right: 5px;
      }
    `
  ]
})
export class PorRegionComponent {

  regiones: string[] = ['africa','americas','asia','europe','oceania'];
  regionActiva: string = '';
  paises: Paises[] = [];

  constructor(
    private paisesService: PaisesService
  ) { }

  getClaseCSS( region: string ) {
    return (region === this.regionActiva)
              ? 'btn btn-primary'
              : 'btn btn-outline-primary';
  }

  activarRegion( region: string ) {
    if ( this.regionActiva === region ) { return }
    this.regionActiva = region;
    this.paises = [];
    this.paisesService.buscarRegion( region )
      .subscribe( resp => {
        this.paises = resp;
      });
  }
}
