import { AUTH, LOGOUT } from '../constants/actionsTypes';

const authReducer = (state = { authData: null }, action) => {
    switch (action.type) {
        case AUTH:
            console.log(action?.data);
            localStorage.setItem('profile', JSON.stringify({...action?.data}));
            return {...state, authData: action.data, loading: false, errors: null };
        case LOGOUT:
            console.log('lOGOUT FROM REDUCER', action?.data);
            localStorage.clear();
            return {...state, authData: null, loading: false, errors: null };
        default:
            return state;
    }
}

export default authReducer;
