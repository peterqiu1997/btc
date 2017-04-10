import React from 'react';
import Helmet from 'react-helmet';
import Picture from '../components/Picture';
import Title from '../components/Title';

const IndexComponent = () => (
  <div className="home">
    <Helmet
      title="Hello World"
      meta={[
        {
          name: 'description',
          content: 'Sample',
        },
        {
          name: 'keywords',
          content: 'sample, something',
        },
      ]}
    />
    <div className="hero">
      <Picture url={'/img/wallpaper.jpg'} />
    </div>
    <div className="section section--about">
      <div className="section__container">
        <Title text="ABOUT US" />
        The Biofuels Initiative began in 2012 as a simple idea:
        turning waste cooking oil from the dining commons into usable biodiesel.
        Two years later, this idea grew into a proposal project written
        by four students in their Technical Communications (CBE 185) course.
      </div>
    </div>
    <div className="section section--partners">
      <div className="section__container">
        <Title text="PARTNERS" />
        The Biofuels Initiative began in 2012 as a simple idea:
        turning waste cooking oil from the dining commons into usable biodiesel.
        Two years later, this idea grew into a proposal project written
        by four students in their Technical Communications (CBE 185) course.
      </div>
    </div>
    <div className="section section--contact">
      <div className="section__container">
        <Title text="CONTACT US" />
        The Biofuels Initiative began in 2012 as a simple idea:
        turning waste cooking oil from the dining commons into usable biodiesel.
        Two years later, this idea grew into a proposal project written
        by four students in their Technical Communications (CBE 185) course.
      </div>
    </div>
  </div>
);

export default IndexComponent;

