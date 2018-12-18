import SignUp from '../components/SignUp.js';
import { resetUser } from '../actions/users';
import { connect } from 'react-redux';
import {
  signUpUser,
  signUpUserSuccess,
  signUpUserFailure
} from '../actions/users';

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (values) => {
        dispatch(signUpUser(values)).then((response) => {
          if (response.error) {
            dispatch(signUpUserFailure(response.payload));
          }
        sessionStorage.setItem('username', response.payload.data.username);
        dispatch(signUpUserSuccess(response.payload));
      })
    }
  };
};


function mapStateToProps(state) {
  return {
    member: state.member
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);