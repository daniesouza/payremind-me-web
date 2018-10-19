import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from './core/not-found.component';
import {LancamentosRoutingModule} from './lancamentos/lancamentos-routing.module';
import {PessoasRoutingModule} from './pessoas/pessoas-routing.module';
import {SegurancaRoutingModule} from './seguranca/seguranca-routing.module';
import {NaoAutorizadoComponent} from './core/nao-autorizado.component';

const routes: Routes = [

  // Lazy loading modules apenas quando o usuario acessar
  // {path: 'lancamentos', loadChildren: 'app/lancamentos/lancamentos.module#LancamentosModule'},
  // {path: 'pessoas', loadChildren: 'app/pessoas/pessoas.module#PessoasModule'},



  {path: '', redirectTo: 'lancamentos', pathMatch: 'full'},
  {path: 'pagina-nao-encontrada', component: NotFoundComponent},
  {path: 'nao-autorizado', component: NaoAutorizadoComponent},
  {path: '**', redirectTo: 'pagina-nao-encontrada'},


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    LancamentosRoutingModule,
    PessoasRoutingModule,
    SegurancaRoutingModule

  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
