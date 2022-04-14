import { createStore, combineReducers } from 'redux';
import authReducer from './reducers/authReducer';
import postReducer from './reducers/postReducer';

const rootReducer = combineReducers({ 
    authReducer: authReducer,
    postReducer: postReducer 
});

const configureStore = () => {
    return createStore(rootReducer);
}

export default configureStore;