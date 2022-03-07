import api from "utils/apiUtils";
import *as ActionType from "./constants.js";

// act lấy danh sach phim
export const actFetchMovieList = ()=>{
    return (dispatch)=>{
        dispatch(actMovieListRequest());
        api
            .get('QuanLyPhim/LayDanhSachPhim?maNhom=GP01')
            .then((result)=>{
                dispatch(actMovieListSuccess(result.data.content))
            })
            .catch((error)=>{
                dispatch(actMovieListFailed(error))
                console.log(error)
            })
    }
}
const actMovieListRequest = ()=>{
    return {
        type: ActionType.MOVIE_LIST_REQUEST,
    }
}
const actMovieListSuccess=(data)=>{
    return {
        type: ActionType.MOVIE_LIST_SUCCESS,
        payload: data,
    }
}
const actMovieListFailed=(error)=>{
    return {
        type: ActionType.MOVIE_LIST_FAILED,
        payload: error,
    }
}

// act thêm phim
export const actAddMovie = (formData)=>{
    return (dispatch)=>{
        dispatch(actAddMovieRequest());
        api
            .post('QuanLyPhim/ThemPhimUploadHinh', formData)
            .then((result)=>{
                alert("Thêm phim thành công!")
                dispatch(actAddMovieSuccess(result.data.content))
            })
            .catch((error)=>{
                dispatch(actAddMovieFailed(error))
            })
    }
}
const actAddMovieRequest = ()=>{
    return {
        type: ActionType.ADD_MOVIE_REQUEST,
    }
}
const actAddMovieSuccess=(data)=>{
    return {
        type: ActionType.ADD_MOVIE_SUCCESS,
        payload: data,
    }
}
const actAddMovieFailed=(error)=>{
    return {
        type: ActionType.ADD_MOVIE_FAILED,
        payload: error,
    }
}


// act lấy thông tin phim
export const actFetchInfoMovie = (maPhim)=>{
    return (dispatch)=>{
        dispatch(actInfoMovieRequest());
        api
            .get(`QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`)
            .then((result)=>{
                dispatch(actInfoMovieSuccess(result.data.content))
            })
            .catch((error)=>{
                dispatch(actInfoMovieFailed(error))
                // console.log(error.response?.data)
            })
    }
}
const actInfoMovieRequest = ()=>{
    return {
        type: ActionType.INFO_MOVIE_REQUEST,
    }
}
const actInfoMovieSuccess=(data)=>{
    return {
        type: ActionType.INFO_MOVIE_SUCCESS,
        payload: data,
    }
}
const actInfoMovieFailed=(error)=>{
    return {
        type: ActionType.INFO_MOVIE_FAILED,
        payload: error,
    }
}