import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {TooltipModule} from 'primeng/tooltip';
import {CalendarModule} from 'primeng/calendar';
import {SelectButtonModule} from 'primeng/selectbutton';
import {DropdownModule} from 'primeng/dropdown';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CurrencyMaskModule} from 'ng2-currency-mask';
import {InputMaskModule} from 'primeng/inputmask';

import {PessoasPesquisaComponent} from './pessoas-pesquisa/pessoas-pesquisa.component';
import {PessoasNovoComponent} from './pessoas-novo/pessoas-novo.component';
import {PessoasGridComponent} from './pessoas-grid/pessoas-grid.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    InputTextareaModule,
    CalendarModule,
    BrowserAnimationsModule,
    SelectButtonModule,
    DropdownModule,
    CurrencyMaskModule,
    MessageModule,
    MessagesModule,
    InputMaskModule
  ],
  declarations: [
    PessoasPesquisaComponent,
    PessoasNovoComponent,
    PessoasGridComponent
  ],
  exports: [
    PessoasPesquisaComponent,
    PessoasNovoComponent,
  ]
})
export class PessoasModule { }
