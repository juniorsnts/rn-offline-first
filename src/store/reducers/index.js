import { combineReducers } from 'redux';
import GitReducer from './GitReducer';
import { reducer as offline } from 'redux-offline-queue';

export default combineReducers({
    offline,
    GitReducer,
});