import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { AbreCuentaComponent } from './abre-cuenta/abre-cuenta.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { NumberInputOnlyDirective } from './number-input-only.directive';
import { LettersInputOnlyDirective } from './letters-input-only.directive';
import { LoadDataService } from '../app/load-data.service';
import { HttpClientModule } from '@angular/common/http';
import { GlobalService } from '../app/global.service';
import { MensajesErrorComponent } from './mensajes-error/mensajes-error.component';
import { CelularInputOnlyDirective } from './celular-input-only.directive';
import { MyDatePickerModule } from 'mydatepicker';
import { ErrorBannerComponent } from './error-banner/error-banner.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EsClienteComponent } from './es-cliente/es-cliente.component';
import { NoClienteComponent } from './no-cliente/no-cliente.component';
import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';
import { ObtenerUrlRedireccionServiceService } from '../app/abre-cuenta/obtener-url-redireccion-service.service';
import { Http ,HttpModule } from '@angular/http';
import { BlockUIModule } from 'ng-block-ui';
import { CookieService } from 'ngx-cookie-service';
import { SpinnerLoadingComponent } from './spinner-loading/spinner-loading.component';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive'; // this includes the core NgIdleModule but includes keepalive providers for easy wireup
import { MomentModule } from 'angular2-moment'; // optional, provides moment-style pipes for date formatting


import {
  RECAPTCHA_LANGUAGE,
  RecaptchaLoaderService
} from 'ng-recaptcha';


@NgModule({
  declarations: [
    AppComponent,
    AbreCuentaComponent,
    NumberInputOnlyDirective,
    LettersInputOnlyDirective,
    MensajesErrorComponent,
    CelularInputOnlyDirective,
    ErrorBannerComponent,
    EsClienteComponent,
    NoClienteComponent,
    SpinnerLoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    MyDatePickerModule,
    RecaptchaModule.forRoot(),
    RecaptchaFormsModule,
    BlockUIModule.forRoot(),
    MomentModule,
    NgIdleKeepaliveModule.forRoot()
  ],
  entryComponents: [
    SpinnerLoadingComponent // Make sure to add it to the entry components
  ],
  providers: [ {
    provide: RECAPTCHA_LANGUAGE,
    useValue: 'es',
  },LoadDataService, GlobalService, ObtenerUrlRedireccionServiceService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
