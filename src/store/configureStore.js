import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import postReducer from '../reducers/postReducer';
import filterReducer from '../reducers/filterReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
                          
// create store
export default () => {
    const store = createStore(
        combineReducers({
            postReducer,
            filterReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
       // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
};