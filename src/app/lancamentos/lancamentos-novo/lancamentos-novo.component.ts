import {Component, OnInit} from '@angular/core';
import {CategoriasService} from '../../categorias/categorias.service';
import {ErrorHandlerService} from '../../core/error-handler.service';
import {PessoasFiltro, PessoasService} from '../../pessoas/pessoas.service';

@Component({
  selector: 'app-lancamentos-novo',
  templateUrl: './lancamentos-novo.component.html',
  styleUrls: ['./lancamentos-novo.component.css']
})
export class LancamentosNovoComponent implements OnInit {

  constructor(private categoriasService: CategoriasService,
              private pessoaService: PessoasService,
              private errorHandler: ErrorHandlerService) {
  }

  tipos = [
    {label: 'Receita', value: 'RECEITA'},
    {label: 'Despesa', value: 'DESPESA'}
  ];

  categorias = [];
  pessoas = [];


  ngOnInit(): void {
    this.pesquisarCategorias();
    this.pesquisarPessoas();
  }

  pesquisarCategorias() {
    this.categoriasService.pesquisar()
      .then(categorias => {
        this.categorias = categorias.map(categoria => {
          return {label: categoria.nome, value: categoria.codigo};
        });
      })
      .catch(error => this.errorHandler.handle(error));
  }

  pesquisarPessoas() {
    this.pessoaService.pesquisar( {nome: undefined, size : 0, page: 0})
      .then(result => {
        this.pessoas = result.pessoas.map(pessoa => {
          return {label: pessoa.nome, value: pessoa.codigo};
        });
      })
      .catch(error => this.errorHandler.handle(error));
  }
}
