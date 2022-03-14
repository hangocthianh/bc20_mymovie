import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { actFetchMovieList } from './modules/actions'
import "./style.css"
import AddMovieModal from "./_components/AddMovieModal"
import Movie from './_components/Movie'


export default function MovieManager() {

    const data = useSelector(state => state.movieManagerReducer.data);
    const dispatch = useDispatch();
    useEffect(() => {
        (dispatch(actFetchMovieList()));
    }, []);

    // Modal Add Movie
    const [showAddMovieModal, setShowAddMovieModal] = useState(false);
    const handleShowAddMovieModal = () => setShowAddMovieModal(true);
    const handleCloseAddMovieModal = () => setShowAddMovieModal(false);

    const renderMovieList = () => {
        return data?.map((movie, index) => {
            return (
                <Movie movie={movie} key={index}/>
            )
        })
    }

    return (
        <div className='container-fluid'>
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                <h2 className='my-3'>Danh Sách Phim</h2>
                {/* Button modal */}
                <div className="row">
                    <div className="col-8">
                        <button
                            id="btnAdd"
                            type="button"
                            className="btn btn-warning mb-3"
                            onClick={() => {
                                handleShowAddMovieModal()
                            }}
                        >
                            Thêm Phim
                        </button>
                        <AddMovieModal showAddMovieModal={showAddMovieModal} handleCloseAddMovieModal={handleCloseAddMovieModal}/>
                    </div>
                    <div className="col-4">
                        <div className="form-group row">
                            <label htmlFor="tenPhim" className=" col-form-label">Tìm kiếm</label>
                            <div className="col-sm-9">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Tên phim" id="searchName" />
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="btnTimNV"><i className="fa fa-search" /></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="table-responsive table-striped moviesTable">
                    <table className="table table-striped table-sm">
                        <thead>
                            <tr className="bg-warning text-white text-center">
                                <th>Mã</th>
                                <th>Tên phim</th>
                                <th>Hình ảnh</th>
                                <th>Mô tả</th>
                                <th>Tùy chỉnh</th>
                            </tr>
                        </thead>
                        <tbody id="tbodyMovies">
                            {renderMovieList()}
                        </tbody>
                    </table>
                </div>
            </main>

        </div>
    )
}
