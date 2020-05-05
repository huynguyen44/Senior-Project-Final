import {Registrant} from '../data/custom-types';
import {allRegistrants} from '../data/static-data';
import {IRegistrantAction, RegistrantAction} from '../actions/registrant.action';


export interface IRegistrantState {
  registrants: Registrant[];
  numRegistrants: number;
}

// initial store model state
const INIT_STATE: IRegistrantState = {
  registrants: allRegistrants,
  numRegistrants: allRegistrants.length,
};

export function registrantReducer(state: IRegistrantState = INIT_STATE, action: IRegistrantAction): IRegistrantState {
  switch (action.type) {
    case RegistrantAction.type.ADD_REGISTRANT:
      if (!action.payload.registrantId) {
        action.payload.registrantId = state.registrants.length;
      }
      return Object.assign({}, state, {registrants: [...state.registrants, action.payload]});
    default:
      return state;
  }
}
