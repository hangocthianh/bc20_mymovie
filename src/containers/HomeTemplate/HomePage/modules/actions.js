import api from "utils/apiUtils";
import *as actHomePage from "./constants";

export const actFetchDataHomePage = () => {
  return (dispatch) => {
    // Get banner
    dispatch(actBannerMovieRequest());
    api
      .get('QuanLyPhim/LayDanhSachBanner')
      .then(result => {
        dispatch(actBannerMovieSuccess(result.data.content))
      })
      .catch(error => {
        dispatch(actBannerMovieFailed(error))
      })
    // Get list movies
    dispatch(actListMovieRequest());
    api
      .get('QuanLyPhim/LayDanhSachPhim?maNhom=GP02')
      .then(result => {
        dispatch(actListMovieSuccess(result.data.content))
      })
      .catch(error => {
        dispatch(actListMovieFailed(error))
      })
  }
};
// Banner actions
const actBannerMovieRequest = () => ({
  type: actHomePage.BANNER_MOVIE_REQUEST
});

const actBannerMovieSuccess = (data) => ({
  type: actHomePage.BANNER_MOVIE_SUCCESS,
  payload: data,
});

const actBannerMovieFailed = (error) => ({
  type: actHomePage.BANNER_MOVIE_FAILED,
  payload: error,
})
// List movies actions
const actListMovieRequest = () => ({
  type: actHomePage.LIST_MOVIE_REQUEST
});

const actListMovieSuccess = (data) => ({
  type: actHomePage.LIST_MOVIE_SUCCESS,
  payload: data,
});

const actListMovieFailed = (error) => ({
  type: actHomePage.LIST_MOVIE_FAILED,
  payload: error,
})

