import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AppConstantes } from '../app-constantes';
import { Observable } from 'rxjs/Observable';
import { RequestOptions, Headers } from '@angular/http';

@Injectable()
export class ObtenerUrlRedireccionServiceService {

  CONSULTAR_URL_REDIRECCION = AppConstantes.API_ENDPOINT + AppConstantes.OBTENER_URL_REDIRECCION_REST;

  constructor(private http: Http) { }

  consultarUrlRedireccionCliente(tipoDocumento: string, numeroDocumento : string, numeroMovil: string, idSession: string, idProducto, correoElectronico: string){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let params = { tipoDocumento, numeroDocumento, numeroMovil, idSession,  idProducto, correoElectronico};
    let body = JSON.stringify(params);
    let options: any = new RequestOptions({ headers: headers});
    return this.http.post(this.CONSULTAR_URL_REDIRECCION, body, options).map(this.extractData);
  }

  private extractData(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      // validar si es error 401 y redirigir a pagina de error 401
      if (res.status == 401) {
        window.location.replace("error-401.html");
        throw new Error(AppConstantes.MSG_ERROR_SESION_EXPIRADA);
      }
      throw new Error('Bad response status: ' + res.status);
    }
    // validar si es la página de error 401 y redirigir
    if (res.url && res.url.endsWith("/error-401.html")) {
      window.location.replace("error-401.html");
      throw new Error(AppConstantes.MSG_ERROR_SESION_EXPIRADA);
    }
    let body = res.json();
    return res.json();
    //return JSON.parse(body) || {};
  }

  private handleError(error: any) {
    // validar si es error 401 y redirigir a pagina de error 401
    if (error.status == 401) {
      window.location.replace("error-401.html");
      throw new Error(AppConstantes.MSG_ERROR_SESION_EXPIRADA);
    }
  }

  
}


