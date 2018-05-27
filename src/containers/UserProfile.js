import UserProfile from '../components/UserProfile.js';
import { connect } from 'react-redux';


const mapDispatchToProps = (dispatch) => {
  return {
  };
};


function mapStateToProps(state) {
  return {
      user: state.users.activeUser,
      IdolUser: state.users.idol
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);