//called only when an action occurs.
//state argument is not application state. 
//only the state this redicer is responsible for.
//state = null is ES6 syntax which represents when object is undefined set it to null
////Reducers are responsible for changing application state.
export default function (state = null , action) {
  switch (action.type) {
    case 'BOOK_SELECTED' :
      return action.payload;
  }
  return state;

}