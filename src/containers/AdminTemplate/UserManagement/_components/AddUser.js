import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal, Button, Alert } from 'react-bootstrap';
import { IoCloseSharp } from "react-icons/io5";
import { actAddUser } from '../modules/actions';
import Swal from 'sweetalert2';

export default function AddUserModal(props) {
  const { showAddUser, handleCloseAddUserModal } = props;
  const dispatch = useDispatch();
  const [state, setState] = useState({
    values: {
      taiKhoan: '',
      matKhau: '',
      hoTen: '',
      email: '',
      soDt: '',
      maNhom: 'GP02',
      maLoaiNguoiDung: 'KhachHang',
    },
    errors: {
      taiKhoan: '',
      matKhau: '',
      hoTen: '',
      email: '',
      soDt: '',
    },
    formValid: false,
    accValid: false,
    passValid: false,
    emailValid: false,
    phoneValid: false,
    nameValid: false,
  });
  const handleOnchange = (e) => {
    const { name, value } = e.target;
    let message = (value.trim() === "") ? `Vui lòng nhập vào ${name}` : "";
    let { accValid, passValid, emailValid, phoneValid, nameValid } = state;
    switch (name) {
      case 'hoTen': {
        nameValid = message === "" ? true : false;
        break;
      }
      case 'email': {
        emailValid = message === "" ? true : false;
        if (value && !value.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
          emailValid = false;
          message = "Email không hợp lệ";
        }
        break;
      }
      case 'soDt': {
        phoneValid = message === "" ? true : false;
        break;
      }
      case 'taiKhoan': {
        accValid = message === "" ? true : false;
        break;
      }
      case 'matKhau': {
        passValid = message === "" ? true : false;
        break;
      }
      default: break;
    }
    setState({
      values: { ...state.values, [name]: value },
      errors: { ...state.errors, [name]: message },
      accValid,
      passValid,
      emailValid,
      phoneValid,
      nameValid,
      formValid: accValid && passValid && emailValid && phoneValid && nameValid
    })
  };
  const addUser = (e) => {
    e.preventDefault();
    dispatch(actAddUser(state.values, alertRegister, handleCloseAddUserModal, clearModal));
  };
  const clearModal = () => {
    setState({
      values: { ...state.values },
      errors: { ...state.errors },
    });
  }
  // Handle sweetalert2
  const alertRegister = (icon, title) => {
    Swal.fire({
      icon: icon,
      title: title,
      confirmButtonText: 'OK'
    })
  }
  return (
    <Modal show={showAddUser} onHide={handleCloseAddUserModal}>
      <Modal.Header>
        <Modal.Title>Add User</Modal.Title>
        <Button
          variant="primary"
          onClick={() => {
            handleCloseAddUserModal();
            clearModal()
          }}
          style={{ display: 'inherit', alignSelf: 'center' }}
        ><IoCloseSharp size={20} />
        </Button>
      </Modal.Header>
      <Modal.Body>
        <form className="container" onSubmit={addUser}>
          <div className="form-group">
            <span>Tài khoản</span>
            <input className="form-control" name="taiKhoan" onChange={handleOnchange} />
            {state.errors.taiKhoan && (
                <Alert variant="danger">
                  {state.errors.taiKhoan}
                </Alert>
              )}
          </div>
          <div className="form-group">
            <span>Mật khẩu</span>
            <input className="form-control" name="matKhau" onChange={handleOnchange} />
            {state.errors.matKhau && (
                <Alert variant="danger">
                  {state.errors.matKhau}
                </Alert>
              )}
          </div>
          <div className="form-group">
            <span>Họ tên</span>
            <input className="form-control" name="hoTen" onChange={handleOnchange} />
            {state.errors.hoTen && (
                <Alert variant="danger">
                  {state.errors.hoTen}
                </Alert>
              )}
          </div>
          <div className="form-group">
            <span>Email</span>
            <input className="form-control" name="email" onChange={handleOnchange} />
            {state.errors.email && (
                <Alert variant="danger">
                  {state.errors.email}
                </Alert>
              )}
          </div>
          <div className="form-group">
            <span>Số điện thoại</span>
            <input className="form-control" name="soDt" onChange={handleOnchange} />
            {state.errors.soDt && (
                <Alert variant="danger">
                  {state.errors.soDt}
                </Alert>
              )}
          </div>
          <div className="form-group text-center">
            <button type="submit" className="btn btn-success" disabled={!state.formValid}>Add</button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  )
}
