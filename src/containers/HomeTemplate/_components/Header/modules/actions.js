import api from "utils/apiUtils";
import * as formActions from './constants';

// Login actions
export const actLogin = (user) => {
  return (dispatch) => {
    dispatch(actLoginRequest());

    api
      .post('QuanLyNguoiDung/DangNhap', user)
      .then((result)=> {
        localStorage.setItem("UserLogin", JSON.stringify(result.data));
        dispatch(actLoginSuccess(result.data.content))
      })
      .catch((error) => {
        dispatch(actLoginFailed(error.response))
      })
  };
};

const actLoginRequest = () => ({
  type: formActions.LOGIN_REQUEST
});

const actLoginSuccess = (data) => ({
  type: formActions.LOGIN_SUCCESS,
  payload: data
});

const actLoginFailed = (error) => ({
  type: formActions.LOGIN_FAILED,
  payload: error
});

// Register actions
export const actRegister = (user, closeModal, handleAlert)=> {
  return (dispatch)=> {
    dispatch(actRegisterRequest());

    api
      .post('QuanLyNguoiDung/DangKy', user)
      .then(result => {
        console.log(result);
        dispatch(actRegisterSuccess(result.data.content));
        closeModal();
        handleAlert();
      })
      .catch(error => {
        console.log(error.response.data.content);
        dispatch(actRegisterFailed(error.response))
      })
  };
};

const actRegisterRequest = () => ({
  type: formActions.REGISTER_REQUEST
});

const actRegisterSuccess = (data) => ({
  type: formActions.REGISTER_SUCCESS,
  payload: data
});

const actRegisterFailed = (error) => ({
  type: formActions.REGISTER_FAILED,
  payload: error
})
