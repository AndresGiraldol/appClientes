import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { LoadDataService } from '../load-data.service'
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { GlobalService } from '../global.service';
import { CookieService } from 'ngx-cookie-service';
import { ObtenerUrlRedireccionServiceService } from '../abre-cuenta/obtener-url-redireccion-service.service';
import * as $ from 'jquery';
declare var $: $
import * as moment from 'moment';
import { extendMoment } from 'moment-range';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { SpinnerLoadingComponent } from '../spinner-loading/spinner-loading.component'
import { RecaptchaComponent } from 'ng-recaptcha';
import { share } from 'rxjs/operator/share';


export interface FormModel {
  captcha?: string;
}

@Component({
  selector: 'app-abre-cuenta',
  templateUrl: './abre-cuenta.component.html',
  styleUrls: ['./abre-cuenta.component.css']
})

export class AbreCuentaComponent implements OnInit {
  // captchaRef: any;
  // captcha: any;
  public datosClienteRec: String[];
  public startCliente: boolean = false;
  public idProducto: string;
  public key_captcha: String;
  public key_response: String;
  public catalgoTipoDocumento = [];
  public cookieValue = 'UNKNOWN';

  public mensajeFallo = "";
  // private obtenerUrlRedireccionServiceService : ObtenerUrlRedireccionServiceService;
  public abrecuentaCampos = { tipoDocumento: '', numeroDocumento: '', numeroCelular: '', esCliente: '', captcha: '', correoElectronico: '' };
  public formModel: FormModel = {};
  public dateModificacion: Number;
  public error404 = ""

  public resolved(captchaResponse: string) {
    this.setResponse(captchaResponse);
    this.global.RESPONSE_CAPTCHA = captchaResponse;
    console.log(`Resolved captcha with response ${captchaResponse}:`);
    this.irCliente()
  }

  public setResponse(reCaptchaResponse: string) {

    this.key_response = reCaptchaResponse;
    // this.irCliente() 
  }

  public getResponse() {
    return this.key_response;
  }
  @BlockUI() blockUI: NgBlockUI;
  blockTemplate = SpinnerLoadingComponent;
  blockMessage;

  constructor(private obtenerUrlRedireccionServiceService: ObtenerUrlRedireccionServiceService, private global: GlobalService, private data: LoadDataService, private dataK: LoadDataService, private route: ActivatedRoute, private router: Router, private cookieService: CookieService) {
    console.log('Recuperando siteKey para el captcha...');

    this.data.obtenerRecursos().subscribe(data => this.obtenerCatalogos(data))
    this.dataK.getCaptacha().subscribe((dataK: { key: String }[]) => {
      let com = JSON.parse(dataK.toString())
      this.key_captcha = '6LekUBkUAAAAAKKnvUXwIKX8DrqqZtGrxctksmf4';
      //this.key_captcha = com['key'];
      console.log('key captcha: ' + this.key_captcha);
    });


    this.route.queryParams.subscribe(params => {
      //this.idProducto = params['idproducto'];
      this.idProducto = 'pbasico';
    });

  }

  obtenerCatalogos(data: JSON) {
    console.log('numero de valores: ' + Object.keys(data['catalogos'].tiposDocumento).length)
    for (let i = 0; i < Object.keys(data['catalogos'].tiposDocumento).length; i++) {
      this.catalgoTipoDocumento.push({ id: data['catalogos'].tiposDocumento[i].id, descripcion: data['catalogos'].tiposDocumento[i].descripcion });
    }

  }
  @ViewChild('captchaRef') public captcha: RecaptchaComponent;
  irCliente2() {
    this.captcha.execute();
  }

  irCliente() {
    this.blockUI.start();
    setTimeout(() => {
      this.blockUI.stop();
    }, 2500);

    this.data.validarCaptcha().subscribe((data: { key: String, value: String }[]) => {
      console.log('esValido: ' + data['esValido']);
      console.log('esSatisfactorio; ' + data['esSatisfactorio']);

      if (data['esSatisfactorio']) {
        if (data['esValido']) {
          // llenado de los datos personales del cliente
          this.obtenerUrlRedireccionServiceService.consultarUrlRedireccionCliente('FS001', this.abrecuentaCampos.numeroDocumento, this.abrecuentaCampos.numeroCelular, this.global.ID_SESSION_G, this.idProducto, this.abrecuentaCampos.correoElectronico)
            .subscribe(respuesta => this.setearRespuestaDatosCliente(respuesta),
              error => console.log('miError: ' + error));

          let dataCookie = this.abrecuentaCampos.numeroCelular;
          let valueCookie = {
            celular: dataCookie,
            tipoPlan: 'Plan Basico'
          };
          this.cookieService.set('BCCLIENTE', JSON.stringify(valueCookie));
          this.cookieValue = this.cookieService.get('BCCLIENTE');
          // console.log('this.cookieValue: ' + this.cookieValue)
          // console.log('valueCookie: ' + JSON.stringify(valueCookie))
        } else {
          console.log('esValido: ' + data['esValido'])
        }
      } else {
        console.log('esSatisfactorio: ' + data['esSatisfactorio'])
      }
    });



  }

  setearRespuestaDatosCliente(respuesta: JSON) {

    if (respuesta['codigoError'] == '0') {
      console.log(respuesta['urlRedireccion']);
      window.location.href = respuesta['urlRedireccion'];
    } else {
      this.mensajeFallo = 'GCCPN130 - ¿Seguro que la información es correcta? Revisa e inténtalo de nuevo.'
      // this.mensajeFallo = respuesta['mensajeError'];
      $("#errorConsulta").modal('show');
      // se muestra el mensaje en un popup
    }
  }
  irComparadorError() {
    window.location.href = 'https://www.grupobancolombia.com/wps/portal/personas/solicitud-de-productos-wcm';
  }

  ngOnInit() {

  }

}

