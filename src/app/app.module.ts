import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LancamentosModule} from './lancamentos/lancamentos.module';
import {PessoasModule} from './pessoas/pessoas.module';
import {CoreModule} from './core/core.module';
import {AppRoutingModule} from './app-routing.module';
import {SegurancaModule} from './seguranca/seguranca.module';
import {MoneyHttpService} from './seguranca/money-http.service';
import {AuthService} from './seguranca/auth.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SegurancaModule,
    LancamentosModule,
    PessoasModule,
  ],
  providers: [
    MoneyHttpService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
