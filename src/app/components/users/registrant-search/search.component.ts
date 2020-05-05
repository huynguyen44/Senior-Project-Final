import { Component, OnInit } from '@angular/core';
import {allRegistrants} from '../../../data/static-data';
import {select} from '@angular-redux/store';
import {Observable} from 'rxjs';
import {Registrant} from '../../../data/custom-types';

@Component({
  selector: 'app-registrant-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  private currentRegistrants = allRegistrants;

  @select((data) => data.registrant.registrants) allRegistrants$: Observable<Array<Registrant>>;
  @select((data) => data.login.currentLoggedInUser.username) currentUser$: Observable<string>;
  @select((data) => data.login.currentLoggedInUser.permissions) permissions$: Observable<string>;

  constructor() { }

  ngOnInit() {
  }


}
