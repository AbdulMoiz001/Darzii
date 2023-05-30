import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from './AuthAction';

export const login = async (user, dispatch) => {
    dispatch(loginStart());
    try {

        const res = await axios.post(
            "http://localhost:5000/auth/loginRider",
            user
        );
        dispatch(loginSuccess(res.data))
    } catch (error) {
        dispatch(loginFailure())
    }

}