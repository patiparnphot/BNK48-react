import { connect } from 'react-redux';
import { fetchIdols, fetchIdolsSuccess, fetchIdolsFailure } from '../actions/idols';
import IdolsList from '../components/IndexPage';
import { FETCH_IDOLS_SUCCESS } from '../actions/idols';

const mapStateToProps = state => ({
  idolsList: state.idols.idolsList
})

const mapDispatchToProps = dispatch => ({
  fetchIdols: () => {
      dispatch(fetchIdols()).then((response) => {
            !response.error ? dispatch(fetchIdolsSuccess(response.payload.data)) : dispatch(fetchIdolsFailure(response.payload.data));
      });
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(IdolsList);
