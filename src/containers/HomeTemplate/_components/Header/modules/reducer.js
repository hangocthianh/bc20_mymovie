import * as formActions from './constants';

const initialState = {
  loading: false,
  isLogin: false,
  isRegister: false,
  data: null,
  error: null,
}

const headerReducer = (state = initialState, action) => {
  switch (action.type) {
    // Login actions
    case formActions.LOGIN_REQUEST: {
      state.loading = true;
      state.isLogin = false;
      state.data = null;
      state.error = null;
      return { ...state }
    }
    case formActions.LOGIN_SUCCESS: {
      state.loading = false;
      state.isLogin = true;
      state.data = action.payload;
      state.error = null;
      return { ...state }
    }
    case formActions.LOGIN_FAILED: {
      state.loading = false;
      state.isLogin = false;
      state.data = null;
      state.error = action.payload;
      return { ...state }
    }
    // Register actions
    case formActions.REGISTER_REQUEST:{
      state.loading = true;
      state.isRegister = false;
      state.data = null;
      state.error = null;
      return { ...state }
    }
    case formActions.REGISTER_SUCCESS:{
      state.loading = false;
      state.isRegister = true;
      state.data = action.payload;
      state.error = null;
      return { ...state }
    }
    case formActions.REGISTER_FAILED:{
      state.loading = false;
      state.isRegister = false;
      state.data = null;
      state.error = action.payload;
      return { ...state }
    }
    default: return { ...state }
  }
};

export default headerReducer;