import {Action} from 'redux';
import {NgRedux} from '@angular-redux/store';
import {Registrant} from '../data/custom-types';
import {IAppState} from '../store';
import {Injectable} from '@angular/core';

export interface IRegistrantAction extends Action {
  payload?: any;
}

@Injectable({
  providedIn: 'root'
})
export class RegistrantAction {
  constructor(private ngRedux: NgRedux<IAppState>) {
  }

  static readonly type = {
    ADD_REGISTRANT: 'ADD_REGISTRANT',
    REMOVE_REGISTRANT: 'REMOVE_REGISTRANT',
  };

  addRegistrant(newReg: Registrant) {
    this.ngRedux.dispatch(<IRegistrantAction> {
      type: RegistrantAction.type.ADD_REGISTRANT,
      payload: newReg
    });
  }

}
