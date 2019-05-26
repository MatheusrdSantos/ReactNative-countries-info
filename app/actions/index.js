import axios from 'axios';

export const COUNTRY_ACTIONS = {
    FETCH_COUNTRIES_NAME: 'FETCH_COUNTRIES_NAME',
    REQUEST_COUNTRIES: 'REQUEST_COUNTRIES',
    SELECT_COUNTRY: 'SELECT_COUNTRY',
    SET_FILTER: 'SET_FILTER'
}

export const INITIAL_STATE = {
    all:[],
    selectedCountry: {},
    filter:''
}

export function fetchCountries(data){
    return {type: COUNTRY_ACTIONS.FETCH_COUNTRIES_NAME, payload: data}
}
export const requestCountries = () => {
    return (dispatch) =>{
        return axios.get('https://restcountries.eu/rest/v2/all?fields=name;population;capital;area;flag;alpha2Code;demonym;borders;region;subregion;currencies;regionalBlocs;languages;timezones')
        .then(res => {
            console.log(res.data);
            dispatch(fetchCountries(res.data))
        })
    }
}

export function selectCountry(country){
    return {type: COUNTRY_ACTIONS.SELECT_COUNTRY, payload: country}
}

export function setCountriesFilter(filter){
    return {type: COUNTRY_ACTIONS.SET_FILTER, payload: filter};
}