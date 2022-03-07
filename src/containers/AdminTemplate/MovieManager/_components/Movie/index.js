import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import EditMovieModal from '../EditMovieModal';
import { actFetchInfoMovie } from '../../modules/actions';

export default function Movie(props) {
  const { movie } = props;
  // Modal Edit Movie
  const dispatch = useDispatch();
  const [showEditMovieModal, setShowEditMovieModal] = useState(false);
  const handleShowEditMovieModal = () => setShowEditMovieModal(true);
  const handleCloseEditMovieModal = () => setShowEditMovieModal(false);

  // useEffect(() => {
  //   (dispatch(actFetchInfoMovie(movie.maPhim)));
  // }, []);
  return (
    <tr className='text-center mt-5 listMovie'>
      <td>{movie.maPhim}</td>
      <td>{movie.tenPhim}</td>
      <td >
        <img className='w-25' src={movie.hinhAnh} alt={movie.hinhAnh} />
      </td>
      <td >
        <p className='descMovie'>{movie.moTa}</p>
      </td>
      <td className='w-25'>
        <button className='btn btn-info mr-3 mt-1' onClick={() => {
          
          dispatch(actFetchInfoMovie(movie.maPhim))
          handleShowEditMovieModal()
        }}>Edit</button>
        <EditMovieModal showEditMovieModal={showEditMovieModal} handleCloseEditMovieModal={handleCloseEditMovieModal} />
        <button className='btn btn-danger mt-1'>Delete</button>
      </td>
    </tr>

  )
}
