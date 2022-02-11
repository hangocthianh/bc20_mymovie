import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap';
import { IoCloseSharp } from "react-icons/io5";
import { useFormik } from "formik";

export default function AddMovieModal(props) {

    const { showAddMovieModal, handleCloseAddMovieModal } = props;


    const formik = useFormik({
        initialValues: {
            tenPhim: "",
            trailer: "",
            hinhAnh: {},
            moTa: "",
            maNhom: "GP01",
            ngayKhoiChieu: "",
            danhGia: 0,
            hot: false,
            dangChieu: false,
            sapChieu: false,
        },
        onSubmit: (values) => {
            console.log(values)
        }
    })

    // const handleChangeDate=(value)=>{
    //     console.log(value);
    //     let ngayKhoiChieu=moment(value).format('DD/MM/YYYY');
    //     formik.setFieldValue('ngayKhoiChieu',ngayKhoiChieu);

    // }

    // const [state, setState] = useState({
    //     values: {
    //         tenPhim: "",
    //         trailer: "",
    //         hinhAnh: "",
    //         moTa: "",
    //         maNhom: "GP01",
    //         ngayKhoiChieu: "",
    //         danhGia: "",
    //         hot: "",
    //         dangChieu: "",
    //         sapChieu: "",
    //     },
    //     errors: {
    //         tenPhim: "",
    //         trailer: "",
    //         hinhAnh: "",
    //         moTa: "",
    //         ngayKhoiChieu: "",
    //         danhGia: "",
    //         hot: "",
    //         dangChieu: "",
    //         sapChieu: "",
    //     },
    //     formValid: false,
    //     nameValid: false,
    //     trailerValid: false,
    //     imgValid: false,
    //     descValid: false,
    //     dateValid: false,
    //     scoreValid: false,
    //     hotValid: false,
    //     nowShowingValid: false,
    //     comingSoonValid: false,
    // });

    // const handleOnChange = (event) => {
    //     const { name, value } = event.target;
    //     setState(
    //         {
    //             values: { ...state.values, [name]: value },
    //         })
    //     console.log(state)
    // }

    // const handleError = (event) => {
    //     const { name, value } = event.target;
    //     let mess = (value.trim() === "") ? `Vui lòng nhập ${name}` : "";
    //     let { nameValid, trailerValid, imgValid, descValid, dateValid, scoreValid, hotValid, nowShowingValid, comingSoonValid } = state;
    //     switch (name) {
    //         case 'nameMovie': {
    //             nameValid = mess === "" ? true : false;
    //             break;
    //         }
    //         case 'trailer': {
    //             trailerValid = mess === "" ? true : false;
    //             break;
    //         }
    //         case 'desc': {
    //             descValid = mess === "" ? true : false;
    //             break;
    //         }
    //         case 'date': {
    //             dateValid = mess === "" ? true : false;
    //             break;
    //         }
    //         case 'score': {
    //             scoreValid = mess === "" ? true : false;
    //             break;
    //         }
    //         case 'date': {
    //             dateValid = mess === "" ? true : false;
    //             break;
    //         }
    //         case 'date': {
    //             dateValid = mess === "" ? true : false;
    //             break;
    //         }
    //         case 'date': {
    //             dateValid = mess === "" ? true : false;
    //             break;
    //         }
    //         default: break;
    //     }
    //     setState({
    //         values: { ...state.values, [name]: value },
    //         errors: { ...state.errors, [name]: mess },
    //         nameValid,
    //         trailerValid,
    //         imgValid,
    //         descValid,
    //         dateValid,
    //         scoreValid,
    //         hotValid,
    //         nowShowingValid,
    //         comingSoonValid,
    //         formValid: nameValid && trailerValid && imgValid && descValid && dateValid && scoreValid && hotValid && nowShowingValid && comingSoonValid
    //     })
    // }





    return (

        <Modal size="lg" show={showAddMovieModal} onHide={handleCloseAddMovieModal} animation={false}>
            <Modal.Header>
                <Modal.Title>Modal heading</Modal.Title>
                <Button
                    variant="secondary"
                    onClick={handleCloseAddMovieModal}
                    style={{ display: 'inherit', alignSelf: 'center' }}
                ><IoCloseSharp size={20} />
                </Button>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={formik.handleSubmit} className="needs-validation" id="movieForm">
                    <div className='row'>
                        {/* <div className="mb-3">
                            <label htmlFor="movieID">Mã Phim</label>
                            <input type="text" className="form-control" id="movieID" placeholder="Nhập mã" required />
                            <div id="invalidID" className="invalid-form">
                            </div>
                        </div> */}
                        <div className="col-12 mb-3">
                            <label htmlFor="nameMovie">Tên phim</label>
                            <input type="text" className="form-control" id="nameMovie" name="tenPhim" placeholder="Nhập tên phim" onChange={formik.handleChange}
                                />
                            <div id="invalidName" className="invalid-form">
                            </div>
                        </div>
                        <div className="col-12 mb-3">
                            <label htmlFor="trailer">Trailer</label>
                            <input type="text" className="form-control" id="trailer"
                                name="trailer" placeholder="Nhập trailer" onChange={formik.handleChange} />
                            <div id="invalidTrailer" className="invalid-form">
                            </div>
                        </div>
                        <div className="col-sm-4 mb-3">
                            <label htmlFor="date">Ngày khởi chiếu</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fa fa-calendar" /></span>
                                </div>
                                <input type="date" name="ngayKhoiChieu" id="date" className="form-control" placeholder="Ngày công chiếu" onChange={formik.handleChange}
                                 />
                            </div>
                            <div id="invalidDate" className="invalid-form">
                            </div>
                        </div>
                        <div className="col-sm-4 mb-3">
                            <label htmlFor="status">Tình trạng</label>
                            <select className="custom-select d-block w-100" id="status" onChange={formik.handleChange}>
                                <option>Chọn tình trạng</option>
                                <option name="dangChieu">Đang chiếu</option>
                                <option name="sapChieu">Sắp chiếu</option>
                            </select>
                            <div id="invalidStatus" className="invalid-feedback">
                            </div>
                        </div>
                        <div className="col-sm-4 mb-3">
                            <label htmlFor="hot">Hot</label>
                            <input className='p-4 ml-2' type="checkbox" id="hot" name="hot" onChange={formik.handleChange}
                               />
                            <div id="invalidHot" className="invalid-feedback">
                            </div>
                        </div>
                        <div className="col-sm-6 mb-3">
                            <label htmlFor="score">Điểm đánh giá</label>
                            <input type="text" className="form-control" id="score"
                                name="danhGia" placeholder="Nhập điểm đánh giá" onChange={formik.handleChange} />
                            <div id="invalidScore" className="invalid-form">
                            </div>
                        </div>
                        <div className="col-sm-6 mb-3">
                            <div className="form-group">
                                <label htmlFor="img">Hình ảnh</label><br />
                                <input type="file" id="img" name="hinhAnh" onChange={formik.handleChange} />
                            </div>
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="desc">Mô Tả</label>
                        <textarea className="form-control" id="desc" name="moTa" rows={3} defaultValue={""} onChange={formik.handleChange}
                            />
                        <div id="invalidDesc" className="invalid-form">
                        </div>
                    </div>
                    <button type="submit" className="btn btn-warning" id="btnAddMovie">Thêm</button>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <div>
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-warning" id="btnCapNhat">Cập Nhật</button>

                </div>
            </Modal.Footer>
        </Modal>

    )
}




