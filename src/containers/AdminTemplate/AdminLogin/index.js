import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import {actAdminLogin} from './modules/actions'

const Form = styled.form`
  width: 50%;
  @media (max-width: 991px) {
    width: 75%;
  };
  @media (max-width: 575px) {
    width: 100%;
  };
`

export default function AdminLogin(props) {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.adminLoginReducer.error);
  const [state, setState] = useState({
    taiKhoan: "",
    matKhau: ""
  })

  const handleOnchange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(actAdminLogin(state, props.history))
  };

  const noti = () => {
    return (
      error && <div className="alert alert-danger">{error.response.data.content}</div>
    );
  };

  return (
    <div style={{
      height: '100vh',
      width: '100vw',
      backgroundImage: 'url("./img/adminLogin.jpg")',
      backgroundSize: 'cover',
      paddingTop: '50px',
    }}>
      <div className="container">
        <Form
          className="m-auto"
          onSubmit={handleLogin}
          style={{
            border: '1px solid #000000',
            borderRadius: '5px',
            padding: '20px 40px'
          }}
        >
          <fieldset >
            <legend style={{ fontWeight: 'bold' }}>Admin Login</legend>
            {noti()}
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                name="taiKhoan"
                placeholder="Enter username..."
                required
                onChange={handleOnchange}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="text"
                className="form-control"
                name="matKhau"
                placeholder="Enter password..."
                required
                onChange={handleOnchange}
              />
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-success">
                Login
              </button>
            </div>
          </fieldset>
        </Form>
      </div>
    </div>
  )
}
