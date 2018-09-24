import { connect } from 'react-redux'
import AppView from './AppView'

export default connect(({session: {isReady}}) => ({
  isReady
}))(AppView)
