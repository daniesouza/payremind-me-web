import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TooltipModule} from 'primeng/tooltip';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';

import {SegurancaRoutingModule} from './seguranca-routing.module';
import {LoginComponent} from './login/login.component';
import {JwtModule} from '@auth0/angular-jwt';

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    SegurancaRoutingModule,

    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:8080', 'https://payremind-me-api.herokuapp.com'],
        blacklistedRoutes: ['http://localhost:8080/payremind-me-api/oauth/token', 'https://payremind-me-api.herokuapp.com/oauth/token/']
      }
    }),

    InputTextModule,
    ButtonModule,
    TooltipModule,
    MessageModule,
    MessagesModule,
  ],
  declarations: [
    LoginComponent,
  ],
  exports: [],
  providers: []
})
export class SegurancaModule {
}
