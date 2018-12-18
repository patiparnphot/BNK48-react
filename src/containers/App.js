import App from '../components/App.js';
import { connect } from 'react-redux';


const mapDispatchToProps = (dispatch) => {
};


function mapStateToProps(state) {
  return {
    member: state.member
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);