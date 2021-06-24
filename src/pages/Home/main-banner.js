import React from 'react';
import { useTranslation } from 'react-i18next';
import Man from '../../assets/img/banner-image/man.png';
import Code from '../../assets/img/banner-image/code.png';
import Carpet from '../../assets/img/banner-image/carpet.png';
import Bin from '../../assets/img/banner-image/bin.png';
import Book from '../../assets/img/banner-image/book.png';
import Desktop from '../../assets/img/banner-image/dekstop.png';
import Dot from '../../assets/img/banner-image/dot.png';
import FlowerTopBig from '../../assets/img/banner-image/flower-top-big.png';
import FlowerTop from '../../assets/img/banner-image/flower-top.png';
import Keyboard from '../../assets/img/banner-image/keyboard.png';
import Pen from '../../assets/img/banner-image/pen.png';
import Table from '../../assets/img/banner-image/table.png';
import TeaCup from '../../assets/img/banner-image/tea-cup.png';
import Headphone from '../../assets/img/banner-image/headphone.png';
import MainPic from '../../assets/img/banner-image/main-pic.png';
import Shape1 from '../../assets/img/shape1.png';
import Shape2 from '../../assets/img/shape2.svg';
import Shape3 from '../../assets/img/shape3.svg';
import Shape4 from '../../assets/img/shape4.svg';
import Shape5 from '../../assets/img/shape5.png';
import { main } from './content';

const MainBanner = () => {
  const { t } = useTranslation('home');
  return (
    <div className="main-banner">
      <div className="d-table">
        <div className="d-table-cell">
          <div className="container">
            <div className="row h-100 justify-content-center align-items-center">
              <div className="col-lg-5">
                <div className="hero-content">
                  <h1>{t(main.title)}</h1>
                  <h4>{t(main.subtitle)}</h4>
                </div>
              </div>

              <div className="col-lg-6 offset-lg-1">
                <div className="banner-image">
                  <img
                    src={Man}
                    className="wow fadeInDown"
                    data-wow-delay="0.6s"
                    alt="man"
                  />
                  <img
                    src={Code}
                    className="wow fadeInUp"
                    data-wow-delay="0.6s"
                    alt="code"
                  />
                  <img
                    src={Carpet}
                    className="wow fadeInLeft"
                    data-wow-delay="0.6s"
                    alt="carpet"
                  />
                  <img
                    src={Bin}
                    className="wow zoomIn"
                    data-wow-delay="0.6s"
                    alt="bin"
                  />
                  <img
                    src={Book}
                    className="wow bounceIn"
                    data-wow-delay="0.6s"
                    alt="book"
                  />
                  <img
                    src={Desktop}
                    className="wow fadeInDown"
                    data-wow-delay="0.6s"
                    alt="dekstop"
                  />
                  <img
                    src={Dot}
                    className="wow zoomIn"
                    data-wow-delay="0.6s"
                    alt="dot"
                  />
                  <img
                    src={FlowerTopBig}
                    className="wow fadeInUp"
                    data-wow-delay="0.6s"
                    alt="flower-top-big"
                  />
                  <img
                    src={FlowerTop}
                    className="wow rotateIn"
                    data-wow-delay="0.6s"
                    alt="flower-top"
                  />
                  <img
                    src={Keyboard}
                    className="wow fadeInUp"
                    data-wow-delay="0.6s"
                    alt="keyboard"
                  />
                  <img
                    src={Pen}
                    className="wow zoomIn"
                    data-wow-delay="0.6s"
                    alt="pen"
                  />
                  <img
                    src={Table}
                    className="wow zoomIn"
                    data-wow-delay="0.6s"
                    alt="table"
                  />
                  <img
                    src={TeaCup}
                    className="wow fadeInLeft"
                    data-wow-delay="0.6s"
                    alt="tea-cup"
                  />
                  <img
                    src={Headphone}
                    className="wow rollIn"
                    data-wow-delay="0.6s"
                    alt="headphone"
                  />

                  <img
                    src={MainPic}
                    className="wow fadeInUp"
                    data-wow-delay="0.6s"
                    alt="main-pic"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="shape1"><img src={Shape1} alt="shape" /></div>
      <div className="shape2 rotateme"><img src={Shape2} alt="shape" /></div>
      <div className="shape3"><img src={Shape3} alt="shape" /></div>
      <div className="shape4"><img src={Shape4} alt="shape" /></div>
      <div className="shape5"><img src={Shape5} alt="shape" /></div>
      <div className="shape6 rotateme"><img src={Shape4} alt="shape" /></div>
      <div className="shape7"><img src={Shape4} alt="shape" /></div>
      <div className="shape8 rotateme"><img src={Shape2} alt="shape" /></div>
    </div>
  );
};

export default MainBanner;
