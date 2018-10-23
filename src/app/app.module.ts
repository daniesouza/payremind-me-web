import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LancamentosModule} from './lancamentos/lancamentos.module';
import {PessoasModule} from './pessoas/pessoas.module';
import {CoreModule} from './core/core.module';
import {AppRoutingModule} from './app-routing.module';
import {SegurancaModule} from './seguranca/seguranca.module';
import {HttpClientModule} from '@angular/common/http';
import {DashboardModule} from './dashboard/dashboard.module';
import {RelatoriosModule} from './relatorios/relatorios.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    SegurancaModule,

    LancamentosModule,
    PessoasModule,
    DashboardModule,
    RelatoriosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
