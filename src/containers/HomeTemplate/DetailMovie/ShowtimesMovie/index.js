import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Link } from 'react-router-dom';

function ShowtimesMovie(props) {
    const { data } = props;
    const theater = [];
    data?.heThongRapChieu?.map((item, index) => {
        return theater.push(item.tenHeThongRap)
    });
    const [heThongRap, setHeThongRap] = React.useState(theater[0]);

    const renderShowtimes = () => {
        return data?.heThongRapChieu?.map((heThong) => {
            if (heThongRap === heThong.tenHeThongRap) {
                return (
                    <div>
                        <div className='logoTheater py-2'>
                            <img src={heThong.logo} alt={heThong.logo} />
                        </div>
                        {heThong?.cumRapChieu?.map((cumRap, index) => {
                            return <div>
                                <div className='row align-items-center border-top pt-3'>
                                    <div className='col-2'>
                                        <img className='logoRap' src={cumRap.hinhAnh} alt={cumRap.hinhAnh}/>
                                    </div>
                                    <div className='col-10'>
                                        <h3>{cumRap.tenCumRap}</h3>
                                        <p>{cumRap.diaChi}</p>
                                    </div>
                                </div>
                                <div className='row pt-3'>
                                    {cumRap?.lichChieuPhim?.map((lichChieu) => {
                                        return (
                                            <Link className="h5 col-3 pb-3">{new Date(lichChieu.ngayChieuGioChieu).toLocaleTimeString()}</Link>
                                        )
                                    })}
                                </div>
                            </div>
                        })}
                    </div>
                )
            }
        })
    }

    return (
        <div>
            <Autocomplete
                value={heThongRap}
                onChange={(event, newValue) => {
                    setHeThongRap(newValue);
                }}
                id="controllable-states-demo"
                options={theater}
                sx={{ width: 350 }}
                renderInput={(params) => <TextField {...params} label="Chọn hệ thống rạp phim" />}
            />
            {renderShowtimes()}
        </div>
    );
}

export default ShowtimesMovie;