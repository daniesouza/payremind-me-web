import {LOCALE_ID, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {CommonModule, registerLocaleData} from '@angular/common';
import localePt from '@angular/common/locales/pt';
import {NavbarComponent} from './navbar/navbar.component';

import {ToastModule} from 'primeng/toast';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService, MessageService} from 'primeng/api';
import {NotFoundComponent} from './not-found.component';
import {Title} from '@angular/platform-browser';
import {NaoAutorizadoComponent} from './nao-autorizado.component';

registerLocaleData(localePt);

@NgModule({
  imports: [
    CommonModule,
    ToastModule,
    ConfirmDialogModule,
    RouterModule,
  ],
  declarations: [
    NavbarComponent,
    NotFoundComponent,
    NaoAutorizadoComponent
  ],
  exports: [
    NavbarComponent,
    ToastModule,
    ConfirmDialogModule,
  ],
  providers: [
    MessageService,
    ConfirmationService,
    Title,
     {provide: LOCALE_ID, useValue: 'pt'}
  ],
})
export class CoreModule {
}
