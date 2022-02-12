import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actFetchUserList, actDeleteUser } from './modules/actions';
import PaginatedItems from './pagination';
import Swal from 'sweetalert2';
import AddUserModal from './_components/AddUser';
import EditUserModal from './_components/EditUser';


export default function UserManagement() {
  const loading = useSelector(state => state.userManagementReducer.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actFetchUserList());
  }, [dispatch]);
  // Delete user
  const handleDeleteUser = (user) => {
    dispatch(actDeleteUser(user, alertRegister));

  }
  // Handle sweetalert2
  const alertRegister = (icon, title) => {
    Swal.fire({
      icon: icon,
      title: title,
      confirmButtonText: 'OK'
    })
  }
  // Handle show Add User Modal
  const [showAddUser, setShowAddUser] = useState(false);
  const handleCloseAddUserModal = () => setShowAddUser(false);
  const handleShowAddUserModal = () => setShowAddUser(true);
  // Handle show Edit User Modal
  const [userItem, setUserItem] = useState({})
  const [showEditUser, setShowEditUser] = useState(false);
  const handleCloseEditUserModal = () => setShowEditUser(false);
  const handleShowEditUserModal = (item) => {
    setShowEditUser(true)
    setUserItem(item)
  };
  return (
    <div className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
      <h3 className="mt-4 mb-3">User Management</h3>
      <div className="row">
        <div className="col-md-10">
          <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" style={{
            border: "1px solid black"
          }} />
        </div>
        <div className="col-md-2">
          <button className="btn btn-secondary">Search</button>
        </div>
      </div>
      <button className="btn btn-success mt-3" onClick={handleShowAddUserModal}>Add User</button>
      {/* Add User Modal */}
      <AddUserModal showAddUser={showAddUser} handleCloseAddUserModal={handleCloseAddUserModal} />
      {/* ************************************************************************* */}
      {/* Edit User Modal */}
      <EditUserModal showEditUser={showEditUser} handleCloseEditUserModal={handleCloseEditUserModal} user={userItem} />
      {/* ************************************************************************* */}
      <div className="row mt-3">
        <div className="col-md-12">
          {loading
            ? <div>Loading...</div>
            : <PaginatedItems
              itemsPerPage={20}
              handleShowEditUserModal={handleShowEditUserModal}
              handleDeleteUser={handleDeleteUser}
            />
          }
        </div>
      </div>
    </div >
  )
}
