import * as adminAction from './constants';

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const adminLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case adminAction.ADMIN_LOGIN_REQUEST:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };

    case adminAction.ADMIN_LOGIN_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };

    case adminAction.ADMIN_LOGIN_FAILED:
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export default adminLoginReducer;