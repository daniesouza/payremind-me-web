import {Component, OnInit} from '@angular/core';
import {MessageService} from 'primeng/api';
import {ErrorHandlerService} from '../../core/error-handler.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,
              private messageService: MessageService,
              private errorHandler: ErrorHandlerService,
              private route: ActivatedRoute,
              private router: Router,
              private title: Title) {
  }

  ngOnInit() {
    this.title.setTitle('Sistema Payremind-me');
  }

  login(username: string, password: string) {

    this.authService.login(username, password)
      .then(value => {
        this.router.navigate(['/lancamentos/']);
      })
      .catch(error => this.errorHandler.handle(error));

  }

}
