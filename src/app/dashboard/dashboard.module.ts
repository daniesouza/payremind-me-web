import {NgModule} from '@angular/core';
import {CommonModule, CurrencyPipe} from '@angular/common';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {PanelModule} from 'primeng/panel';
import {ChartModule} from 'primeng/chart';


@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    PanelModule,
    ChartModule
  ],
  declarations: [DashboardComponent],
  providers: [CurrencyPipe]
})
export class DashboardModule { }
