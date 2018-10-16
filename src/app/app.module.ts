import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LancamentosModule} from './lancamentos/lancamentos.module';
import {PessoasModule} from './pessoas/pessoas.module';
import {CoreModule} from './core/core.module';
import {RouterModule, Routes} from '@angular/router';
import {LancamentosPesquisaComponent} from './lancamentos/lancamentos-pesquisa/lancamentos-pesquisa.component';
import {LancamentosNovoComponent} from './lancamentos/lancamentos-novo/lancamentos-novo.component';
import {PessoasPesquisaComponent} from './pessoas/pessoas-pesquisa/pessoas-pesquisa.component';
import {PessoasNovoComponent} from './pessoas/pessoas-novo/pessoas-novo.component';

const routes: Routes = [
  {path: 'lancamentos', component: LancamentosPesquisaComponent},
  {path: 'lancamentos/novo', component: LancamentosNovoComponent},
  {path: 'lancamentos/:codigo', component: LancamentosNovoComponent},
  {path: 'pessoas', component: PessoasPesquisaComponent},
  {path: 'pessoas/novo', component: PessoasNovoComponent},
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),

    CoreModule,
    LancamentosModule,
    PessoasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
