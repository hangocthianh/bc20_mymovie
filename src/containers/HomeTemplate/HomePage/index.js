import React from 'react';
import HomeCarousel from 'containers/HomeTemplate/_components/Carousel';
import Section from 'containers/HomeTemplate/_components/Section';

export default function HomePage() {
  return (
    <>
      <HomeCarousel />
      <>
      {/* Movie Selection */}
        <div style={{
          background: 'url("./img/bg_h3_line.jpg") repeat-x scroll left center rgba(0, 0, 0, 0)',
          height: '60px',
          textAlign: 'center',
          width: '100%'
        }}>
          <h2 style={{
            background: 'url("./img/h3_movie_selection.gif") no-repeat scroll center center / 406px 41px #FDFCF0',
            display: 'inline-block',
            width: '425px',
            height: '60px',
            textIndent: '-99999px'
          }}>Movie selection</h2>
        </div>
        <Section></Section>
        {/* Coming Soon */}
        {/* Event */}
      </>
    </>
  )
}
