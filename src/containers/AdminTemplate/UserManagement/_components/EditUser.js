import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import { IoCloseSharp } from "react-icons/io5";

export default function EditUserModal(props) {
  const { showEditUser, handleCloseEditUserModal, user } = props;
  const dispatch = useDispatch();
  const [state, setState] = useState({
    ...user,
    maNhom: 'GP02',
  });

  const EditUser = (e) => {
    e.preventDefault();
    // dispatch(actAddUser(state.values, alertRegister, handleCloseAddUserModal, clearModal));
    console.log(state);
  };
  return (
    <Modal show={showEditUser} onHide={handleCloseEditUserModal}>
      <Modal.Header>
        <Modal.Title>Edit User</Modal.Title>
        <Button
          variant="primary"
          onClick={() => {
            handleCloseEditUserModal();


          }}
          style={{ display: 'inherit', alignSelf: 'center' }}
        ><IoCloseSharp size={20} />
        </Button>
      </Modal.Header>
      <Modal.Body>
        <form className="container" onSubmit={EditUser}>
          <div className="form-group">
            <span>Tài khoản</span>
            <input className="form-control" name="taiKhoan" value={state.taiKhoan} />
          </div>
          <div className="form-group">
            <span>Mật khẩu</span>
            <input className="form-control" name="matKhau" value={state.matKhau} />
          </div>
          <div className="form-group">
            <span>Họ tên</span>
            <input className="form-control" name="hoTen" value={state.hoTen} />
          </div>
          <div className="form-group">
            <span>Email</span>
            <input className="form-control" name="email" value={state.email} />
          </div>
          <div className="form-group">
            <span>Số điện thoại</span>
            <input className="form-control" name="soDt" value={state.soDt} />
          </div>
          <div className="form-group text-center">
            <button type="submit" className="btn btn-success" >Edit</button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  )
}
