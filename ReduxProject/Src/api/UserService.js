import Request from "./Request";
import { loginFailure, loginRequest, loginSuccess } from "../redux/actions";
import { signupFailure,signupSuccess,signupRequest } from "../redux/actions";
import { Alert } from "react-native";
// import { useState } from "react";

// const [state, setState] = useState({
//     isModalVisible: false,
// })

const UserService = {
    loadUsers(dispatch, params) {
        dispatch(loginRequest(null))
         Request.post('user/sign-in', params).then(response => {
            console.log('responseresponse==>',response);
            if (response.status === "SUCCESS") {
                dispatch(loginSuccess(response.data))
                return true;
            }
        }).catch(() => {
            dispatch(loginFailure(null))
        }).finally(() => { })
    },

    //**For signUp  */
      signupUsers(dispatch, params) {
        dispatch(signupRequest(null))
        response = Request.post('user/sign-up', params).then(response => {
            console.log('responseresponseresponse==>',response);
            if (response.status === "SUCCESS") {
                dispatch(signupSuccess(response.data))
                // Alert.alert('SUCCESS')

                return true;
                // console.log('dispatchdispatch===>',dispatch);
            }
        }).catch(() => {
            dispatch(signupFailure())
        }).finally(() => { })
    }
}

export default UserService;