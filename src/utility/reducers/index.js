import { combineReducers } from 'redux';
import cards from './Card.Reducer';

const rootReducer = combineReducers({
  cards
});

export default rootReducer;
