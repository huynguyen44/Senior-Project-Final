import {Action} from 'redux';
import {NgRedux} from '@angular-redux/store';
import {CustomUser, Registrant} from '../data/custom-types';
import {IAppState} from '../store';
import {Injectable} from '@angular/core';

export interface ILoginAction extends Action {
  payload?: any;
}

@Injectable({
  providedIn: 'root'
})
export class LoginAction {
  constructor(private ngRedux: NgRedux<IAppState>) {
  }

  static readonly type = {
    ADD_USER: 'ADD_USER',
    LOGIN_USER: 'LOGIN_USER',
  };

  addUser(newUser: CustomUser) {
    this.ngRedux.dispatch(<ILoginAction> {
      type: LoginAction.type.ADD_USER,
      payload: newUser
    });
  }

  loginUser(username: string) {
    this.ngRedux.dispatch(<ILoginAction> {
      type: LoginAction.type.LOGIN_USER,
      payload: username
    });
  }

}
