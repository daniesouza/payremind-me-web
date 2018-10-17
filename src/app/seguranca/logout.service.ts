import {Injectable} from '@angular/core';

import {AuthService} from './auth.service';
import {CustomHttpService} from './custom-http.service';

@Injectable({
  providedIn: 'root'
})export class LogoutService {

  tokensRenokeUrl: string;

  constructor(
    private http: CustomHttpService,
    private auth: AuthService
  ) {
    this.tokensRenokeUrl = 'http://localhost:8080/payremind-me-api/tokens/revoke';
  }

  logout() {
    return this.http.delete(this.tokensRenokeUrl, { withCredentials: true })
      .toPromise()
      .then(() => {
        this.auth.limparAccessToken();
      });
  }

}
