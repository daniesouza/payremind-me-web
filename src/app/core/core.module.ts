import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {CommonModule} from '@angular/common';
import {NavbarComponent} from './navbar/navbar.component';

import {ToastModule} from 'primeng/toast';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService, MessageService} from 'primeng/api';
import {NotFoundComponent} from './not-found.component';
import {Title} from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    ToastModule,
    ConfirmDialogModule,
    RouterModule
  ],
  declarations: [
    NavbarComponent, NotFoundComponent
  ],
  exports: [
    NavbarComponent,
    ToastModule,
    ConfirmDialogModule,
  ],
  providers: [
    MessageService,
    ConfirmationService,
    Title
    // {provide: LOCALE_ID, useValue: 'pt-BR'}
  ],
})
export class CoreModule {
}
