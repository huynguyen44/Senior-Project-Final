import {combineReducers} from 'redux';
import {IRegistrantState, registrantReducer} from './registrant.reducer';
import {ILoginState, loginReducer} from './login.reducer';

export interface IAppState {
  registrant?: IRegistrantState;
  login?: ILoginState;
}

// rootReducer combines all the reducers
export const rootReducer = combineReducers<IAppState>({
  registrant: registrantReducer,
  login: loginReducer,
});

