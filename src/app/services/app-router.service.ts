import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppRouterService {

  constructor(private router: Router) {
  }

  goToSearchPage() {
    this.router.navigate(['search']);
  }

  goToRegister() {
    this.router.navigate(['register']);
  }

  goToUsers() {
    this.router.navigate(['users']);
  }


}
