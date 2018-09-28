import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Input } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { GlobalService } from '../app/global.service'
import { HttpHeaders } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
declare function escape(s:string): string;
import { share } from 'rxjs/operator/share';


const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
    })
};

@Injectable()
export class LoadDataService {
    [x: string]: any;
    public ID_SESSION_INITIAL;
    public ID_SESSION_COMPLET;
    public ID_SESSION;
    

    constructor(private http: HttpClient, private globals: GlobalService) {
    }

    getCaptacha(): Observable<any> {
        this.ID_SESSION_INITIAL = Math.floor((Math.random() * 1000000000000) + 1);
        this.ID_SESSION_COMPLET = Math.floor((Math.random() * 1000000000000) + 1);
        this.ID_SESSION  = this.ID_SESSION_INITIAL + "-" + btoa(escape(encodeURIComponent( navigator.userAgent ))).substring(1, 15) +  this.ID_SESSION_COMPLET; 
        this.globals.ID_SESSION_G = this.ID_SESSION;
        console.log('Ejecutando peticion');
        var data = '{"idSesion":"' + this.globals.ID_SESSION_G + '", "idAplicacion":"appTipoCliente"}';
        return this.http.post(this.globals.API_CAPTCHA, data, httpOptions).share();

    }
    
    validarCaptcha(): Observable<any> {
        console.log('RE CAP: ' + this.globals.RESPONSE_CAPTCHA);
        var token = '{"token": "' + this.globals.RESPONSE_CAPTCHA  + '", "idSesion":"' + this.globals.ID_SESSION_G + '","idAplicacion":"appTipoCliente"}}';
        return this.http.post(this.globals.API_VALIDATE_CAPTCHA, token, httpOptions);
    }


    obtenerRecursos(): Observable<any> {
     //   console.log('RE:' + this.globals.API_VALIDATE_RESOURCE);
        var miData = '{"recurso": "1", "idAplicacion":"appTipoCliente"}';
        return this.http.post(this.globals.API_VALIDATE_RESOURCE, miData, httpOptions);
    }
}

