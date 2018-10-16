import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {PessoasFiltro} from '../pessoas/pessoas.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  categoriasURL = 'http://localhost:8080/payremind-me-api/categorias';

  constructor(private http: HttpClient) {
  }

  pesquisar(): Promise<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg=='
      })
    };

    return this.http.get(`${this.categoriasURL}`, httpOptions)
      .toPromise();
  }
}
