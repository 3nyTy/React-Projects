import  { FETCH_WEATHER } from '../actions/index';
export default function(state = [], action){
  switch (action.type) {
    case FETCH_WEATHER :
     //return state.push(action.payload.data);  we should never mutate state like this. it should always be a new instance hence use concat 
     //ES6 approach for concat- [action.payload.data, ...state] => [ city, city, city] NOT [city, [city,city]]
            return state.concat([action.payload.data]);


  }
  return state;
}