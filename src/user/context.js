import { createContext, useReducer, useEffect, useCallback } from 'react';
import action from './action';
import userReducer from './reducer';
import * as DB from '../services/db';
const initialState = {
    refresh: false,
    is_admin: false,
}

export const UserContext = createContext(initialState);

export const UserContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, initialState);
    async function refreshData() {
        dispatch({ type: action.REFRESH_DATA });
    }
    async function changeAdimState(state) {
        dispatch({ type: action.CHANGE_STATE, data: { state } });
    }

    const validate = useCallback(() => {
        return DB.validate();
    }, [])

    const logout = useCallback(() => {
        DB.logout();
    }, [])

    useEffect(() => {
        (async () => {
            if (state.refresh) {
                const res = await validate();
                changeAdimState(res);
            }
        })();
    }, [state.refresh, validate])

    return (
        <UserContext.Provider
            value={{
                refreshData,
                changeAdimState,
                is_admin: state.is_admin,
                validate,
                logout
            }}>
            {children}
        </UserContext.Provider>
    )
}