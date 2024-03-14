// store.js
import { createStore, combineReducers } from 'redux';
import userReducer from './reducer/userReducer';
import { loadState, saveState } from '../lib/storage';

const rootReducer = combineReducers({
  users: userReducer,
});

const persistedState = loadState('reduxState');

const store = createStore(rootReducer, persistedState);

store.subscribe(() => {
  saveState('reduxState', store.getState());
});

export default store;
