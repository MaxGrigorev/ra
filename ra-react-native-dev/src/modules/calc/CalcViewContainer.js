import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import CalcView from './CalcView'
import { NavigationActions } from 'react-navigation'
import * as CalcStateActions from '../calc/CalcState'

export default connect(
  state => ({
    calc: state.calc.value,
    loading: state.calc.loading
  }),
  dispatch => {
    return {
      navigate: bindActionCreators(NavigationActions.navigate, dispatch),
      calcStateActions: bindActionCreators(CalcStateActions, dispatch)
    }
  }
)(CalcView)
