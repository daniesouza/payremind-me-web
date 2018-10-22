import {Component, OnInit} from '@angular/core';
import {DashboardService} from '../dashboard.service';
import {CurrencyPipe} from '@angular/common';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  pieChartData: any;
  lineChartData: any;

  options = {
    tooltips: {
      callbacks: {
        label: (tooltipItem, data) => {
          const dataset = data.datasets[tooltipItem.datasetIndex];
          const valor = dataset.data[tooltipItem.index];
          const label = dataset.label ? (dataset.label + ': ') : '';

          return label + this.currencyPipe.transform(valor, 'BRL', 'R$', '1.2-2');
        }
      }
    }
  };

  constructor(private dashBoardService: DashboardService,
              private currencyPipe: CurrencyPipe) {
  }

  ngOnInit() {
    this.loadPieChart();
    this.loadLineChart();
  }

  loadPieChart() {
    this.dashBoardService.lancamentosPorCategoria()
      .then(pieData => {
        this.pieChartData = {
          labels: pieData.map(data => data.categoria.nome),
          datasets: [
            {
              data: pieData.map(data => data.total),
              backgroundColor: ['#FF9900', '#109618', '#990099', '#3B3EAC', '#0099C6', '#DD4477', '#3366CC', '#DC3912']
            }
          ]
        };
      });
  }

  loadLineChart() {

    this.dashBoardService.lancamentosPorDia()
      .then(lineData => {
        const diasDoMes = this.getDiasMes();
        const totaisReceitas = this.getTotaisPorCadaDiaMes(lineData.filter(data => data.tipo === 'RECEITA'), diasDoMes);
        const totaisDespesas = this.getTotaisPorCadaDiaMes(lineData.filter(data => data.tipo === 'DESPESA'), diasDoMes);

        this.lineChartData = {
          labels: diasDoMes,
          datasets: [
            {
              label: 'Receitas',
              data: totaisReceitas,
              borderColor: '#3366CC'
            }, {
              label: 'Despesas',
              data: totaisDespesas,
              borderColor: '#D62B00'
            }
          ]
        };

      });

  }

  private getTotaisPorCadaDiaMes(dados, diasDoMes) {
    const totais: number[] = [];
    for (const dia of diasDoMes) {
      let total = 0;

      for (const dado of dados) {
        if (dado.dia.getDate() === dia) {
          total = dado.total;
          break;
        }
      }

      totais.push(total);
    }

    return totais;
  }

  private getDiasMes() {
    const mesAtual = new Date();
    mesAtual.setMonth(mesAtual.getMonth() + 1);
    mesAtual.setDate(0);

    const quantidadeDias = mesAtual.getDate();

    const dias: number[] = [];

    for (let i = 1; i <= quantidadeDias; i++) {
      dias.push(i);
    }
    return dias;
  }
}
