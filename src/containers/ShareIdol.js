import ShareIdol from '../components/ShareIdol.js';
import { resetNewIdol } from '../actions/idols';
import { connect } from 'react-redux';


const mapDispatchToProps = (dispatch) => {
  return {
    resetMe: () => {
      dispatch(resetNewIdol());
    }
  };
};


function mapStateToProps(state) {
  return {
    newIdol: state.idols.newIdol
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ShareIdol);