import *as actHomePage from "./constants";
const initialState = {
  bannerLoad: false,
  listMovieLoad: false,
  dataBanner: null,
  dataListMovies: null,
  error: null,
};

const homePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case actHomePage.BANNER_MOVIE_REQUEST: {
      state.bannerLoad = true;
      state.dataBanner = null;
      state.error = null;

      return { ...state }
    }
    case actHomePage.BANNER_MOVIE_SUCCESS: {
      state.bannerLoad = false;
      state.dataBanner = action.payload;
      state.error = null;

      return { ...state }
    }
    case actHomePage.BANNER_MOVIE_FAILED: {
      state.bannerLoad = false;
      state.dataBanner = null;
      state.error = action.payload;
      return { ...state }
    }

    case actHomePage.LIST_MOVIE_REQUEST:
      state.listMovieLoad = true;
      state.dataListMovies = null;
      state.error = null;
      return { ...state }

    case actHomePage.LIST_MOVIE_SUCCESS: {
      state.listMovieLoad = false;
      state.dataListMovies = action.payload;
      state.error = null;

      return { ...state }
    }

    case actHomePage.LIST_MOVIE_FAILED: {
      state.listMovieLoad = false;
      state.dataListMovies = null;
      state.error = action.payload;
      return { ...state }
    }

    default: return { ...state }
  }
};

export default homePageReducer;