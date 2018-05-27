import SignIn from '../components/SignIn.js';
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

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);