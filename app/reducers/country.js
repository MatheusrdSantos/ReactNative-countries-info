import {COUNTRY_ACTIONS, INITIAL_STATE} from '../actions';

const countryReducer = (state = INITIAL_STATE, action) =>{
    switch (action.type) {
        case COUNTRY_ACTIONS.FETCH_COUNTRIES_NAME:
            return {...state, all:action.payload};
        case COUNTRY_ACTIONS.SELECT_COUNTRY:
            return {...state, selectedCountry: action.payload};
        case COUNTRY_ACTIONS.SET_FILTER:
            return {...state, filter: action.payload}
        default:
            return state;
    }
}

export default countryReducer;