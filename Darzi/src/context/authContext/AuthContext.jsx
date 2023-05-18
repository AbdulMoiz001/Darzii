import { createContext, useEffect, useReducer } from "react";
import authReducer from "./AuthReducers";





const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem("tailor")) || null,
    isFetching: false,
    error: false
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, INITIAL_STATE);
    useEffect(() => {
        localStorage.setItem("tailor", JSON.stringify(state.user));
    }, [state.user]);



    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                isFetching: state.isFetching,
                error: state.error,
                dispatch,
            }}
        >
            {children}
        </AuthContext.Provider >
    );
}