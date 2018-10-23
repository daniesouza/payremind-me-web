import {Injectable} from '@angular/core';
import {CustomHttpService} from '../seguranca/custom-http.service';
import {environment} from '../../environments/environment';
import {ResponseContentType} from '@angular/http';
import {HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RelatoriosService {

  lancamentosURL: string;

  constructor(private http: CustomHttpService) {
    this.lancamentosURL = `${environment.apiUrl}/lancamentos/relatorio`;
  }

  lancamentosPorPessoa(inicio: Date, fim: Date) {

    const httpOptions = {
      params: new HttpParams(),
      responseType: 'blob'
    };

    httpOptions.params = httpOptions.params.set('inicio', inicio.toISOString().substring(0, inicio.toISOString().indexOf('T')));
    httpOptions.params = httpOptions.params.set('fim', fim.toISOString().substring(0, fim.toISOString().indexOf('T')));


    return this.http.get(`${this.lancamentosURL}/pessoa`, httpOptions)
      .toPromise().then(response => {
        return response;
      });
  }
}
