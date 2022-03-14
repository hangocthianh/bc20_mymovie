import api from "utils/apiUtils";
import * as adminAction from './constants';

export const actAdminLogin = (user, history) => {
  return (dispatch) => {
    dispatch(actAdminLoginRequest())
    api
      .post('QuanLyNguoiDung/DangNhap', user)
      .then(result => {
        if (result.data.content.maLoaiNguoiDung === "KhachHang") {
          return Promise.reject({
            response: {
              data: {
                content: "Bạn không có quyền truy cập",
              }
            },
          });
        }
        localStorage.setItem("UserLogin", JSON.stringify(result.data));
        history.replace("/dashboard");
        dispatch(actAdminLoginSuccess(result.data))
      })
      .catch(error => {
        dispatch(actAdminLoginFailed(error))
      })
  }
};

const actAdminLoginRequest = () =>({
  type: adminAction.ADMIN_LOGIN_REQUEST
});

const actAdminLoginSuccess = (data) =>({
  type: adminAction.ADMIN_LOGIN_SUCCESS,
  payload: data
});

const actAdminLoginFailed = (error) => ({
  type: adminAction.ADMIN_LOGIN_FAILED,
  payload: error
})