import {Injectable} from '@angular/core';
import {CustomHttpService} from '../seguranca/custom-http.service';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  categoriasURL: string;

  constructor(private http: CustomHttpService) {
    this.categoriasURL = `${environment.apiUrl}/categorias`;
  }

  pesquisar(): Promise<any> {
    return this.http.get(`${this.categoriasURL}`)
      .toPromise();
  }
}
