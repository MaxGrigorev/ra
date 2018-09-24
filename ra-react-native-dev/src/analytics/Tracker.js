/*eslint-disable*/
import {GoogleAnalyticsTracker, GoogleAnalyticsSettings} from 'react-native-google-analytics-bridge';
import configuration from '../utils/configuration';
import omit from 'lodash/omit';

/* If TRUE the native library prevents any data from being sent to Google Analytics */
GoogleAnalyticsSettings.setDryRun(false);
/* Sets if OptOut is active and disables Google Analytics */
GoogleAnalyticsSettings.setOptOut(false);
const tracker = new GoogleAnalyticsTracker(configuration.TRACKING_ID);

/* Events that have private information and will not be tracked */
const blockedEvents = [];

/* Events pairs to track time */
const ref = {};

let startTime = {};

const getCurrentRouteName = (navigationState) => {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];
  if (route.routes) {
    return getCurrentRouteName(route);
  }
  return route.routeName;
};

export const screenTracking = ({getState}) => dispatch => (action) => {
  const currentScreen = getCurrentRouteName(getState().navigatorState)
  /* Tracking event if it's not blocked */
  if (blockedEvents.indexOf(action.type) === -1) {
    tracker.trackEvent(currentScreen, action.type, {label: JSON.stringify(action.payload), value: 0});
  }
  const result = dispatch(action);
  const nextScreen = getCurrentRouteName(getState().navigatorState)
  /* Tracking screen if screen changed */
  if (nextScreen !== currentScreen) {
    tracker.trackScreenView(nextScreen);
  }
  return result;
};

export const timeTracking = ({getState}) => dispatch => action => {
  const {type} = action;
  /* Assigning start time for action with key of corresponding end event */
  if (ref[type]) {
    startTime[ref[type]] = new Date().getTime();
  }
  /* Calculating duration of event */
  if (startTime[type]) {
    const time = new Date().getTime() - startTime[type];
    startTime = omit(startTime, [type]);
    tracker.trackTiming('Time tracking', time, {name: type, label: 'notdry'});
  }
  return dispatch(action);
};

