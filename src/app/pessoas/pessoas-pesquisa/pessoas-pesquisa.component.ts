import {Component, OnInit} from '@angular/core';
import {LazyLoadEvent} from 'primeng/api';
import {PessoasFiltro, PessoasService} from '../pessoas.service';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent implements OnInit {


  constructor(private pessoasService: PessoasService) {
  }

  pessoas = [];
  filtro = new PessoasFiltro();
  totalRecords = 0;

  ngOnInit(): void {
    this.pesquisar();
  }

  pesquisar(page = 0) {

    this.filtro.page = page;
    this.pessoasService.pesquisar(this.filtro)
      .then(resultado => {
        this.pessoas = resultado.pessoas;
        this.totalRecords = resultado.totalRecords;
      });
  }

  onChangePage(event: LazyLoadEvent) {
    const actualPage = event.first / event.rows;
    this.pesquisar(actualPage);
  }

}
