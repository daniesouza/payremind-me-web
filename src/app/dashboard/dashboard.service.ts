import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {CustomHttpService} from '../seguranca/custom-http.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  lancamentosURL: string;

  constructor(private http: CustomHttpService) {
    this.lancamentosURL = `${environment.apiUrl}/lancamentos`;
  }

  lancamentosPorCategoria(): Promise<Array<any>> {
    return this.http.get(`${this.lancamentosURL}/estatistica/categoria`)
      .toPromise()
      .then((lancamentos: Array<any>) => {

        lancamentos.forEach(lancamento => {
          lancamento.dia = lancamento.dia ? new Date(lancamento.dia + 'T00:00:00') : null;
        });


        return lancamentos;
      });
  }

  lancamentosPorDia(): Promise<Array<any>> {
    return this.http.get(`${this.lancamentosURL}/estatistica/dia`)
      .toPromise()
      .then((lancamentos: Array<any>) => {

        lancamentos.forEach(lancamento => {
          lancamento.dia = lancamento.dia ? new Date(lancamento.dia + 'T00:00:00') : null;
        });


        return lancamentos;
      });
  }
}
