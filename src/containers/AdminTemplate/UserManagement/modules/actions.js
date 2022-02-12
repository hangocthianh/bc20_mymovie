import api from "utils/apiUtils";
import * as actUserManagement from './constants';

export const actFetchUserList = () => {
  return (dispatch) => {
    dispatch(actUserManagementRequest())

    api
      .get('QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP02')
      .then(result => {
        dispatch(actUserManagementSuccess(result.data.content));
      })
      .catch(error => {
        dispatch(actUserManagementFailed(error))
      })
  };
};

export const actDeleteUser = (user, alertDelete) => {
  return (dispatch) => {
    api
      .delete(`QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${user.taiKhoan}`,user)
      .then(result=> {
        dispatch(actFetchUserList())
        let deleteResult = JSON.stringify(result.data.content)
        alertDelete('success', deleteResult)
      })
      .catch(error => {
        let deleteError = JSON.stringify(error.response.data.content)
        alertDelete('error',deleteError)
      })
  }
}
export const actAddUser = (user, alertAdd, handleCloseAddUserModal, clearModal)=> {
  return(dispatch => {
    api
      .post('QuanLyNguoiDung/ThemNguoiDung', user)
      .then(result => {
        dispatch(actFetchUserList())
        handleCloseAddUserModal()
        clearModal()
        let addResult = result.data.message;
        alertAdd('success', addResult)
      })
      .catch(error => {
        alertAdd('error',JSON.stringify(error.response.data.content))
      })
  })
}
const actUserManagementRequest = () => ({
  type: actUserManagement.USER_LIST_REQUEST
});

const actUserManagementSuccess = (data) => ({
  type: actUserManagement.USER_LIST_SUCCESS,
  payload: data
});

const actUserManagementFailed = (error) => ({
  type: actUserManagement.USER_LIST_FAILED,
  payload: error
});
