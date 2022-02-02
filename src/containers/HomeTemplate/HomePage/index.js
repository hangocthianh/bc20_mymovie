import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actFetchDataHomePage } from './modules/actions';
import HomeCarousel from 'containers/HomeTemplate/_components/Carousel';
import Section from 'containers/HomeTemplate/_components/Section';
import Event from 'containers/HomeTemplate/_components/Events';

export default function HomePage(props) {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actFetchDataHomePage());
  }, [dispatch]);

  const bannerLoad = useSelector(state => state.homePageReducer.bannerLoad);
  const listMovieLoad = useSelector(state => state.homePageReducer.listMovieLoad);
  return (
    (bannerLoad && listMovieLoad) ?
      <div>Loading...</div> :
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
