import {Component, OnInit} from '@angular/core';
import {LancamentoFiltro, LancamentoService} from '../lancamento.service';
import {LazyLoadEvent} from 'primeng/api';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent implements OnInit {

  constructor(private lancamentoService: LancamentoService) {
  }

  lancamentos = [];
  filtro = new LancamentoFiltro();
  totalRecords = 0;

  ngOnInit(): void {
    this.pesquisar();
  }

  pesquisar(page = 0) {

    this.filtro.page = page;
    this.lancamentoService.pesquisar(this.filtro)
      .then(resultado => {
        this.lancamentos = resultado.lancamentos;
        this.totalRecords = resultado.totalRecords;
      });
  }

  onChangePage(event: LazyLoadEvent) {
    const actualPage = event.first / event.rows;
    this.pesquisar(actualPage);
  }
}
