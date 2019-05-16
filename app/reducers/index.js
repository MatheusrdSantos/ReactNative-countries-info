import { combineReducers, createStore, applyMiddleware } from 'redux';
import countryReducer from './country';
import thunk from 'redux-thunk';


const rootReducer =  combineReducers({
    countries: countryReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
