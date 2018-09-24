import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { addNavigationHelpers } from 'react-navigation'
import AppNavigator from './Navigator'
import {getAuthenticationToken, setAuthenticationToken} from '../../utils/authentication';
import {socket} from '../../redux/middleware/socketMiddleware';
import {resetConnection} from './../session/SessionState';

class NavigatorView extends Component {

  componentDidMount(){
    socket.on('connect', async () => {
      const token = await getAuthenticationToken()
      socket.emit('token', token);
    });
    socket.on('token', async (token) => {
      console.log('token')
      await setAuthenticationToken(token);
    });
    socket.on('disconnect', () => {
      this.props.dispatch(resetConnection());
    });
  }

  render () {
    return (
      <AppNavigator
        navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.navigatorState
        })}
      />
    )
  }
}

NavigatorView.displayName = 'NavigationView'
NavigatorView.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigatorState: PropTypes.shape({
    index: PropTypes.number.isRequired,
    routes: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.string.isRequired,
        routeName: PropTypes.string.isRequired
      })
    )
  }).isRequired
}

export default NavigatorView
