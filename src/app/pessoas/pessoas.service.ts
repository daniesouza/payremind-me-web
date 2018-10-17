import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Lancamento, Pessoa} from '../core/model';


export class PessoasFiltro {
  nome: string;
  page = 0;
  size = 5;
}

@Injectable({
  providedIn: 'root'
})
export class PessoasService {

  pessoasURL = 'http://localhost:8080/payremind-me-api/pessoas';

  constructor(private http: HttpClient) {
  }

  pesquisar(filtro: PessoasFiltro): Promise<any> {

    const httpOptions = {
      params: new HttpParams().set('page', String(filtro.page))
        .set('size', String(filtro.size))
    };

    if (filtro.nome) {
      httpOptions.params = httpOptions.params.set('nome', filtro.nome);
    }


    return this.http.get(`${this.pessoasURL}`, httpOptions)
      .toPromise()
      .then(response => {

        const result = {
          // @ts-ignore
          pessoas: response.content,
          // @ts-ignore
          totalRecords: response.totalElements
        };

        return result;
      });
  }

  salvarPessoa(pessoa: Pessoa): Promise<any> {
    return this.http.post(`${this.pessoasURL}`, pessoa)
      .toPromise();
  }

  excluir(codigo: number): Promise<void> {
    return this.http.delete(`${this.pessoasURL}/${codigo}`)
      .toPromise()
      .then(() => null);
  }

  alterarStatus(codigo: number, status: boolean): Promise<void> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this.http.put(`${this.pessoasURL}/${codigo}/ativo`, status, httpOptions)
      .toPromise()
      .then(() => null);
  }

  atualizarPessoa(pessoa: Pessoa): Promise<any> {
    return this.http.put(`${this.pessoasURL}/${pessoa.codigo}`, pessoa)
      .toPromise();
  }

  buscaPorCodigo(codigo: number): Promise<any> {
    return this.http.get(`${this.pessoasURL}/${codigo}`)
      .toPromise();
  }
}
