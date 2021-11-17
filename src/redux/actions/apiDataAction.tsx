import { Dispatch } from "redux";
import { URI } from "../../api/api";
import { ApiData } from '../../interfaces/appInterfaces';
import { Types } from "../types";
import { startLogout } from "./authAction";

const { API_DATA_RESET, API_DATA_RESULT } = Types;

const loadApiData = (token: string) => {
    return async (dispatch: Dispatch<any>) => {

        try {

            const response = await fetch(`${URI}/images`, {
                headers: {
                    "Content-Type": "application/json",
                    "authorization": `Bearer ${token}`
                },
                method: 'GET'
            });

            const data: any = await response.json();

            if (data.message) {
                dispatch(startLogout());
            }

            dispatch(apiData(data))

        } catch (error: any) {
            // dispatch(addError(error));
        }

    }
}

const apiData = (data: ApiData[]) => ({
    type: API_DATA_RESULT,
    payload: { apiData: data }
});

const apiDataReset = () => ({
    type: API_DATA_RESET
});


export {
    apiDataReset,
    loadApiData
}
