import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TooltipModule} from 'primeng/tooltip';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';

import {SegurancaRoutingModule} from './seguranca-routing.module';
import {LoginComponent} from './login/login.component';
import {JwtModule} from '@auth0/angular-jwt';
import {environment} from '../../environments/environment';

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SegurancaRoutingModule,

    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: environment.whitelistedDomains,
        blacklistedRoutes: environment.blacklistedRoutes
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
