import  { FETCH_MARKET_SHARES } from '../actions/index';
export default function(state = [], action){
  switch (action.type) {
    case FETCH_MARKET_SHARES :
   
            return state.concat([action.payload.data]);


  }
  return state;
}