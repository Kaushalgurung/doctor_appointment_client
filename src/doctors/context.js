import { createContext, useCallback, useEffect } from 'react';
import action from './action';
import doctorReducer from './reducer';
import * as Services from './service';
import * as FILTER from './filters';
const initialState = {
    filter: FILTER.ALL,
    refresh: false,
    doctors: {},
    pagination: { limit: 10, start: 0, total: 0, currentPage: 1, totalPages: 0 }
}

export const DoctorContext = createContext(initialState);

export const DoctorContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(doctorReducer, initialState);
    async function refreshData() {
        dispatch({ type: action.REFRESH_DATA });
    }
    useEffect(() => {
        try {
            Services.getDoctors().then(
                (data) => {
                    dispatch({ type: action.SET_DOCTORS, data: data });
                }
            );
        }
        catch (err) {
            console.log(err);
        }
    }, [state.filter, state.refresh])
    return(
        <DoctorContext.Provider
        value={{
            doctors: state.doctors,
            refreshData,
            pagination: state.pagination,
        }}>
            {children}
        </DoctorContext.Provider>
    )
}