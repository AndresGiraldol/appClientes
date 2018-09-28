import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AbreCuentaComponent } from './abre-cuenta/abre-cuenta.component';
import { ErrorBannerComponent } from './error-banner/error-banner.component';
import { EsClienteComponent } from './es-cliente/es-cliente.component';
import { NoClienteComponent } from './no-cliente/no-cliente.component';

const routes: Routes =
  [
    { path: '', redirectTo: '/abreCuenta', pathMatch: 'full' },
    {
      path: 'abreCuenta',
      component: AbreCuentaComponent
    },
    {
      path: 'esCliente',
      component: EsClienteComponent
    },
    {
      path: 'noCliente',
      component: NoClienteComponent
    },
    {
      path: '**',
      component: ErrorBannerComponent
    }
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// @NgModule({
//   imports: [
//     CommonModule
//   ],
//   declarations: []
// })
// export class AppRoutingModule { }
