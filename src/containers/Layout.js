import Layout from '../components/Layout.js';
import { resetPage, meFromPage, meFromPageSuccess, meFromPageFailure,
    logoutUser } from '../actions/users';
import { connect } from 'react-redux';


const mapDispatchToProps = (dispatch) => {
  return {
    resetPage: () => {
        dispatch(resetPage());
    },
    loadUserFromPage: () => {
        let username = sessionStorage.getItem('username');
  	 	if(!username || username === '') {//if there is no token, dont bother
  	 		return;
  	 	}
  	 	//fetch user from token (if server deems it's valid token)
  	 	dispatch(meFromPage(username)).then((response) => {
  	 	    if (!response.error) {
  	 	        dispatch(meFromPageSuccess(response.payload))
  	 	    } else {
  	 	        sessionStorage.removeItem('username');//remove token from storage
  	 	        dispatch(meFromPageFailure(response.payload));
  	 	    }
        })
    },
    signOut: () => {
        sessionStorage.removeItem('username');
        dispatch(logoutUser());
    }
  };
};


function mapStateToProps(state) {
  return {
    member: state.member
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);