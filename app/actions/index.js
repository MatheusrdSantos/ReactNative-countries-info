import axios from 'axios';

export const COUNTRY_ACTIONS = {
    FETCH_COUNTRIES_NAME: 'FETCH_COUNTRIES_NAME',
    REQUEST_COUNTRIES: 'REQUEST_COUNTRIES'
}

export function fetchCountries(data){
    return {type: COUNTRY_ACTIONS.FETCH_COUNTRIES_NAME, payload: data}
}
export const requestCountries = () => {
    return (dispatch) =>{
        return axios.get('https://restcountries.eu/rest/v2/all?fields=name;population;capital;area')
        .then(res => {
            console.log(res.data);
            dispatch(fetchCountries(res.data))
        })
    }
    
}