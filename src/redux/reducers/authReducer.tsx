
import { AuthState } from '../../interfaces/appInterfaces';
import { Types } from '../types';

const { ADD_ERROR, AUTH_CHECKING_FINISH, AUTH_LOGIN, AUTH_LOGOUT, AUTH_NOT_AUTHENTICATED, REMOVE_ERROR } = Types;

interface LoginPayload {
    error: string;
    token: string;
}

type ApiData = {
    image: string;
    description: string;
    title: string;
}

type AuthAction = {
    type: string;
    payload: LoginPayload
}

const initialState: AuthState = {
    errorMessage: '',
    status: 'checking',
    token: null
}

export const AuthReducer = (state: AuthState = initialState, action: AuthAction): AuthState => {

    switch (action.type) {

        case ADD_ERROR:
            return {
                ...state,
                errorMessage: action.payload.error
            }

        case AUTH_LOGIN:
            return {
                ...state,
                errorMessage: '',
                status: 'authenticated',
                token: action.payload.token
            }

        // case AUTH_CHECKING_FINISH:
        //     return {
        //         ...state,
        //         checking : false
        //     }

        case AUTH_LOGOUT:
        case AUTH_NOT_AUTHENTICATED:
            return {
                ...state,
                status: 'not-authenticated'
            }

        case REMOVE_ERROR:
            return {
                ...state,
                errorMessage: ''
            }

        default:
            return state;
    }
}