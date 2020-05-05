import {Component, OnInit} from '@angular/core';
import {newRegistrant} from '../../data/static-data';
import {select} from '@angular-redux/store';
import {CustomUser} from '../../data/custom-types';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  private testRegistrant = newRegistrant;

  @select((data) => (data.login.currentLoggedInUser)) user$: Observable<CustomUser>;

  constructor() {
    console.log('TESTING!!! ');
    // console.log('NAME: ' + this.testRegistrant.firstName);
  }

  ngOnInit() {
  }

}
