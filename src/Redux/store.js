import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducers from './Reducers';


const initialState = {};

const middleware = [thunk];
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(rootReducers, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;