import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Paises } from '../../interfaces/paises.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Paises;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisesService: PaisesService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.paisesService.buscarCodigo( id ) ),
      )
      .subscribe( pais => {
        this.pais = pais[0];
      })
  }
  
}
