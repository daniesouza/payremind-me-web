import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamentos-novo',
  templateUrl: './lancamentos-novo.component.html',
  styleUrls: ['./lancamentos-novo.component.css']
})
export class LancamentosNovoComponent implements OnInit {

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
