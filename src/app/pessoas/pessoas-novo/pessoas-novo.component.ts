import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Cidade, Contato, Lancamento, Pessoa} from '../../core/model';
import {CategoriasService} from '../../categorias/categorias.service';
import {PessoasService} from '../pessoas.service';
import {LancamentoService} from '../../lancamentos/lancamento.service';
import {MessageService} from 'primeng/api';
import {ErrorHandlerService} from '../../core/error-handler.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {AuthService} from '../../seguranca/auth.service';

@Component({
  selector: 'app-pessoas-novo',
  templateUrl: './pessoas-novo.component.html',
  styleUrls: ['./pessoas-novo.component.css']
})
export class PessoasNovoComponent implements OnInit {

  pessoa = new Pessoa();
  estados: any[];
  cidades: any[];
  estadoSelecionado: number;

  constructor(private pessoaService: PessoasService,
              private messageService: MessageService,
              private errorHandler: ErrorHandlerService,
              private route: ActivatedRoute,
              private router: Router,
              private title: Title,
              public authService: AuthService) {
  }

  ngOnInit() {

    const codigo = this.route.snapshot.params['codigo'];

    this.title.setTitle('Nova pessoa');
    this.loadEstados();

    if (codigo) {
      this.buscarPessoa(codigo);
    }
  }

  private buscarPessoa(codigo) {
    this.pessoaService.buscaPorCodigo(codigo)
      .then(pessoa => {
        this.pessoa = pessoa;

        this.estadoSelecionado = this.pessoa.endereco.cidade ? this.pessoa.endereco.cidade.estado.codigo : null;
        if (this.estadoSelecionado) {
          this.loadCidades();
        }

        this.atualizarTituloEdicao();
      })
      .catch(error => this.errorHandler.handle(error));
  }

  salvar(form: FormControl) {
    if (this.pessoa.codigo) {
      this.atualizarPessoa(form);
    } else {
      this.salvarPessoa(form);
    }
  }

  salvarPessoa(form: FormControl) {
    this.pessoaService.salvarPessoa(this.pessoa)
      .then(pessoa => {
        this.messageService.add({
          severity: 'success',
          summary: 'Pessoa adicionada com sucesso.',
          detail: 'Codigo:' + pessoa.codigo
        });

        this.router.navigate(['/pessoas/' + pessoa.codigo]);
      })
      .catch(error => this.errorHandler.handle(error));
  }

  atualizarPessoa(form: FormControl) {
    this.pessoaService.atualizarPessoa(this.pessoa)
      .then(pessoa => {
        this.messageService.add({
          severity: 'success',
          summary: 'Pessoa atualizada com sucesso.',
          detail: 'Codigo:' + pessoa.codigo
        });

        this.router.navigate(['/pessoas/' + pessoa.codigo]);
      })
      .catch(error => this.errorHandler.handle(error));
  }

  novo(form: FormControl) {
    form.reset();
    this.pessoa = new Pessoa();
    this.router.navigate(['/pessoas/novo']);
  }

  atualizarTituloEdicao() {
    this.title.setTitle('Editar pessoa ' + this.pessoa.nome);
  }

  onComboEstadoChange() {
    this.pessoa.endereco.cidade = new Cidade();
    this.loadCidades();
  }

  loadEstados() {
    this.pessoaService.getEstados()
      .then((estados: any[]) => {
        this.estados = estados.map(estado => {
          return {label: estado.nome, value: estado.codigo};
        });
      });
  }

  loadCidades() {
    this.pessoaService.getCidades(this.estadoSelecionado)
      .then((cidades: any[]) => {
        this.cidades = cidades.map(cidade => {
          return {label: cidade.nome, value: cidade.codigo};
        });
      });
  }
}
