import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PessoasPesquisaComponent} from './pessoas-pesquisa/pessoas-pesquisa.component';
import {PessoasNovoComponent} from './pessoas-novo/pessoas-novo.component';
import {AuthGuard} from '../seguranca/auth.guard';


const routes: Routes = [
  {
    path: 'pessoas',
    component: PessoasPesquisaComponent,
    canActivate: [AuthGuard],
    data: {roles : ['ROLE_PESQUISAR_PESSOA']}
  },
  {
    path: 'pessoas/novo',
    component: PessoasNovoComponent,
    canActivate: [AuthGuard],
    data: {roles : ['ROLE_CADASTRAR_PESSOA']}
  },
  {
    path: 'pessoas/:codigo',
    component: PessoasNovoComponent,
    canActivate: [AuthGuard],
    data: {roles : ['ROLE_CADASTRAR_PESSOA']}
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class PessoasRoutingModule {
}
