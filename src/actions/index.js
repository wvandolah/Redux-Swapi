// we'll need axios
import axios from 'axios';
export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ERROR = 'ERROR';
// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors

// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch charicters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based

export const fetchChars = () => {
  const getChars = axios.get(`https://swapi.co/api/people/`);
  return function(dispatch) {
    dispatch({ type: FETCHING })
    getChars
      .then(data => {
        dispatch({ type: FETCHED, payload: data.data.results})
        // console.log(data.data.results)
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err})
        console.log(err)
      })
  }
}