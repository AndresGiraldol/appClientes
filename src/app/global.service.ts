import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {

  //API

//urlPath = location.protocol + "//" + document.domain + ":" + location.port;
 // urlPath = "http://aymenese.ibm.com:9081";
  urlPath = 'http://10.120.254.9:10037'
 // urlPath = "https://10.120.254.27"
  API_C:any  =  "/com.bancolombia.clientes.api.captcha/rest/servicio/getpublickey";
  API_V:any  = "/com.bancolombia.clientes.api.tipoCliente/rest/servicio/validate";
  API_VC:any  = "/com.bancolombia.clientes.api.captcha/rest/servicio/validarcaptcha"
  API_RE:any  = "/com.bancolombia.clientes.api.recursos/rest/servicio/getResource"
  URL_CONTINUAR: String ="/API.Autenticacion/rest/servicio/pagina1A"
  API_CAPTCHA: string = this.urlPath + this.API_C;
  API_VALIDATE: string = this.urlPath + this.API_V;
  API_VALIDATE_CAPTCHA: string = this.urlPath + this.API_VC;
  API_VALIDATE_RESOURCE: string = this.urlPath + this.API_RE;
  RESPONSE_CAPTCHA: string;
  ID_SESSION_G: string;


  //PRUEBAS LOCALES
  //API_DATA_VALIDACION: string = './assets/data/jsonYaclientes.json';
  //API_CAPTCHA: string = './assets/data/jsonCaptcha.json'
  //API_DATA_VALIDACION: string = ' /com.bancolombia.clientes.api.recursos/rest/servicio/getResource';

  constructor() { }

}
