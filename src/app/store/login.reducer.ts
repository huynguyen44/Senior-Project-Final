import {CustomUser} from '../data/custom-types';
import {allUsers} from '../data/static-data';
import {IRegistrantAction} from '../actions/registrant.action';
import {LoginAction} from '../actions/login.action';


export interface ILoginState {
  users: CustomUser[];
  currentLoggedInUser: CustomUser;
}

// initial store model state
const INIT_STATE: ILoginState = {
  users: allUsers,
  currentLoggedInUser: {username: 'admin', password: 'admin1234', permissions: 'admin'},
};

export function loginReducer(state: ILoginState = INIT_STATE, action: IRegistrantAction): ILoginState {
  switch (action.type) {
    case LoginAction.type.ADD_USER:
      return Object.assign({}, state, {users: [...state.users, action.payload]});
    case LoginAction.type.LOGIN_USER:
      let user;
      for (user of state.users) {
        if (user.username === action.payload) {
          return Object.assign({}, state, {currentLoggedInUser: user});
        }
      }
      return state;
    default:
      return state;
  }
}


