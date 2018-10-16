import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Lancamento, Pessoa} from '../../core/model';
import {CategoriasService} from '../../categorias/categorias.service';
import {PessoasService} from '../pessoas.service';
import {LancamentoService} from '../../lancamentos/lancamento.service';
import {MessageService} from 'primeng/api';
import {ErrorHandlerService} from '../../core/error-handler.service';

@Component({
  selector: 'app-pessoas-novo',
  templateUrl: './pessoas-novo.component.html',
  styleUrls: ['./pessoas-novo.component.css']
})
export class PessoasNovoComponent implements OnInit {

  pessoa = new Pessoa();

  constructor(private pessoaService: PessoasService,
              private messageService: MessageService,
              private errorHandler: ErrorHandlerService) {
  }

  ngOnInit() {
  }

  salvar(form: FormControl) {
    console.log(form);
    console.log(this.pessoa);
    this.pessoaService.salvarPessoa(this.pessoa)
      .then(pessoa => {
        this.messageService.add({
          severity: 'success',
          summary: 'Pessoa adicionada com sucesso.',
          detail: 'Codigo:' + pessoa.codigo
        });

        this.pessoa = new Pessoa();
        form.reset();
      })
      .catch(error => this.errorHandler.handle(error));
  }
}
