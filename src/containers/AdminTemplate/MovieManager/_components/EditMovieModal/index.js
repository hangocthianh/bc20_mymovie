import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import { IoCloseSharp } from "react-icons/io5";
import { useFormik } from "formik";
import Checkbox from '@mui/material/Checkbox';
import moment from "moment"

export default function EditMovieModal(props) {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const [imgFile, setImgFile] = useState('')
    const {showEditMovieModal, handleCloseEditMovieModal } = props;


    const data = useSelector(state => state.movieManagerReducer.dataInfoMovie);
    console.log(data);
    const loading = useSelector(state => state.movieManagerReducer.loadingInfoMovie);
    const error = useSelector(state => state.movieManagerReducer.errorInfoMovie);    
    const dispatch = useDispatch();
    // useEffect(() => {
    //     (dispatch(actFetchInfoMovie(id)));
    // }, []);

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
    <Modal size="lg" show={showEditMovieModal} onHide={handleCloseEditMovieModal} animation={false}>
            <form onSubmit={formik.handleSubmit} className="needs-validation" id="movieForm">
                <Modal.Header>
                    <Modal.Title>Ch???nh s???a th??ng tin</Modal.Title>
                    <Button
                        variant="secondary"
                        onClick={handleCloseEditMovieModal}
                        style={{ display: 'inherit', alignSelf: 'center' }}
                    ><IoCloseSharp size={20} />
                    </Button>
                </Modal.Header>
                <Modal.Body>
                    <div className='row'>
                        <div className="col-12 mb-3">
                            <label htmlFor="nameMovie">T??n phim</label>
                            <input type="text" className="form-control" id="nameMovie" name="tenPhim" placeholder="Nh???p t??n phim" onChange={formik.handleChange}
                            />
                            <div id="invalidName" className="invalid-form"></div>
                        </div>
                        <div className="col-12 mb-3">
                            <label htmlFor="trailer">Trailer</label>
                            <input type="text" className="form-control" id="trailer"
                                name="trailer" placeholder="Nh???p trailer" onChange={formik.handleChange} />
                            <div id="invalidTrailer" className="invalid-form">
                            </div>
                        </div>
                        <div className="col-12 mb-3">
                            <label htmlFor="desc">M?? T???</label>
                            <textarea className="form-control" id="desc" name="moTa" rows={3} placeholder="Nh???p m?? t???" onChange={formik.handleChange}
                            />
                            <div id="invalidDesc" className="invalid-form">
                            </div>
                        </div>
                        <div className="col-sm-4 mb-3">
                            <label htmlFor="date">Ng??y kh???i chi???u</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fa fa-calendar" /></span>
                                </div>
                                <input type="date" name="ngayKhoiChieu" id="date" className="form-control" placeholder="Ng??y c??ng chi???u" onChange={handleChangeDate}
                                />
                            </div>

                            <div id="invalidDate" className="invalid-form">
                            </div>
                        </div>
                        <div className="col-sm-4 mb-3">
                            <label htmlFor="status">T??nh tr???ng</label>
                            <select className="custom-select d-block w-100" id="status" onChange={handleChangeSelect}>
                                <option value="0">Ch???n t??nh tr???ng</option>
                                <option value="1">??ang chi???u</option>
                                <option value="2">S???p chi???u</option>
                            </select>
                            <div id="invalidStatus" className="invalid-feedback">
                            </div>
                        </div>
                        <div className="col-sm-4 mb-3">
                            <label htmlFor="score">??i???m ????nh gi??</label>
                            <input type="number" className="form-control" id="score"
                                name="danhGia" placeholder="Nh???p ??i???m ????nh gi??" onChange={formik.handleChange} />
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
                                <label htmlFor="img">H??nh ???nh</label><br />
                                <input type="file" id="img" name="hinhAnh" onChange={handleChangeFile} accept='image/jpeg, image/png, image/gif, image/jpg' />
                                <img className='mt-2' width={100} src={imgFile} alt={imgFile} />
                            </div>
                        </div>

                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div>
                        <button type="submit" className="btn btn-warning" id="btnAddMovie">C???p nh???t</button>
                    </div>
                </Modal.Footer>
            </form>
        </Modal>
  )
}
