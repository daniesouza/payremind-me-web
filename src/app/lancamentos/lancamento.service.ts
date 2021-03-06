import {Injectable} from '@angular/core';
import {HttpParams} from '@angular/common/http';
import {Lancamento} from '../core/model';
import {CustomHttpService} from '../seguranca/custom-http.service';
import {environment} from '../../environments/environment';


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

  lancamentosUrl: string;

  constructor(private http: CustomHttpService) {
    this.lancamentosUrl = `${environment.apiUrl}/lancamentos`;

  }

  pesquisar(filtro: LancamentoFiltro): Promise<any> {

    const httpOptions = {
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


    return this.http.get(`${this.lancamentosUrl}/${codigo}`)
      .toPromise()
      .then((lancamento: Lancamento) => {
        lancamento.dataVencimento = lancamento.dataVencimento ? new Date(lancamento.dataVencimento + 'T00:00:00') : null;
        lancamento.dataPagamento = lancamento.dataPagamento ? new Date(lancamento.dataPagamento + 'T00:00:00') : null;
        return lancamento;
      });
  }

  salvarLancamento(lancamento: Lancamento): Promise<any> {

    return this.http.post(`${this.lancamentosUrl}`, lancamento)
      .toPromise();
  }

  atualizarLancamento(lancamento: Lancamento): Promise<any> {
    return this.http.put(`${this.lancamentosUrl}/${lancamento.codigo}`, lancamento)
      .toPromise();
  }

  excluir(codigo: number): Promise<void> {
    return this.http.delete(`${this.lancamentosUrl}/${codigo}`)
      .toPromise()
      .then(() => null);
  }

  urlUploadAnexo(): string {
    return `${this.lancamentosUrl}/anexo`;
  }
}
