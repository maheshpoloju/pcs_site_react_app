import React from 'react';

import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel2';
import { useTranslation } from 'react-i18next';
import { clients } from './content';
import Shape2 from '../../assets/img/shape2.svg';
import Shape4 from '../../assets/img/shape4.svg';

const options = {
  items: 3,
  nav: false,
  rewind: true,
  autoplay: true,
  autoplayTimeout: 2000,
};

const Clients = () => {
  const { t } = useTranslation('home');
  return (
    <section className="works-area ptb-80 bg-f7fafd">
      <div className="container">
        <div className="section-title">
          <h2>{t(clients.title)}</h2>
          <div className="bar" />
        </div>
        <div className="row m-0">
          <OwlCarousel options={options}>
            {clients.clients.map((item, index) => (
              <div key={`client-${index}`} className="col-lg-12">
                <div className="single-features client active">
                  <div className="text-center">
                    <a href={item.url}>
                      <img src={item.image} height="100" alt={item.alt} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </OwlCarousel>
        </div>
        <div className="hero-content d-flex justify-content-center teambtn">
          <Link to="/clients" className="btn btn-primary">{t(clients.viewAll)}</Link>
        </div>

        <div className="shape8 rotateme">
          <img src={Shape2} alt="shape" />
        </div>
        <div className="shape2 rotateme">
          <img src={Shape2} alt="shape" />
        </div>
        <div className="shape7"><img src={Shape4} alt="shape" /></div>
        <div className="shape4"><img src={Shape4} alt="shape" /></div>
      </div>
    </section>
  );
};

export default Clients;
