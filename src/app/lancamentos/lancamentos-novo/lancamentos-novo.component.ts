import {Component, OnInit} from '@angular/core';
import {CategoriasService} from '../../categorias/categorias.service';
import {ErrorHandlerService} from '../../core/error-handler.service';
import {PessoasService} from '../../pessoas/pessoas.service';
import {Lancamento} from '../../core/model';
import {FormControl} from '@angular/forms';
import {LancamentoService} from '../lancamento.service';
import {MessageService} from 'primeng/api';
import {ActivatedRoute, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {AuthService} from '../../seguranca/auth.service';

@Component({
  selector: 'app-lancamentos-novo',
  templateUrl: './lancamentos-novo.component.html',
  styleUrls: ['./lancamentos-novo.component.css']
})
export class LancamentosNovoComponent implements OnInit {

  constructor(private categoriasService: CategoriasService,
              private pessoaService: PessoasService,
              private lancamentoService: LancamentoService,
              private messageService: MessageService,
              private errorHandler: ErrorHandlerService,
              private route: ActivatedRoute,
              private router: Router,
              private title: Title,
              public authService: AuthService
  ) {
  }

  tipos = [
    {label: 'Receita', value: 'RECEITA'},
    {label: 'Despesa', value: 'DESPESA'}
  ];

  categorias = [];
  pessoas = [];
  lancamento = new Lancamento();
  isUploading = false;


  ngOnInit(): void {

    const codigo = this.route.snapshot.params['codigo'];

    this.title.setTitle('Novo lançamento');

    if (codigo) {
      this.buscarLancamento(codigo);
    }

    this.pesquisarCategorias();
    this.pesquisarPessoas();
  }

  private buscarLancamento(codigo) {
    this.lancamentoService.buscaPorCodigo(codigo)
      .then(lancamento => {
        this.lancamento = lancamento;
        this.atualizarTituloEdicao();
      })
      .catch(error => this.errorHandler.handle(error));
  }

  salvar(form: FormControl) {
    if (this.lancamento.codigo) {
      this.atualizarLancamento(form);
    } else {
      this.salvarLancamento(form);
    }
  }

  salvarLancamento(form: FormControl) {
    this.lancamentoService.salvarLancamento(this.lancamento)
      .then(lancamento => {
        this.messageService.add({
          severity: 'success',
          summary: 'Lançamento adicionado com sucesso.',
          detail: 'Codigo:' + lancamento.codigo
        });
        this.router.navigate(['/lancamentos/' + lancamento.codigo]);
      })
      .catch(error => this.errorHandler.handle(error));
  }

  atualizarLancamento(form: FormControl) {
    this.lancamentoService.atualizarLancamento(this.lancamento)
      .then(lancamento => {
        this.messageService.add({
          severity: 'success',
          summary: 'Lançamento atualizado com sucesso.',
          detail: 'Codigo:' + lancamento.codigo
        });
        this.router.navigate(['/lancamentos/' + lancamento.codigo]);
      })
      .catch(error => this.errorHandler.handle(error));
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
    this.pessoaService.pesquisar({nome: undefined, size: 0, page: 0})
      .then(result => {
        this.pessoas = result.pessoas.map(pessoa => {
          return {label: pessoa.nome, value: pessoa.codigo};
        });
      })
      .catch(error => this.errorHandler.handle(error));
  }

  novo(form: FormControl) {
    form.reset();
    setTimeout(function () {
      this.lancamento = new Lancamento();
    }.bind(this), 1);
    this.router.navigate(['/lancamentos/novo']);
  }

  atualizarTituloEdicao() {
    this.title.setTitle('Editar lançamento ' + this.lancamento.descricao);
  }

  onBeforeSendAnexo(event) {
    event.xhr.setRequestHeader('Authorization', 'Bearer ' + localStorage.getItem('access_token'));
    this.isUploading = true;
  }


  onUploadAnexo(event) {
    const anexo = JSON.parse(event.xhr.response);
    this.lancamento.urlAnexo = anexo.url;
    this.lancamento.anexo = anexo.nome;
    this.isUploading = false;
  }

  onErrorAnexo(event) {
    this.isUploading = false;
    this.messageService.add({
      severity: 'error',
      summary: 'Erro ao enviar anexo.',
      detail: 'Detalhes:' + JSON.parse(event.xhr.response).message
    });
  }

  removerAnexo() {
    this.lancamento.anexo = null;
    this.lancamento.urlAnexo = null;
  }

  get nomeAnexo(): string {
    const nome = this.lancamento.anexo;

    if (nome) {
      return nome.substring(nome.indexOf('_') + 1, nome.length);
    }

    return '';
  }

  get urlUploadAnexo(): string {
    return this.lancamentoService.urlUploadAnexo();
  }
}
