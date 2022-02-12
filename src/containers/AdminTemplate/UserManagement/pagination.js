import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';
import styled from 'styled-components';
import { FiEdit2, FiTrash2 } from "react-icons/fi";

const MyPaginate = styled(ReactPaginate).attrs({
  activeClassName: 'active',
})`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  list-style-type: none;
  padding: 0 5rem;
  li a {
    border-radius: 7px;
    padding: 0.1rem 1rem;
    border: gray 1px solid;
    cursor: pointer;
  }
  li.previous a,
  li.next a,
  li.break a {
    border-color: transparent;
  }
  li.active a {
    background-color: #0366d6;
    border-color: transparent;
    color: white;
    min-width: 32px;
  }
  li.disabled a {
    color: grey;
  }
  li.disable,
  li.disabled a {
    cursor: default;
  }
`;

function Items({ currentItems, handleShowEditUserModal, itemOffset, handleDeleteUser }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item, index) => (
          <tr key={index}>
            <th scope="row" className="align-middle text-center">{index + 1 + itemOffset}</th>
            <td className="align-middle text-center">{item.taiKhoan}</td>
            <td className="align-middle text-center">{item.matKhau}</td>
            <td className="align-middle text-center">{item.hoTen}</td>
            <td className="align-middle text-center">{item.email}</td>
            <td className="align-middle text-center">{item.soDt}</td>
            <td className="align-middle text-center">
              <button className="btn btn-primary" onClick={()=>{handleShowEditUserModal(item)}}>
                <FiEdit2 />
              </button>
              <button className="btn btn-danger" onClick ={()=> {handleDeleteUser(item)}}>
                <FiTrash2 />
              </button>
            </td>
          </tr>
        ))}
    </>
  );
}

export default function PaginatedItems({ itemsPerPage, handleShowEditUserModal, handleDeleteUser }) {
  const items = useSelector(state => state.userManagementReducer.data);
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);

  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items?.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items?.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <table className="table px-3 table-bordered">
        <thead>
          <tr>
            <th className="text-center" scope="col">STT</th>
            <th className="text-center" scope="col">Account</th>
            <th className="text-center" scope="col">Password</th>
            <th className="text-center" scope="col">Full Name</th>
            <th className="text-center" scope="col">Email</th>
            <th className="text-center" scope="col">Phone number</th>
            <th className="text-center" scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <Items 
            currentItems={currentItems} 
            itemOffset={itemOffset} 
            handleShowEditUserModal={handleShowEditUserModal} 
            handleDeleteUser={handleDeleteUser}
          />
        </tbody>
      </table>
      <MyPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
}