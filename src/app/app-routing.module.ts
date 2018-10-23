import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from './core/not-found.component';
import {LancamentosRoutingModule} from './lancamentos/lancamentos-routing.module';
import {PessoasRoutingModule} from './pessoas/pessoas-routing.module';
import {SegurancaRoutingModule} from './seguranca/seguranca-routing.module';
import {NaoAutorizadoComponent} from './core/nao-autorizado.component';
import {DashboardRoutingModule} from './dashboard/dashboard-routing.module';
import {RelatoriosRoutingModule} from './relatorios/relatorios-routing.module';

const routes: Routes = [

  // Lazy loading modules apenas quando o usuario acessar
  // {path: 'lancamentos', loadChildren: './lancamentos/lancamentos.module#LancamentosModule'},
  // {path: 'pessoas', loadChildren: './pessoas/pessoas.module#PessoasModule'},
  // {path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'},
  // {path: 'relatorios', loadChildren: './relatorios/relatorios.module#RelatoriosModule'},


  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'pagina-nao-encontrada', component: NotFoundComponent},
  {path: 'nao-autorizado', component: NaoAutorizadoComponent},
  {path: '**', redirectTo: 'pagina-nao-encontrada'},


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    SegurancaRoutingModule,

    LancamentosRoutingModule,
    PessoasRoutingModule,
    DashboardRoutingModule,
    RelatoriosRoutingModule

  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
