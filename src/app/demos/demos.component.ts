import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-demos',
  templateUrl: './demos.component.html',
  styleUrls: ['./demos.component.css']
})
export class DemosComponent implements OnInit {
  nombre: string = 'Mundo';
  listado = [
    {id: 1, nombre: 'Madrid'},
    {id: 2, nombre: 'SEVILLA'},
    {id: 3, nombre: 'barcelona'},
    {id: 4, nombre: 'teRUEL'},
  ];
  idProvincia: number = 2;

  resultado: string = null;

  visible: boolean = true;
  estilos = { importante: true, error: false, remarcar: true };

  fuente = 14;

  constructor(public srv: NotificationService) { }

  ngOnInit() {
  }

  public saluda() {
    this.resultado = `Hola ${this.nombre}`;
  }
  public despide() {
    this.resultado = `Adios ${this.nombre}`;
  }
  public di(algo: string) {
    this.resultado = `Dice ${algo}`;
  }

  public cambia() {
    this.visible = !this.visible;
    this.estilos.importante = !this.estilos.importante;
    this.estilos.error = !this.estilos.error;
  }

  public calcula(a: number, b: number): number {
    return a + b;
  }

  public add(provincia: string) {
    if (! provincia) {
      return;
    }
    const key = this.listado.length
      ? this.listado[this.listado.length - 1].id + 1
      : 1;
    this.listado.push({id: key, nombre: provincia });
    this.idProvincia = key;
  }
}
