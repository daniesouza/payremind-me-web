import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LancamentosPesquisaComponent} from './lancamentos-pesquisa/lancamentos-pesquisa.component';
import {LancamentosNovoComponent} from './lancamentos-novo/lancamentos-novo.component';

const routes: Routes = [
  {path: 'lancamentos', component: LancamentosPesquisaComponent},
  {path: 'lancamentos/novo', component: LancamentosNovoComponent},
  {path: 'lancamentos/:codigo', component: LancamentosNovoComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class LancamentosRoutingModule {
}
