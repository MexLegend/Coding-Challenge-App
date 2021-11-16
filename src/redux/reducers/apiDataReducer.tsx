
import { ApiData, ApiDataState } from '../../interfaces/appInterfaces';
import { Types } from '../types';

const { ADD_ERROR, API_DATA_RESET, API_DATA_RESULT, REMOVE_ERROR } = Types;

interface ApiDataPayload {
    apiData: ApiData[];
    error: string;
}

type ApiDataAction = {
    type: string;
    payload: ApiDataPayload
}

const initialState: ApiDataState = {
    errorMessage: '',
    loading: true,
    apiData: []
}

export const ApiDataReducer = (state: ApiDataState = initialState, action: ApiDataAction): ApiDataState => {

    switch (action.type) {

        case ADD_ERROR:
            return {
                ...state,
                errorMessage: action.payload.error
            }

        case API_DATA_RESET:
            return {
                ...state,
                apiData: [],
                loading: true
            }

        case API_DATA_RESULT:
            return {
                ...state,
                apiData: action.payload.apiData,
                errorMessage: '',
                loading: false
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