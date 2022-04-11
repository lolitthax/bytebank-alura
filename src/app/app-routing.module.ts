import { NovaTransferenciaComponent } from './nova-transferencia/nova-transferencia.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { Routes } from '@angular/router';

//objeto de rotas e array
export const routes: Routes = [
  {path: '', redirectTo: 'extrato', pathMatch:'full'},
  {path: 'extrato', component:ExtratoComponent},
  {path: 'nova-transferencia', component:NovaTransferenciaComponent},
]

//importação de módulo sando o umétodo estático forRoot e em seguida importação
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRotingModule{

}
