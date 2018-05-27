import {
  FETCH_IDOLS, FETCH_IDOLS_SUCCESS, FETCH_IDOLS_FAILURE, RESET_IDOLS,
	FETCH_IDOL, FETCH_IDOL_SUCCESS,  FETCH_IDOL_FAILURE, RESET_ACTIVE_IDOL,
	CREATE_IDOL, CREATE_IDOL_SUCCESS, CREATE_IDOL_FAILURE, RESET_NEW_IDOL,
	DELETE_IDOL, DELETE_IDOL_SUCCESS, DELETE_IDOL_FAILURE, RESET_DELETED_IDOL
} from '../actions/idols';


	const INITIAL_STATE = {
	                        idolsList: {idols: [], error:null, loading: false},  
							            newIdol:{idol:null, error: null, loading: false}, 
			            				activeIdol:{idol:null, error:null, loading: false}, 
					            		deletedIdol: {idol: null, error:null, loading: false}
						            };

export default function(state = INITIAL_STATE, action) {
  let error;
  switch(action.type) {

  case FETCH_IDOLS:
  	return { ...state, idolsList: {idols:[], error: null, loading: true} }; 
  case FETCH_IDOLS_SUCCESS:
    return { ...state, idolsList: {idols: action.payload, error:null, loading: false} };
  case FETCH_IDOLS_FAILURE:
    error = action.payload || {message: action.payload.message};
    return { ...state, idolsList: {idols: [], error: error, loading: false} };
  case RESET_IDOLS:
    return { ...state, idolsList: {idols: [], error:null, loading: false} };

  case FETCH_IDOL:
    return { ...state, activeIdol: {...state.activeIdol, loading: true}};
  case FETCH_IDOL_SUCCESS:
    return { ...state, activeIdol: {idol: action.payload, error:null, loading: false}};
  case FETCH_IDOL_FAILURE:
    error = action.payload || {message: action.payload.message};
    return { ...state, activeIdol: {idol: null, error:error, loading:false}};
  case RESET_ACTIVE_IDOL:
    return { ...state, activeIdol: {idol: null, error:null, loading: false}};

  case CREATE_IDOL:
  	return {...state, newIdol: {...state.newIdol, loading: true}};
  case CREATE_IDOL_SUCCESS:
  	return {...state, newIdol: {idol:action.payload, error:null, loading: false}};
  case CREATE_IDOL_FAILURE:
    error = action.payload || {message: action.payload.message};
  	return {...state, newIdol: {idol:null, error:error, loading: false}};
  case RESET_NEW_IDOL:
  	return {...state, newIdol: {idol:null, error:null, loading: false}};

  case DELETE_IDOL:
   	return {...state, deletedIdol: {...state.deletedIdol, loading: true}};
  case DELETE_IDOL_SUCCESS:
  	return {...state, deletedIdol: {idol:action.payload, error:null, loading: false}};
  case DELETE_IDOL_FAILURE:
    error = action.payload || {message: action.payload.message};
  	return {...state, deletedIdol: {idol:null, error:error, loading: false}};
  case RESET_DELETED_IDOL:
  	return {...state, deletedIdol: {idol:null, error:null, loading: false}};

  default:
    return state;
  }
}

