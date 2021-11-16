import { combineReducers } from 'redux';

import { AuthReducer } from './authReducer';
import { ApiDataReducer } from './apiDataReducer';

const appReducer = combineReducers({
    AUTH: AuthReducer,
    APIDATA: ApiDataReducer
});

export default appReducer;