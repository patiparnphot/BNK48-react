import IdolPage from '../components/IdolPage.js';
import { fetchIdol, fetchIdolSuccess, fetchIdolFailure,
    deleteIdol, deleteIdolSuccess, deleteIdolFailure } from '../actions/idols';
import { connect } from 'react-redux';


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchIdol: () => {
      dispatch(fetchIdol(ownProps.id)).then((response) => {
            !response.error ? dispatch(fetchIdolSuccess(response.payload.data)) : dispatch(fetchIdolFailure(response.payload.data));
      });
    },
    deleteIdol: () => {
      dispatch(deleteIdol(ownProps.id)).then((response) => {
            !response.error ? dispatch(deleteIdolSuccess(response.payload.data)) : dispatch(deleteIdolFailure(response.payload.data));
      });
    }
  };
};


function mapStateToProps(state, ownProps) {
  return {
    activeIdol: state.idols.activeIdol,
    deletedIdol: state.idols.deletedIdol,
    idolId: ownProps.id
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(IdolPage);