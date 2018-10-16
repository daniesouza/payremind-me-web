import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
    <div class="container">
      <h1 style="text-align: center">Pagina não encontrada!</h1>
    </div>
  `,
  styles: []
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
