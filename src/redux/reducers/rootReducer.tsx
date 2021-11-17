import { combineReducers } from 'redux';

import { AuthReducer } from './authReducer';
import { ApiDataReducer } from './apiDataReducer';

const rootReducer = combineReducers({
    AUTH: AuthReducer,
    APIDATA: ApiDataReducer
});

export default rootReducer;