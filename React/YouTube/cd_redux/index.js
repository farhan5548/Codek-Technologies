import { createStore } from "redux";
import { type } from './node_modules/redux/src/types/reducers';

// Store
// createStore old
// configureStore new

const store = createStore(reducer);
function reducer (state = { amount : 1 }, action) {
    return state;
}

store.dispatch({type:'increment'});
console.log(store.getState());
