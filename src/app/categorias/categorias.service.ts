import {Injectable} from '@angular/core';
import {CustomHttpService} from '../seguranca/custom-http.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  categoriasURL = 'http://localhost:8080/payremind-me-api/categorias';

  constructor(private http: CustomHttpService) {
  }

  pesquisar(): Promise<any> {
    return this.http.get(`${this.categoriasURL}`)
      .toPromise();
  }
}
