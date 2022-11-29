import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";


const reducers = combineReducers({
    // place your separate reducers here, for example:
    // students: studentReducer,
})

function configureStore() {
    // return createStore(########, applyMiddleware(thunk));
    return createStore(reducers, applyMiddleware(thunk))
}

export default configureStore;