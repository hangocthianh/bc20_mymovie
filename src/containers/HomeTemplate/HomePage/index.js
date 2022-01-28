import React from 'react';
import HomeCarousel from 'containers/HomeTemplate/_components/Carousel';
import Section from 'containers/HomeTemplate/_components/Section';
import Event from 'containers/HomeTemplate/_components/Events'

export default function HomePage() {
  return (
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
