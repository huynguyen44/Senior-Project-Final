import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {NgRedux} from "@angular-redux/store";
import {IAppState} from "../store";
import {CustomUser} from "../data/custom-types";
import {LoginAction} from '../actions/login.action';

@Injectable({providedIn: 'root'})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  private currentUsers: CustomUser[];

  constructor(private loginActions: LoginAction,
              private http: HttpClient,
              private ngRedux: NgRedux<IAppState>) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();

    this.ngRedux.select((data) => data.login.users).subscribe(value => {
      this.currentUsers = value;
    });
  }

  public get currentUserValue() {
    return this.currentUserSubject.value;
  }

  login(username, password) {
    return this.http.post<any>(`${config.apiUrl}/users/authenticate`, {username, password})
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  authenticate(username: string, password: string): boolean {
    let user;

    for (user of this.currentUsers) {
      if (user.username === username && user.password === password) {
        this.loginActions.loginUser(username);
        return true;
      }
    }

    return false;
  }
}
