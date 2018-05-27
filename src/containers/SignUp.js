import SignUp from '../components/SignUp.js';
import { resetUser } from '../actions/users';
import { connect } from 'react-redux';


const mapDispatchToProps = (dispatch) => {
  return {
  };
};


function mapStateToProps(state) {
  return {
    member: state.member
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);