import { combineReducers } from 'redux';
import shareReducer from './reducer_share';

const rootReducer = combineReducers({
  share: shareReducer
});

export default rootReducer;