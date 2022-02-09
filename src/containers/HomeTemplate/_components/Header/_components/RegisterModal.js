import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Button, Form, Alert } from 'react-bootstrap';
import { IoCloseSharp } from "react-icons/io5";
import { actRegister } from '../modules/actions'

export default function RegisterModal(props) {
  const { showRegisterModal, handleCloseRegisterModal, handleAlert } = props;
  const error = useSelector(state => state.headerReducer.error);
  const dispatch = useDispatch();


  const [state, setState] = useState({
    values: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      hoTen: "",
      maNhom: "GP02",
      maLoaiNguoiDung: 'KhachHang',
    },
    errors: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      hoTen: ""
    },
    formValid: false,
    accValid: false,
    passValid: false,
    emailValid: false,
    phoneValid: false,
    nameValid: false,
  });

  const handleError = (e) => {
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

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(actRegister(state.values, handleCloseRegisterModal, handleAlert))
  }

  return (
    <>
      <Modal
        show={showRegisterModal}
        onHide={handleCloseRegisterModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header
          bg="dark"
        >
          <Modal.Title>ĐĂNG KÝ</Modal.Title>
          <Button
            variant="primary"
            onClick={() => {
              handleCloseRegisterModal();
              setState({
                values: { ...state.values },
                errors: { ...state.errors },
              });
            }}
            style={{ display: 'inherit', alignSelf: 'center' }}
          ><IoCloseSharp size={20} />
          </Button>
        </Modal.Header>
        <Modal.Body
        >
          <Form onSubmit={handleOnSubmit}>
            {(error && error.data.content)
              ? <Form.Text className="m-0 text-center text-danger">{error && error.data.content}</Form.Text>
              : null
            }
            <Form.Group className="mb-3">
              <Form.Label>Họ tên</Form.Label>
              <Form.Control
                type="text"
                name="hoTen"
                placeholder="nhập họ tên ..."
                onBlur={handleError}
              />
              {state.errors.hoTen && (
                <Alert variant="danger">
                  Vui lòng nhập họ tên
                </Alert>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="nhập email ..."
                onBlur={handleError}
              />
              {state.errors.email && (
                <Alert variant="danger">
                  Vui lòng nhập email
                </Alert>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Số điện thoại</Form.Label>
              <Form.Control
                type="tel"
                name="soDt"
                placeholder="nhập số điện thoại ..."
                onBlur={handleError}
              />
              {state.errors.soDt && (
                <Alert variant="danger">
                  Vui lòng nhập số điện thoại
                </Alert>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Tài Khoản</Form.Label>
              <Form.Control
                type="text"
                name="taiKhoan"
                placeholder="nhập tài khoản ..."
                onBlur={handleError}
              />
              {state.errors.taiKhoan && (
                <Alert variant="danger">
                  Vui lòng nhập tài khoản
                </Alert>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Mật Khẩu</Form.Label>
              <Form.Control
                type="password"
                name="matKhau"
                placeholder="nhập mật khẩu ..."
                onBlur={handleError}
              />
              {state.errors.matKhau && (
                <Alert variant="danger">
                  Vui lòng nhập mật khẩu
                </Alert>
              )}
            </Form.Group>
            <Form.Group className="text-center">
              <Button
                variant="success"
                type="submit"
                disabled={!state.formValid}
              >
                Đăng ký
              </Button>
            </Form.Group>

          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
