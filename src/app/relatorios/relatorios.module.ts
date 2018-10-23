import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RelatoriosRoutingModule } from './relatorios-routing.module';
import { RelatorioLancamentosComponent } from './relatorio-lancamentos/relatorio-lancamentos.component';
import {FormsModule} from '@angular/forms';
import {CalendarModule} from 'primeng/calendar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RelatoriosRoutingModule,
    CalendarModule,
  ],
  declarations: [RelatorioLancamentosComponent]
})
export class RelatoriosModule { }
