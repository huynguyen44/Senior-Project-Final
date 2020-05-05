import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {AuthenticationService} from '../../services';
import {ActivatedRoute, Router} from '@angular/router';
import {first} from 'rxjs/operators';
import {isError} from "util";
import {AppRouterService} from "../../services/app-router.service";


/** Error when invalid control is dirty, touched, or submitted. */
/*export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || isSubmitted));
  }
}*/


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error: string;

  private username = '';
  private password = '';
  private isError = false;


  constructor(
    // private formBuilder: FormBuilder,
    // private route: ActivatedRoute,
    // private router: Router,
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
