import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actFetchDataHomePage } from './modules/actions';
import HomeCarousel from 'containers/HomeTemplate/_components/Carousel';
import Section from 'containers/HomeTemplate/_components/Section';
import Event from 'containers/HomeTemplate/_components/Events';
import Loading from '../../../components/Loading';

export default function HomePage(props) {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actFetchDataHomePage());
  }, [dispatch]);

  const bannerLoad = useSelector(state => state.homePageReducer.bannerLoad);
  const listMovieLoad = useSelector(state => state.homePageReducer.listMovieLoad);
  const networkError = useSelector(state => state.homePageReducer.error)
  return (
    (bannerLoad && listMovieLoad)
      ? <div><Loading /></div>
      : (networkError && networkError.message === "Network Error")
        ? <div className="p-2">
          <div className="card">
          <div className="card-header text-danger">
            Error !!!
          </div>
          <div className="card-body">
            <h5 className="card-title text-warning">{networkError && networkError.message}</h5>
            <p className="card-text">Vui lòng kiểm tra lại kết nối internet của bạn !</p>
            <img src="img/errorNet.png" alt="..." />
          </div>
        </div>
        </div>

        :
        <>
          <HomeCarousel />
          {/* Movie Selection */}
          <Section width={250} btnDisabled={false} headerName={"movie-selection"}></Section>
          {/* Coming Soon */}
          <Section width={250} btnDisabled={true} headerName={"coming-soon"}></Section>
          {/* Event */}
          <Event></Event>
        </>
  )
}
