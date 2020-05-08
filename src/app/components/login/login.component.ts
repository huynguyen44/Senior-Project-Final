import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../services';
import {AppRouterService} from '../../services/app-router.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  private username = '';
  private password = '';
  private isError = false;


  constructor(
    private authenticationService: AuthenticationService,
    private appRouter: AppRouterService
  ) {

  }

  ngOnInit() {
  }

  onNewSubmit(username, password) {
    if (this.authenticationService.authenticate(username, password)) {
      console.log('WE GOT A LOGIN');
      this.isError = false;
      this.appRouter.goToUsers();
    } else {
      console.log('WE GOT AN INCORRECT LOGIN');
      this.isError = true;
    }
  }
}
