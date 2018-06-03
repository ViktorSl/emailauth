import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../../app/reducers/index';
import logger from 'redux-logger';


const configureStore = ()=> {

    return createStore(rootReducer, applyMiddleware(logger))
};

export default configureStore;