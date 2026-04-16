export type AuthState = {

    isAuthenticated: boolean;
    username: string;
    accessToken: string;
    refreshToken: string;
}

export type AuthAction = {
    type:string;
    payload?: AuthState
}
const initialState: AuthState = {
    isAuthenticated: false, accessToken: "", refreshToken: "", username: ""
}

// login action => {type: "login", payload: AuthState}
// log action => {type: logout}
export const authReducer = (state=initialState, action: AuthAction) => {

    if(action.type==="login" && action.payload){
        return action.payload;
    }
    if(action.type === "logout"){
        return initialState;
    }
    return state;
}