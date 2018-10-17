import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  oauthTokenURL = 'http://localhost:8080/payremind-me-api/oauth/token';
  jwtPayLoad: any;

  constructor(private http: HttpClient, private jwtService: JwtHelperService) {
    this.carregarToken();
  }

  login(username: string, password: string): Promise<void> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic YW5ndWxhcjpAbmd1bEByMA=='
      }),
      withCredentials: true,
    };

    const body = new HttpParams()
      .set('username', username)
      .set('password', password)
      .set('grant_type', 'password');


    return this.http.post(`${this.oauthTokenURL}`, body.toString(), httpOptions)
      .toPromise()
      .then(response => {
        // @ts-ignore
        this.armazenarToken(response.access_token);
      })
      .catch(responseError => {
        if (responseError.status === 400) {

          if (responseError.error.error === 'invalid_grant') {
            return Promise.reject('Usuário ou senha incorretos');
          }
        }

        return Promise.reject('Ocorreu um erro inesperado');

      });
  }

  isAccessTokenInvalido() {
    const token = localStorage.getItem('access_token');
    return !token || this.jwtService.isTokenExpired(token);
  }

  async obterNovoAccessToken(): Promise<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic YW5ndWxhcjpAbmd1bEByMA=='
      }),
      withCredentials: true,
    };

    const body = new HttpParams()
      .set('grant_type', 'refresh_token');

    return this.http.post(`${this.oauthTokenURL}`, body.toString(), httpOptions)
      .toPromise()
      .then(response => {
        // @ts-ignore
        this.armazenarToken(response.access_token);
        console.log('Novo access token criado!');

      })
      .catch(responseError => {
        console.error('Erro ao renovar token.', responseError);

      });

  }

  temPermissao(permissao: string) {
    return this.jwtPayLoad && this.jwtPayLoad.authorities.includes(permissao);
  }

  temPermissoes(roles) {

    for (const role of roles) {
      if (this.temPermissao(role)) {
        return true;
      }
    }

  }

  private armazenarToken(token: string) {
    this.jwtPayLoad = this.jwtService.decodeToken(token);
    localStorage.setItem('access_token', token);
  }

  limparAccessToken() {
    localStorage.removeItem('access_token');
    this.jwtPayLoad = null;
  }

  private carregarToken() {
    const token = localStorage.getItem('access_token');
    if (token) {
      this.armazenarToken(token);
    }
  }

}
