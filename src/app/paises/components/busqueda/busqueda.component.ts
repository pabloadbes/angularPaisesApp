import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent implements OnInit {


  termino: string = '';

  @Input() placeholder: string = '';
  @Output() onBuscar: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject();

  ngOnInit() {
    this.debouncer
      .pipe( debounceTime(300))
      .subscribe( valor => {
        this.onDebounce.emit( valor );
      });
  }

  buscar() {
    this.onBuscar.emit( this.termino );
  }

  teclaPresionada() {
    this.debouncer.next( this.termino );
  }
}
