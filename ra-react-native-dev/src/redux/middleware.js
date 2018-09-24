import promiseMiddleware from 'redux-promise'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'
import {screenTracking, timeTracking} from '../analytics/Tracker'
import socketMiddleware from './middleware/socketMiddleware';

// define store middlewares as an array
export default [promiseMiddleware, thunkMiddleware, logger, socketMiddleware,screenTracking, timeTracking]
