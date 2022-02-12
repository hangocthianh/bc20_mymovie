import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import { IoCloseSharp } from "react-icons/io5";
import { useFormik } from "formik";
import Checkbox from '@mui/material/Checkbox';
import { actAddMovie } from '../../modules/actions';
import moment from "moment";

export default function AddMovieModal(props) {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const [imgFile, setImgFile] = useState('')

    const { showAddMovieModal, handleCloseAddMovieModal } = props;

    const dispatch = useDispatch();

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
            let formData = new FormData();
            for (let key in values) {
                if (key !== 'hinhAnh') {
                    formData.append(key, values[key]);
                } else {
                    formData.append('File', values.hinhAnh, values.hinhAnh.name)
                }
            }
            dispatch(actAddMovie(formData));
        },
    })

    const handleChangeDate =()=>{
        let date=new Date(document.getElementById("date").value);
        console.log(moment(date).format('DD/MM/YYYY'))
        formik.setFieldValue('ngayKhoiChieu',moment(date).format('DD/MM/YYYY'))
    }
    const handleChangeSelect = (event) => {
        if (event.target.value === "1") {
            formik.setFieldValue('dangChieu', true);
            formik.setFieldValue('sapChieu', false);
        } else if (event.target.value === "2") {
            formik.setFieldValue('dangChieu', false);
            formik.setFieldValue('sapChieu', true);
        }
    }
    const handleChangeFile = (event) => {
        let file = event.target.files[0];
        if (file.type === 'image/jpeg' || file.type === 'image/jpg' || file.type === 'image/png' || file.type === 'image/gif') {
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (e) => {
                setImgFile(e.target.result)
            }
            formik.setFieldValue('hinhAnh', file)
        }
    }

    return (
        <Modal size="lg" show={showAddMovieModal} onHide={handleCloseAddMovieModal} animation={false}>
            <form onSubmit={formik.handleSubmit} className="needs-validation" id="movieForm">
                <Modal.Header>
                    <Modal.Title>Thêm phim</Modal.Title>
                    <Button
                        variant="secondary"
                        onClick={handleCloseAddMovieModal}
                        style={{ display: 'inherit', alignSelf: 'center' }}
                    ><IoCloseSharp size={20} />
                    </Button>
                </Modal.Header>
                <Modal.Body>
                    <div className='row'>
                        <div className="col-12 mb-3">
                            <label htmlFor="nameMovie">Tên phim</label>
                            <input type="text" className="form-control" id="nameMovie" name="tenPhim" placeholder="Nhập tên phim" onChange={formik.handleChange}
                            />
                            {/* {formik.errors.tenPhim ? <div id="invalidName" className="invalid-form">{formik.errors.tenPhim}
                            </div> : null} */}

                        </div>
                        <div className="col-12 mb-3">
                            <label htmlFor="trailer">Trailer</label>
                            <input type="text" className="form-control" id="trailer"
                                name="trailer" placeholder="Nhập trailer" onChange={formik.handleChange} />
                            <div id="invalidTrailer" className="invalid-form">
                            </div>
                        </div>
                        <div className="col-12 mb-3">
                            <label htmlFor="desc">Mô Tả</label>
                            <textarea className="form-control" id="desc" name="moTa" rows={3} placeholder="Nhập mô tả" onChange={formik.handleChange}
                            />
                            <div id="invalidDesc" className="invalid-form">
                            </div>
                        </div>
                        <div className="col-sm-4 mb-3">
                            <label htmlFor="date">Ngày khởi chiếu</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fa fa-calendar" /></span>
                                </div>
                                <input type="date" name="ngayKhoiChieu" id="date" className="form-control" placeholder="Ngày công chiếu" onChange={handleChangeDate}
                                />
                            </div>

                            <div id="invalidDate" className="invalid-form">
                            </div>
                        </div>
                        <div className="col-sm-4 mb-3">
                            <label htmlFor="status">Tình trạng</label>
                            <select className="custom-select d-block w-100" id="status" onChange={handleChangeSelect}>
                                <option value="0">Chọn tình trạng</option>
                                <option value="1">Đang chiếu</option>
                                <option value="2">Sắp chiếu</option>
                            </select>
                            <div id="invalidStatus" className="invalid-feedback">
                            </div>
                        </div>
                        <div className="col-sm-4 mb-3">
                            <label htmlFor="score">Điểm đánh giá</label>
                            <input type="number" className="form-control" id="score"
                                name="danhGia" placeholder="Nhập điểm đánh giá" onChange={formik.handleChange} />
                            <div id="invalidScore" className="invalid-form">
                            </div>
                        </div>
                        <div className="col-sm-4 mb-3">
                            <label htmlFor="hot">Hot</label>
                            <Checkbox
                                onChange={formik.handleChange}
                                {...label}
                                id="hot"
                                name="hot"
                                sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                            />
                            <div id="invalidHot" className="invalid-feedback">
                            </div>
                        </div>
                        <div className="col-sm-4 mb-3">
                            <div className="form-group">
                                <label htmlFor="img">Hình ảnh</label><br />
                                <input type="file" id="img" name="hinhAnh" onChange={handleChangeFile} accept='image/jpeg, image/png, image/gif, image/jpg' />
                                <img className='mt-2' width={100} src={imgFile} alt={imgFile} />
                            </div>
                        </div>

                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div>
                        {/* <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-warning" id="btnCapNhat">Cập Nhật</button> */}
                        <button type="submit" className="btn btn-warning" id="btnAddMovie">Thêm</button>
                    </div>
                </Modal.Footer>
            </form>
        </Modal>

    )
}



