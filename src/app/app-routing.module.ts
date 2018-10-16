import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PessoasPesquisaComponent} from './pessoas/pessoas-pesquisa/pessoas-pesquisa.component';
import {PessoasNovoComponent} from './pessoas/pessoas-novo/pessoas-novo.component';
import {NotFoundComponent} from './core/not-found.component';
import {LancamentosRoutingModule} from './lancamentos/lancamentos-routing.module';

const routes: Routes = [
  {path: '', redirectTo: 'lancamentos', pathMatch: 'full'},
  {path: 'pessoas', component: PessoasPesquisaComponent},
  {path: 'pessoas/novo', component: PessoasNovoComponent},
  {path: 'pagina-nao-encontrada', component: NotFoundComponent},
  {path: '**', redirectTo: 'pagina-nao-encontrada'},


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    LancamentosRoutingModule

  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
