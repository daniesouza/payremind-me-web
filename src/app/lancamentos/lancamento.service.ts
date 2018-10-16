import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Lancamento} from '../core/model';


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

  buscaPorCodigo(codigo: number): Promise<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg=='
      })
    };

    return this.http.get(`${this.lancamentosUrl}/${codigo}`, httpOptions)
      .toPromise()
      .then((lancamento: Lancamento) => {
        lancamento.dataVencimento = lancamento.dataVencimento ? new Date(lancamento.dataVencimento + 'T00:00:00') : null;
        lancamento.dataPagamento = lancamento.dataPagamento ? new Date(lancamento.dataPagamento + 'T00:00:00') : null;
        return lancamento;
      });
  }

  salvarLancamento(lancamento: Lancamento): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg=='
      }),
    };

    return this.http.post(`${this.lancamentosUrl}`, lancamento, httpOptions)
      .toPromise();
  }

  atualizarLancamento(lancamento: Lancamento): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg=='
      }),
    };

    return this.http.put(`${this.lancamentosUrl}/${lancamento.codigo}`, lancamento, httpOptions)
      .toPromise();
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
