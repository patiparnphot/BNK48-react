import SignIn from '../components/SignIn.js';
import { connect } from 'react-redux';
import {
  signInUser,
  signInUserSuccess,
  signInUserFailure
} from '../actions/users';


const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (values) => {
        dispatch(signInUser(values)).then((response) => {
          if (response.error) {
            dispatch(signInUserFailure(response.payload));
          }
        sessionStorage.setItem('username', response.payload.data.username);
        dispatch(signInUserSuccess(response.payload));
      })
    }
  };
};


function mapStateToProps(state) {
  return {
    member: state.member
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);