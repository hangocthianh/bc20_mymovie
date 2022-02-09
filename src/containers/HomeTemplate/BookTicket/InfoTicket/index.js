import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import { IoCloseSharp } from "react-icons/io5";
import '../style.css';

import LoginModal from 'containers/HomeTemplate/_components/Header/_components/LoginModal';
import RegisterModal from 'containers/HomeTemplate/_components/Header/_components/RegisterModal';

export default function InfoTicket(props) {
    const { data } = props;
    const listCheckedSeat = useSelector(state => state.checkedSeatReducer.listCheckedSeat);
    console.log(listCheckedSeat);

    // Login Modal Toggle
    const [showLogin, setShowLogin] = useState(false);
    const handleShowLoginModal = () => setShowLogin(true);
    const handleCloseLoginModal = () => setShowLogin(false);

    // Register Modal Toggle
    const [showRegisterModal, setShowRegisterModal] = useState(false);
    const handleShowRegisterModal = () => setShowRegisterModal(true);
    const handleCloseRegisterModal = () => setShowRegisterModal(false);

    //Modal choose seat
    const [showChooseSeat, setShowChooseSeat] = useState(false);
    const handleShowChooseSeat = () => setShowChooseSeat(true);

    //thông báo đăt vé
    const notiBookTicket = () => {
        if (listCheckedSeat.length !== 0) {
            if (localStorage.getItem("UserAdmin")) {
                handleShowLoginModal();
            } else {
                handleShowRegisterModal();
            }
        } else {
            handleShowChooseSeat();
        }
    }
    return (
        <div className="shadow p-3 mb-5 bg-white rounded mt-4">
            <table className="table" >
                <thead className="h4 thead-dark">
                    <tr >
                        <th>Tên phim</th>
                        <th>{data && data.tenPhim}</th>
                    </tr>
                </thead>
                <tbody className="infoTicket">
                    <tr>
                        <th>Rạp</th>
                        <td>{data && data.tenCumRap} - {data && data.tenRap}</td>
                    </tr>
                    <tr>

                        <th>Suất chiếu</th>
                        <td>{data && data.gioChieu} - {data && data.ngayChieu}</td>
                    </tr>
                    <tr>
                        <th>Số ghế</th>
                        <td>
                            {listCheckedSeat.map((seat, index) => {
                                return (
                                    <span>{seat.tenGhe}: {seat.giaVe}VND, </span>
                                );
                            })}
                        </td>
                    </tr>
                </tbody>
                <tfoot className="h5">
                    <tr>
                        <td>Tổng tiền</td>
                        <td>{listCheckedSeat.reduce((total, checkedSeat, index) => { return total += checkedSeat.giaVe }, 0)} VND</td>
                    </tr>
                </tfoot>
            </table>
            <div className='text-center'>
                <button className='btn btn-warning px-3'
                    onClick={() => {
                        notiBookTicket()
                    }}
                >Đặt vé</button>
                <LoginModal showLogin={showLogin} handleCloseLoginModal={handleCloseLoginModal} />
                <RegisterModal showRegisterModal={showRegisterModal} handleCloseRegisterModal={handleCloseRegisterModal} />
                {/* modal choose seat*/}
                <Modal show={showChooseSeat} onHide={() => setShowChooseSeat(false)} animation={false}>
                    <Modal.Header>
                        <Modal.Title></Modal.Title>
                        <Button
                            variant="secondary"
                            onClick={() => setShowChooseSeat(false)}
                            style={{ display: 'inherit', alignSelf: 'center' }}
                        ><IoCloseSharp size={20} />
                        </Button>
                    </Modal.Header>
                    <Modal.Body>
                        <div class="alert alert-danger mt-2" role="alert">
                            <strong>HÃY CHỌN GHẾ!</strong>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        </div>
    );
}
