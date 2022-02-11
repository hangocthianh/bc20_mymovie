import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { actFetchMovieList } from './modules/actions'
import "./style.css"
import AddMovieModal from "./_components/AddMovieModal"


export default function MovieManager() {

    const data = useSelector(state => state.movieListReducer.data);
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
                <tr key={index} className='text-center mt-5 listMovie'>
                    <td>{index + 1}</td>
                    <td>{movie.maPhim}</td>
                    <td>{movie.tenPhim}</td>
                    <td >
                        <img className='w-25' src={movie.hinhAnh} alt={movie.hinhAnh} />
                    </td>
                    <td >
                        <p className='descMovie'>{movie.moTa}</p>
                    </td>
                    <td className='w-25'>
                        <button className='btn btn-info mr-3 mt-1'>Edit</button>
                        <button className='btn btn-danger mt-1'>Delete</button>
                    </td>
                </tr>
            )
        })
    }

    return (
        <div className='container-fluid'>
            <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                <div className="sidebar-sticky pt-3">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link" to="/dashboard">
                                <i className="fa fa-home mr-1" />
                                Dashboard <span className="sr-only">(current)</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link" to="/movie-manager">
                                <i className="fa fa-film mr-1" />
                                Movies List
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link" to="/user-list">
                                <i className="fa fa-user mr-1" />
                                Users List
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
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
                            {/* <label htmlFor="tenPhim" className="col-sm-2 col-form-label">Show</label> */}
                            <div className="col-sm-10">
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
                                <th>STT</th>
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