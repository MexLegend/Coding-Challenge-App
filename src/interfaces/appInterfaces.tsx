
export interface ApiData {
    id: number;
    image: string;
    description: string;
    message: string;
    title: string;
}

export interface ApiDataState {
    apiData: ApiData[];
    errorMessage: string;
    loading: boolean;
}

export interface AppState {
    AUTH: AuthState,
    APIDATA: ApiDataState
}

export interface AuthState {
    errorMessage: string;
    status: 'checking' | 'authenticated' | 'not-authenticated';
    token: string | null;
}

export interface LoginData {
    password: string;
    username: string;
}

export interface LoginResponse {
    token: string;
}