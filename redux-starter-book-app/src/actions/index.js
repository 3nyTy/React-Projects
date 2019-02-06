export function selectBook (book) {
//since selectBook is an actionCreator  it should return action,
//an object with a type property
return {
type: 'BOOK_SELECTED',
payload : book
};

}// this action should run through all inducers. this action creator should be wired up to redux.