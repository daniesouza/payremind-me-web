import {Component, OnInit, ViewChild} from '@angular/core';
import {LancamentoFiltro, LancamentoService} from '../lancamento.service';
import {ConfirmationService, LazyLoadEvent, MessageService} from 'primeng/api';
import {ErrorHandlerService} from '../../core/error-handler.service';
import {Title} from '@angular/platform-browser';
import {AuthService} from '../../seguranca/auth.service';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent implements OnInit {

  constructor(private messageService: MessageService,
              private confirmationService: ConfirmationService,
              private errorHandler: ErrorHandlerService,
              private lancamentoService: LancamentoService,
              private title: Title,
              private authService: AuthService) {
  }

  lancamentos = [];
  filtro = new LancamentoFiltro();
  totalRecords = 0;
  @ViewChild('tabela') tabela;

  ngOnInit(): void {
    this.title.setTitle('Pesquisa de Lançamentos');
  }

  pesquisar(page = 0) {

    this.filtro.page = page;
    this.lancamentoService.pesquisar(this.filtro)
      .then(resultado => {
        this.lancamentos = resultado.lancamentos;
        this.totalRecords = resultado.totalRecords;
      })
      .catch(error => this.errorHandler.handle(error));
  }

  onChangePage(event: LazyLoadEvent) {
    const actualPage = event.first / event.rows;
    this.pesquisar(actualPage);
  }

  excluir(lancamento: any) {
    this.confirmationService.confirm({
      message: 'Deseja realmente deletar este lançamento?',
      accept: () => {
        this.lancamentoService.excluir(lancamento.codigo)
          .then(() => {
            if (this.tabela.first === 0) {
              this.pesquisar();
            } else {
              this.tabela.first = 0;
            }

            this.messageService.add({
              severity: 'success',
              summary: 'Lançamento excluído com sucesso.',
              detail: 'Codigo:' + lancamento.codigo
            });
          })
          .catch(error => this.errorHandler.handle(error));
      }
    });
  }
}
