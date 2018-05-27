import axios from 'axios';


//Idol list
export const FETCH_IDOLS = 'FETCH_IDOLS';
export const FETCH_IDOLS_SUCCESS = 'FETCH_IDOLS_SUCCESS';
export const FETCH_IDOLS_FAILURE = 'FETCH_IDOLS_FAILURE';
export const RESET_IDOLS = 'RESET_IDOLS';

//Create new idol
export const CREATE_IDOL = 'CREATE_IDOL';
export const CREATE_IDOL_SUCCESS = 'CREATE_IDOL_SUCCESS';
export const CREATE_IDOL_FAILURE = 'CREATE_IDOL_FAILURE';
export const RESET_NEW_IDOL = 'RESET_NEW_IDOL';

//Fetch idol
export const FETCH_IDOL = 'FETCH_IDOL';
export const FETCH_IDOL_SUCCESS = 'FETCH_IDOL_SUCCESS';
export const FETCH_IDOL_FAILURE = 'FETCH_IDOL_FAILURE';
export const RESET_ACTIVE_IDOL = 'RESET_ACTIVE_IDOL';

//Delete idol
export const DELETE_IDOL = 'DELETE_IDOL';
export const DELETE_IDOL_SUCCESS = 'DELETE_IDOL_SUCCESS';
export const DELETE_IDOL_FAILURE = 'DELETE_IDOL_FAILURE';
export const RESET_DELETED_IDOL = 'RESET_DELETED_IDOL';


const ROOT_URL = location.href.indexOf('localhost') > 0 ? 'http://localhost/api' : '/api';
export function fetchIdols() {
  const request = axios({
    method: 'get',
    url: `${ROOT_URL}/idols.php`,
    headers: []
  });
  return {
    type: FETCH_IDOLS,
    payload: request
  };
}
export function fetchIdolsSuccess(idols) {
  return {
    type: FETCH_IDOLS_SUCCESS,
    payload: idols
  };
}
export function fetchIdolsFailure(error) {
  return {
    type: FETCH_IDOLS_FAILURE,
    payload: error
  };
}


export function createIdol(props) {
  const request = axios.post(`${ROOT_URL}/createidol.php`, props);
  return {
    type: CREATE_IDOL,
    payload: request
  };
}
export function createIdolSuccess(newIdol) {
  return {
    type: CREATE_IDOL_SUCCESS,
    payload: newIdol
  };
}
export function createIdolFailure(error) {
  return {
    type: CREATE_IDOL_FAILURE,
    payload: error
  };
}
export function resetNewIdol() {
  return {
    type: RESET_NEW_IDOL
  }
}


export function fetchIdol(id) {
  const request = axios.get(`${ROOT_URL}/idol.php?id="${id}"`);
  return {
    type: FETCH_IDOL,
    payload: request
  };
}
export function fetchIdolSuccess(activeIdol) {
  return {
    type: FETCH_IDOL_SUCCESS,
    payload: activeIdol
  };
}
export function fetchIdolFailure(error) {
  return {
    type: FETCH_IDOL_FAILURE,
    payload: error
  };
}
export function resetActiveIdol() {
  return {
    type: RESET_ACTIVE_IDOL
  }
}


export function deleteIdol(id) {
  const request = axios.get(`${ROOT_URL}/deleteidol.php?id="${id}"`);
  return {
    type: DELETE_IDOL,
    payload: request
  };
}
export function deleteIdolSuccess(deletedIdol) {
  return {
    type: DELETE_IDOL_SUCCESS,
    payload: deletedIdol
  };
}
export function deleteIdolFailure(response) {
  return {
    type: DELETE_IDOL_FAILURE,
    payload: response
  };
}
export function resetDeletedIdol() {
  return {
    type: RESET_DELETED_IDOL
  };
}