import AsyncStorage from '@react-native-async-storage/async-storage';
import { Dispatch } from 'redux';
import { URI } from '../../api/api';
import { LoginData } from '../../interfaces/appInterfaces';

import { Types } from '../types';
import { apiDataReset } from './apiDataAction';

const { ADD_ERROR, AUTH_LOGIN, AUTH_LOGOUT, AUTH_NOT_AUTHENTICATED, REMOVE_ERROR, AUTH_START_LOGIN } = Types;

const addError = (error: string) => ({
    type: ADD_ERROR,
    payload: { error }
});

const checkToken = () => {
    return async (dispatch: Dispatch) => {

        const token = await AsyncStorage.getItem('token');

        if (!token) return dispatch(notAuthenticated());

        dispatch(login(token));
    }
}

const login = (token: string) => ({
    type: AUTH_LOGIN,
    payload: {token}
});

const logout = () => ({ type: AUTH_LOGOUT });

const notAuthenticated = () => ({ type: AUTH_NOT_AUTHENTICATED });

const removeError = () => ({ type: REMOVE_ERROR });

const startLogin = ({ password, username }: LoginData) => {
    return async (dispatch: Dispatch) => {

        try {
            const response = await fetch(`${URI}/login`, {
                body: JSON.stringify({ username, password }),
                headers: {
                    "Content-Type": "application/json"
                },
                method: 'POST'
            });

            const data = await response.text();

            if (data.includes('token')) {
                const token = JSON.parse(data).token;

                dispatch(login(token));
                await AsyncStorage.setItem('token', token)

            } else {
                dispatch(addError('Your email or password is incorrect'));
            }
        } catch (error: any) {
            dispatch(addError(error));
        }

    }
}

const startLogout = () => {
    return async( dispatch: Dispatch) => {
        await AsyncStorage.clear();
        dispatch( logout() );
        dispatch( apiDataReset() );
    }
}

export {
    checkToken,
    login,
    logout,
    removeError,
    startLogin,
    startLogout
}