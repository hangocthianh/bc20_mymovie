import * as adminAction from './constants';

const initialState = {
  isLogin: false,
  loading: false,
  data: null,
  error: null,
};

const adminLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case adminAction.ADMIN_LOGIN_REQUEST:
      state.isLogin = false;
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };

    case adminAction.ADMIN_LOGIN_SUCCESS:
      state.isLogin = true;
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };

    case adminAction.ADMIN_LOGIN_FAILED:
      state.isLogin = false;
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
};

export default adminLoginReducer;