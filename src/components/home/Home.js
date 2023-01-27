import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../../assets/images/gloves2.jpg';
import rates2 from '../../assets/images/kijani.png';
import rates3 from '../../assets/images/Revinyo.png';

const Home = () => (
  <div style={{ overflow: 'none' }}>
    <Carousel fade>
      <Carousel.Item>
        <img
          src={image}
          className="d-block w-100 img-fluid"
          alt="stock"
          style={{ height: '100vh' }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={rates2}
          alt="stock2"
          className="d-block w-100 img-fluid"
          style={{ height: '100vh' }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={rates3}
          alt="stock4"
          className="d-block w-100 img-fluid"
          style={{ height: '100vh' }}
        />
      </Carousel.Item>
    </Carousel>
  </div>
);

export default Home;
