import React, { useState } from 'react';
import EditMovieModal from '../EditMovieModal';

export default function Movie(props) {
  const { movie } = props;
  // Modal Edit Movie
  const [showEditMovieModal, setShowEditMovieModal] = useState(false);
  const handleShowEditMovieModal = () => setShowEditMovieModal(true);
  const handleCloseEditMovieModal = () => setShowEditMovieModal(false);

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
        <button className='btn btn-info mr-3 mt-1' onClick={()=>{
          handleShowEditMovieModal()
          }}>Edit</button>
        <EditMovieModal id={movie.maPhim} showEditMovieModal={showEditMovieModal} handleCloseEditMovieModal={handleCloseEditMovieModal} />
        <button className='btn btn-danger mt-1'>Delete</button>
      </td>
    </tr>

  )
}
