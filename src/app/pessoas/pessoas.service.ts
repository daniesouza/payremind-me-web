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
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg=='
      }),
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
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg=='
      }),
    };

    return this.http.post(`${this.pessoasURL}`, pessoa, httpOptions)
      .toPromise();
  }

  excluir(codigo: number): Promise<void> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg=='
      }),
    };

    return this.http.delete(`${this.pessoasURL}/${codigo}`, httpOptions)
      .toPromise()
      .then(() => null);
  }

  alterarStatus(codigo: number, status: boolean): Promise<void> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg=='
      }),
    };

    return this.http.put(`${this.pessoasURL}/${codigo}/ativo`, status, httpOptions)
      .toPromise()
      .then(() => null);
  }
}
