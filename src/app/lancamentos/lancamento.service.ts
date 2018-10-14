import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';


export class LancamentoFiltro {
  descricao: string;
  dataVencimentoDe: Date;
  dataVencimentoAte: Date;
  page = 0;
  size = 5;
}

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {

  lancamentosUrl = 'http://localhost:8080/payremind-me-api/lancamentos';

  constructor(private http: HttpClient) {
  }

  pesquisar(filtro: LancamentoFiltro): Promise<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg=='
      }),
      params: new HttpParams().set('page', String(filtro.page))
        .set('size', String(filtro.size))
    };

    if (filtro.descricao) {
      httpOptions.params = httpOptions.params.set('descricao', filtro.descricao);
    }

    if (filtro.dataVencimentoDe) {
      httpOptions.params = httpOptions.params.set('dataVencimentoDe',
        filtro.dataVencimentoDe.toISOString().substring(0, filtro.dataVencimentoDe.toISOString().indexOf('T')));
    }

    if (filtro.dataVencimentoAte) {
      httpOptions.params = httpOptions.params.set('dataVencimentoAte',
        filtro.dataVencimentoAte.toISOString().substring(0, filtro.dataVencimentoAte.toISOString().indexOf('T')));
    }

    return this.http.get(`${this.lancamentosUrl}?resumo`, httpOptions)
      .toPromise()
      .then(response => {

        const result = {
          // @ts-ignore
          lancamentos: response.content,
          // @ts-ignore
          totalRecords: response.totalElements
        };

        return result;
      });
  }

  excluir(codigo: number): Promise<void> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg=='
      }),
    };

    return this.http.delete(`${this.lancamentosUrl}/${codigo}`, httpOptions)
      .toPromise()
      .then(() => null);
  }

}
