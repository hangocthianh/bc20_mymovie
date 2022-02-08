import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Button, Form, Alert } from 'react-bootstrap';
import { IoCloseSharp } from "react-icons/io5";
import { actLogin } from '../modules/actions'

export default function LoginModal(props) {
  const { showLogin, handleCloseLoginModal } = props;
  const dispatch = useDispatch();
  const error = useSelector(state => state.headerReducer.error);

  const [state, setState] = useState({
    values: {
      taiKhoan: "",
      matKhau: ""
    },
    errors: {
      taiKhoan: "",
      matKhau: ""
    },
    formValid: false,
    nameValid: false,
    passValid: false
  });

  const handleError = (e) => {
    const { name, value } = e.target;
    let message = (value.trim() === "") ? `Vui lòng nhập vào ${name}` : "";
    let { nameValid, passValid } = state;
    switch (name) {
      case 'taiKhoan': {
        nameValid = message === "" ? true : false;
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
      nameValid,
      passValid,
      formValid: nameValid && passValid
    })
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(actLogin(state.values))
  }
  return (
    <>
      <Modal
        show={showLogin}
        onHide={handleCloseLoginModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>ĐĂNG NHẬP</Modal.Title>
          <Button
            variant="primary"
            onClick={() => {
              handleCloseLoginModal();
              setState({
                values: { ...state.values },
                errors: { ...state.errors },
              });

            }}
            style={{ display: 'inherit', alignSelf: 'center' }}
          ><IoCloseSharp size={20} />
          </Button>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleOnSubmit}>
            {(error && error.data.content)
              ? <Form.Text className="m-0 text-center text-danger">{error && error.data.content}</Form.Text>
              : null
            }
            <Form.Group className="mb-3" controlId="formGroupEmail">
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
            <Form.Group className="mb-3" controlId="formGroupPassword">
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
                Đăng nhập
              </Button>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
