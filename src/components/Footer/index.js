/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {
  Mail, MapPin, PhoneCall, ArrowUp,
} from 'react-feather';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Shape1 from '../../assets/img/shape1.png';
import Shape2 from '../../assets/img/shape2.svg';
import Map from '../../assets/img/map.png';
import { footer } from './content';

const offices = {
  USA: {
    addresses: [
      {
        name: 'Perfect and Complete Solutions Inc,',
        address1: '704 Lundy Way,',
        address2: 'Pacifica, CA,',
        address3: '94044',
      },
    ],
    email: 'anu@pcsitspl.com',
    phone: '+ (1) 949 981 4976',
  },
  India: {
    addresses: [
      {
        name: 'PCS IT Solutions Pvt Ltd,',
        address1: '2nd Floor, Godrej Millennium,',
        address2: '9, Koregaon Park Road,',
        address3: 'Pune - 411001',
      },
      {
        name: 'PCS IT Solutions Pvt Ltd,',
        address1: '6th Floor, Pentagon P2,',
        address2: 'Magarpatta City,',
        address3: 'Pune - 411013',
      },
    ],
    email: 'anu@pcsitspl.com',
    phone: '+ (91) 93597 60780',
  },
};

const Footer = () => {
  const { t } = useTranslation('footer');
  return (
    <>
      <footer className="footer-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-footer-widget">
                <h3>{t(footer.title)}</h3>
                <p>{t(footer.subtitle)}</p>
                <ul className="footer-contact-info">
                  {footer.routes.map((route, index) => (
                    <li key={`route-${index}`}>
                      {route.icon}
                      <Link to="/about">{t(route.title)}</Link>
                      <br />
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {Object.keys(offices).map((country, index) => (
              <div key={`office-${index}`} className="col-lg-4 col-md-6">
                <div className="single-footer-widget">
                  <h3>{`Address ${country}`}</h3>
                  <ul className="footer-contact-info">
                    <>
                      {offices[country].addresses.map((item, i) => (
                        <li key={`address-${i}`}>
                          <MapPin />
                          {item.name}
                          <br />
                          {item.address1}
                          <br />
                          {item.address2}
                          <br />
                          {item.address3}
                        </li>
                      ))}
                      <li>
                        <Mail />
                        <a href={`mailto:${offices[country].email}`}>{offices[country].email}</a>
                      </li>
                      <li>
                        <PhoneCall />
                        <a href="#">{offices[country].phone}</a>
                      </li>
                    </>
                  </ul>
                </div>
              </div>
            ))}

            <div className="col-lg-12 col-md-12">
              <div className="copyright-area">
                ©
                {` ${new Date().getFullYear()} `}
                PCS IT Solutions Pvt. Ltd.
                {' '}
                {t(footer.copyright)}
                <br />
              </div>
            </div>
          </div>
        </div>

        <img src={Map} className="map" alt="map" />
        <div className="shape1"><img src={Shape1} alt="shape" /></div>
        <div className="shape8 rotateme">
          <img src={Shape2} alt="shape" />
        </div>
      </footer>

      <div className="go-top"><ArrowUp /></div>
    </>
  );
};

export default Footer;
