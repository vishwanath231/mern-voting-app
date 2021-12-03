import { ADMIN_LOGIN } from '../constant/Constant';

export const adminLogin = (data) => {
    localStorage.setItem("adminInfo", JSON.stringify(data.email));
    return {
        type: ADMIN_LOGIN,
        payload: data
    }
}