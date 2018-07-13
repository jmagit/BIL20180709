import { Injectable } from '@angular/core';
import { LoggerService } from '../../my-core';
import { NotificationService } from '../services/notification.service';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PersonasDAOService {
  protected baseUrl = environment.urlWS + 'personas';
  protected options = {};
  constructor(private http: HttpClient) { }
  query(): Observable<any> {
    return this.http.get(this.baseUrl, this.options);
  }
  get(id: any) {
    return this.http.get(this.baseUrl + '/' + id, this.options);
  }
  add(item: any)  {
    return this.http.post(this.baseUrl, item, this.options);
  }
  change(item: any) {
    return this.http.put(this.baseUrl, item, this.options);
  }
  remove(id: any) {
    return this.http.delete(this.baseUrl + '/' + id, this.options);
  }
}

@Injectable()
export class PersonasDAOViewModelService {
  protected modo: 'list' | 'add' | 'edit' | 'view' | 'delete' = 'list';
  protected listado: Array<any> = [];
  protected elemento: any = {};
  protected idOriginal: any = null;
  protected pk = 'id';

  constructor(protected out: LoggerService, protected notify: NotificationService,
    private dao: PersonasDAOService) { }

  public get Modo() { return this.modo; }
  public get Listado() { return this.listado; }
  public get Elemento() { return this.elemento; }

  public list() {
    this.dao.query().subscribe(
      data => {
        this.listado = data;
        this.modo = 'list';
      },
      err => this.notify.add(err.message)
    );
  }

  public add() {
    this.elemento = {};
    this.modo = 'add';
  }
  public edit(key: any) {
    this.dao.get(key).subscribe(
      data => {
        this.elemento = data;
        this.idOriginal = key;
        this.modo = 'edit';
        },
      err => this.notify.add(err.message)
    );
  }
  public view(key: any) {
    this.dao.get(key).subscribe(
      data => {
        this.elemento = data;
        this.modo = 'view';
        },
      err => this.notify.add(err.message)
    );
  }
  public remove(key: any) {
    if (!window.confirm('¿Seguro?')) { return; }

    this.dao.remove(key).subscribe(
      data => {
        this.list();
        },
      err => this.notify.add(err.message)
    );
  }

  public cancel() {
    this.elemento = {};
    this.idOriginal = null;
    this.list();
  }
  public send() {
    switch (this.modo) {
      case 'add':
        this.dao.add(this.elemento).subscribe(
          data => this.cancel(),
          err => this.notify.add(err.message)
        );
        break;
      case 'edit':
        this.dao.change(this.elemento).subscribe(
          data => this.cancel(),
          err => this.notify.add(err.message)
        );
        break;
      case 'view':
        this.cancel();
        break;
    }
  }

}

@Injectable()
export class PersonasViewModelService {
  protected modo: 'list' | 'add' | 'edit' | 'view' | 'delete' = 'list';
  protected listado: Array<any> = [];
  protected elemento: any = {};
  protected idOriginal: any = null;
  protected pk = 'id';

  constructor(protected out: LoggerService, protected notify: NotificationService) { }

  public get Modo() { return this.modo; }
  public get Listado() { return this.listado; }
  public get Elemento() { return this.elemento; }

  public list() {
    if (this.listado.length === 0) {
      this.listado = [
        {id: 1, nombre: 'Carmelo', apellidos: 'Coton', edad: 34},
        {id: 2, nombre: 'Pepito', apellidos: 'Grillo', edad: 155},
        {id: 3, nombre: 'Pedro', apellidos: 'Pica Piedra', edad: 51},
        {id: 4, nombre: 'Pablo', apellidos: 'Marmol', edad: 48},
      ];
    }
    this.modo = 'list';
  }

  public add() {
    this.elemento = {};
    this.modo = 'add';
  }
  public edit(key: any) {
    // tslint:disable-next-line:triple-equals
    const rslt = this.listado.find(item => item[this.pk] == key);
    if (rslt) {
      this.elemento = Object.assign({}, rslt);
      this.idOriginal = key;
      this.modo = 'edit';
    } else {
      this.notify.add('Elemento no encontrado.');
    }
  }
  public view(key: any) {
    // tslint:disable-next-line:triple-equals
    const rslt = this.listado.find(item => item[this.pk] == key);
    if (rslt) {
      this.elemento = Object.assign({}, rslt);
      this.modo = 'view';
    } else {
      this.notify.add('Elemento no encontrado.');
    }
  }
  public remove(key: any) {
    if (!window.confirm('¿Seguro?')) { return; }

    // tslint:disable-next-line:triple-equals
    const index = this.listado.findIndex(item => item[this.pk] == key);
    if (index > -1) {
      this.listado.splice(index, 1);
      this.list();
    } else {
      this.notify.add('Elemento no encontrado.');
    }
  }

  public cancel() {
    this.elemento = {};
    this.idOriginal = null;
    this.list();
  }
  public send() {
    switch (this.modo) {
      case 'add':
        this.listado.push(this.elemento);
        this.cancel();
        break;
      case 'edit':
        // tslint:disable-next-line:triple-equals
        const index = this.listado.findIndex(item => item[this.pk] == this.idOriginal);
        if (index > -1) {
          this.listado[index] = this.elemento;
          this.cancel();
        } else {
          this.notify.add('Elemento no encontrado.');
        }
        break;
      case 'view':
        this.cancel();
        break;
    }
  }

}
