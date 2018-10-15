import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './navbar/navbar.component';

import {ToastModule} from 'primeng/toast';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService, MessageService} from 'primeng/api';

@NgModule({
  imports: [
    CommonModule,
    ToastModule,
    ConfirmDialogModule,
  ],
  declarations: [NavbarComponent],
  exports: [
    NavbarComponent,
    ToastModule,
    ConfirmDialogModule,
  ],
  providers: [
    MessageService,
    ConfirmationService,
    // {provide: LOCALE_ID, useValue: 'pt-BR'}
  ],
})
export class CoreModule {
}
