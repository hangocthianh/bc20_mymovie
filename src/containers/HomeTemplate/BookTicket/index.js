import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import { IoCloseSharp } from "react-icons/io5";

import InfoTicket from "./_components/InfoTicket";
import Seats from "./_components/Seats";
import "./style.css";
import { actFetchBookingList } from "./modules/actions";
import { actBookTicket } from "./modules/actions";
import Loading from "components/Loading";
import LoginModal from "../_components/Header/_components/LoginModal";

export default function BookTicket(props) {
  // lấy danh sách phòng vé
  const data = useSelector((state) => state.bookTicketReducer.dataBookingList);
  const loading = useSelector(
    (state) => state.bookTicketReducer.loadingBookingList
  );
  const error = useSelector(
    (state) => state.bookTicketReducer.errorBookingList
  );
  const dispatch = useDispatch();
  useEffect(() => {
    const { maLichChieu } = props.match.params;
    dispatch(actFetchBookingList(maLichChieu));
  }, []);

  // render danh sách ghế
  const renderSeats = () => {
    return data?.danhSachGhe?.map((seat, index) => {
      return <Seats seat={seat} key={index} />;
    });
  };

  // Login Modal Toggle
  const [showLogin, setShowLogin] = useState(false);
  const handleShowLoginModal = () => setShowLogin(true);
  const handleCloseLoginModal = () => setShowLogin(false);

  // danh sách ghế đang chọn
  const listCheckedSeat = useSelector(
    (state) => state.bookTicketReducer.listCheckedSeat
  );

  const [bookTicket, setBookTicket] = useState({
    maLichChieu: 0,
    danhSachVe: [],
  });


  //Modal BookTicket Success
  const [showBookTicketSuccess, setShowBookTicketSuccess] = useState(false);
  const handleShowBookTicketSuccess = () => {
    dispatch(actBookTicket(bookTicket));
        console.log(bookTicket);
    setShowBookTicketSuccess(true);
  };

  //Modal choose seat
  const [showChooseSeat, setShowChooseSeat] = useState(false);
  const handleShowChooseSeat = () => setShowChooseSeat(true);

  //thông báo đăt vé
  const notiBookTicket = () => {
    if (listCheckedSeat.length !== 0) {
      if (localStorage.getItem("UserLogin")) {
        setBookTicket({
            maLichChieu: data && data.thongTinPhim.maLichChieu,
            danhSachVe: listCheckedSeat,
          });
        handleShowBookTicketSuccess();
        
      } else {
        handleShowLoginModal();
      }
    } else {
      handleShowChooseSeat();
    }
  };

  return loading ? (
    <div>
      <Loading />
    </div>
  ) : error ? (
    <div className="text-danger m-5">
      Dự liệu không tồn tại. Vui lòng trở lại trang chủ!!!!!
    </div>
  ) : (
    <div className="bookingTicket">
      <div className="container pt-5">
        <h2 className="h2 border-bottom border-light pb-3 px-5">
          ĐẶT VÉ XEM PHIM: {data && data.thongTinPhim.tenPhim}
        </h2>
        <div className="row mt-5 ">
          <div className="col-lg-7 chooseSeat">
            <div className="d-flex align-items-center flex-column rowSeat">
              <div className="screen mb-5">
                <h3>Màn hình</h3>
              </div>
              <div className="container">{renderSeats()}</div>
              <div className="row noteSeat">
                <div className="col-sm-6 d-flex">
                  <button className="buttonSeat seat mr-2"></button>
                  <p>ghế thường</p>
                </div>
                <div className="col-sm-6 d-flex">
                  <button className="buttonSeat seatVip mr-2"></button>
                  <p>ghế Vip</p>
                </div>
                <div className="col-sm-6 d-flex">
                  <button className="buttonSeat checkedSeat mr-2"></button>
                  <p>ghế đang chọn</p>
                </div>
                <div className="col-sm-6 d-flex">
                  <button className="buttonSeat occupiedSeat mr-2"></button>
                  <p>ghế đã đặt</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <h3 className="text-center mt-5 mt-sm-0">Thông tin vé</h3>
            <div className="shadow p-3 mb-5 bg-white rounded mt-4">
              <InfoTicket data={data && data.thongTinPhim} />
              <div className="text-center">
                <button
                  className="btn btn-warning px-3"
                  onClick={() => {
                    notiBookTicket();
                  }}
                >
                  Đặt vé
                </button>
                <LoginModal
                  showLogin={showLogin}
                  handleCloseLoginModal={handleCloseLoginModal}
                />

                {/* Modal BookTicket Success */}
                <Modal
                  show={showBookTicketSuccess}
                  onHide={() => setShowBookTicketSuccess(false)}
                  animation={false}
                >
                  <Modal.Header>
                    <Modal.Title></Modal.Title>
                    <Button
                      variant="secondary"
                      onClick={() => setShowBookTicketSuccess(false)}
                      style={{ display: "inherit", alignSelf: "center" }}
                    >
                      <IoCloseSharp size={20} />
                    </Button>
                  </Modal.Header>
                  <Modal.Body>
                    <div class="alert alert-success mt-2" role="alert">
                      <strong>ĐẶT VÉ THÀNH CÔNG!</strong>
                    </div>
                  </Modal.Body>
                </Modal>

                {/* Modal choose Seat */}
                <Modal
                  show={showChooseSeat}
                  onHide={() => setShowChooseSeat(false)}
                  animation={false}
                >
                  <Modal.Header>
                    <Modal.Title></Modal.Title>
                    <Button
                      variant="secondary"
                      onClick={() => setShowChooseSeat(false)}
                      style={{ display: "inherit", alignSelf: "center" }}
                    >
                      <IoCloseSharp size={20} />
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
          </div>
        </div>
      </div>
    </div>
  );
}
