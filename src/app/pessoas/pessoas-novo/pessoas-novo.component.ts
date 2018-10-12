import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoas-novo',
  templateUrl: './pessoas-novo.component.html',
  styleUrls: ['./pessoas-novo.component.css']
})
export class PessoasNovoComponent implements OnInit {

  tipos = [
    {label: 'Receita', value: 'RECEITA'},
    {label: 'Despesa', value: 'DESPESA'}
  ];

  categorias = [
    {label: 'Alimentação', value: 1},
    {label: 'Transporte', value: 2}
  ];


  pessoas = [
    {label: 'João da silva', value: 1},
    {label: 'Sebastiao de souza', value: 2},
    {label: 'Daniel souza', value: 3}
  ];

  constructor() { }

  ngOnInit() {
  }

}
