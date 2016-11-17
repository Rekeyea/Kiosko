import { createStore, applyMiddleware  } from 'redux';
import {reducer} from "./reducer";  
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

const logger = createLogger();
export const store = createStore(reducer,applyMiddleware(thunk,logger));