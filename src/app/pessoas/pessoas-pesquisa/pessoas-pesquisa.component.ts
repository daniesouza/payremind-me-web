import {Component, OnInit, ViewChild} from '@angular/core';
import {ConfirmationService, LazyLoadEvent, MessageService} from 'primeng/api';
import {PessoasFiltro, PessoasService} from '../pessoas.service';
import {ErrorHandlerService} from '../../core/error-handler.service';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent implements OnInit {


  constructor(private messageService: MessageService,
              private confirmationService: ConfirmationService,
              private errorHandler: ErrorHandlerService,
              private pessoasService: PessoasService) {
  }

  pessoas = [];
  filtro = new PessoasFiltro();
  totalRecords = 0;
  @ViewChild('tabela') tabela;

  ngOnInit(): void {
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

  excluir(pessoa: any) {
    this.confirmationService.confirm({
      message: 'Deseja realmente deletar esta pessoa?',
      accept: () => {
        this.pessoasService.excluir(pessoa.codigo)
          .then(() => {
            if (this.tabela.first === 0) {
              this.pesquisar();
            } else {
              this.tabela.first = 0;
            }

            this.messageService.add({
              severity: 'success',
              summary: 'Pessoa excluída com sucesso.',
              detail: 'Codigo:' + pessoa.codigo
            });
          })
          .catch(error => this.errorHandler.handle(error));
      }
    });
  }

  alterarStatus(pessoa: any) {
    this.pessoasService.alterarStatus(pessoa.codigo, pessoa.ativo)
      .then(() => {
        const msg = pessoa.ativo ? 'Pessoa ativada com sucesso.' : 'Pessoa desativada com sucesso.';

        this.messageService.add({
          severity: 'success',
          summary: msg
        });
      })
      .catch(error => {
        this.errorHandler.handle(error);
        pessoa.ativo = !pessoa.ativo;
      });
  }
}
