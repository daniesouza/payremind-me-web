import {Component, Input, OnInit} from '@angular/core';
import {Contato} from '../../core/model';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-pessoa-contato',
  templateUrl: './pessoa-contato.component.html',
  styleUrls: ['./pessoa-contato.component.css']
})
export class PessoaContatoComponent implements OnInit {

  @Input() contatos: Array<Contato>;
  contato: Contato;
  showDialogContatos = false;
  contatoIndex: number;

  constructor() {
  }

  ngOnInit() {
  }


  novoContato() {
    this.contato = new Contato();
    this.showDialogContatos = true;
    this.contatoIndex = this.contatos.length;
  }

  editarContato(contato: Contato, index: number) {
    this.contato = this.cloneContato(contato);
    this.contatoIndex = index;
    this.showDialogContatos = true;
  }

  saveContato(frmContato: FormControl) {
    this.contatos[this.contatoIndex] = this.cloneContato(this.contato);
    this.showDialogContatos = false;
    frmContato.reset();
  }

  private cloneContato(contato: Contato) {
    return new Contato(contato.codigo, contato.nome, contato.email, contato.telefone);
  }

  removerContato(index: number) {
    this.contatos.splice(index, 1);
  }
}
