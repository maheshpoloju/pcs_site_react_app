import React from 'react';
import { useTranslation } from 'react-i18next';
import BigMonitor from '../../assets/img/services-left-image/big-monitor.png';
import CircleShape from '../../assets/img/services-left-image/cercle-shape.png';
import Creative from '../../assets/img/services-left-image/creative.png';
import Developer from '../../assets/img/services-left-image/developer.png';
import FlowerTop from '../../assets/img/services-left-image/flower-top.png';
import MainPic from '../../assets/img/services-left-image/main-pic.png';
import SmallMonitor from '../../assets/img/services-left-image/small-monitor.png';
import SmallTop from '../../assets/img/services-left-image/small-top.png';
import Table from '../../assets/img/services-left-image/table.png';
import Target from '../../assets/img/services-left-image/target.png';
import { services } from './content';

const Services = () => {
  const { t } = useTranslation('home');
  return (
    <section className="services-area ptb-80 bg-f7fafd">
      <div className="container">
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-lg-6 col-md-12 services-left-image">
            <img
              src={BigMonitor}
              className="wow fadeInDown"
              data-wow-delay="0.6s"
              alt="big-monitor"
            />
            <img
              src={Creative}
              className="wow fadeInUp"
              data-wow-delay="0.6s"
              alt="creative"
            />
            <img
              src={Developer}
              className="wow fadeInLeft"
              data-wow-delay="0.6s"
              alt="developer"
            />
            <img
              src={FlowerTop}
              className="wow zoomIn"
              data-wow-delay="0.6s"
              alt="flower-top"
            />
            <img
              src={SmallMonitor}
              className="wow bounceIn"
              data-wow-delay="0.6s"
              alt="small-monitor"
            />
            <img
              src={SmallTop}
              className="wow fadeInDown"
              data-wow-delay="0.6s"
              alt="small-top"
            />
            <img
              src={Table}
              className="wow zoomIn"
              data-wow-delay="0.6s"
              alt="table"
            />
            <img
              src={Target}
              className="wow fadeInUp"
              data-wow-delay="0.6s"
              alt="target"
            />
            <img
              src={CircleShape}
              className="bg-image rotateme"
              alt="shape"
            />

            <img
              src={MainPic}
              className="wow fadeInUp"
              data-wow-delay="0.6s"
              alt="main-pic"
            />
          </div>

          <div className="col-lg-6 col-md-12 services-content">
            <div className="section-title">
              <h2>{t(services.title)}</h2>
              <div className="bar" />
            </div>

            <div className="row">
              {services.services.map((item, index) => (
                <div key={`service-${index}`} className="col-lg-6 col-md-6">
                  <div className="box">
                    {item.icon}
                    {' '}
                    {t(item.title)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
