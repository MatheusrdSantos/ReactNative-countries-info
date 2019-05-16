import {COUNTRY_ACTIONS} from '../actions';

const countryReducer = (state = {countries:[]}, action) =>{
    switch (action.type) {
        case COUNTRY_ACTIONS.FETCH_COUNTRIES_NAME:
            return action.payload;
        default:
            return state.countries;
    }
}

export default countryReducer;