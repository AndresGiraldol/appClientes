import { Component, OnInit, Input } from '@angular/core';
import { AbstractControlDirective, AbstractControl } from '@angular/forms';
@Component({
  selector: 'app-mensajes-error',
  templateUrl: './mensajes-error.component.html',
  styleUrls: ['./mensajes-error.component.css']
})
export class MensajesErrorComponent{

  private static readonly errorMessages = {
    'required': () => 'Campo requerido',
    // 'minlength': (params) => 'Formato no valido' + params.requiredLength,
    // 'maxlength': (params) => 'The max allowed number of characters is ' + params.requiredLength,
    'minlength': (params) => 'Formato no valido',
    'maxlength': (params) => 'Formato no valido',
    'pattern': (params) => 'Formato no valido',
    'years': (params) => params.message,
    'countryCity': (params) => params.message,
    'uniqueName': (params) => params.message,
    'telephoneNumbers': (params) => params.message,
    'telephoneNumber': (params) => params.message
  };

  @Input()
  private control: AbstractControlDirective | AbstractControl;
 
  shouldShowErrors(): boolean {
    return this.control &&
      this.control.errors &&
      (this.control.dirty || this.control.touched);
  }
 
  listOfErrors(): string[] {
    return Object.keys(this.control.errors)
      .map(field => this.getMessage(field, this.control.errors[field]));
  }
 
  private getMessage(type: string, params: any) {
    return MensajesErrorComponent.errorMessages[type](params);
  }


}
