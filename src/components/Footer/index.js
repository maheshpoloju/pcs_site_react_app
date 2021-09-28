/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {
  Mail, MapPin, PhoneCall, ArrowUp,
} from 'react-feather';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { BsFillAspectRatioFill } from "react-icons/bs";
import { BsPipFill } from "react-icons/bs";
import {BsPieChartFill} from "react-icons/bs";
import {BsFile} from "react-icons/bs";



import { footer } from './content';
import './demo.css';

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
     <footer id="footer" class="footer" className='pt-5 mt-5'>
  <div class="container">
    <div class="row gy-4">
      <div class="col-lg-3 col-md-6 footer-info">
      <div className="single-footer-widget">
                <h3>{t(footer.title)}</h3>
                <p>{t(footer.subtitle)}</p>
                <ul className="footer-contact-info">
                  {footer.routes.map((route, index) => (
                    <li key={`route-${index}`}>
                      {route.icon}
                      <Link to="/">{t(route.title)}</Link>
                      <br />
                    </li>
                  ))}
                </ul>
              </div>
      </div>

      <div class="col-lg-3 col-6 footer-info">
      <div className="single-footer-widget">
                 <h4 className='servicesheading'>Our Services</h4>
        <ul className='footer-contact-info'>
          <li><BsFillAspectRatioFill className='mt-2'/><a href="#">Web Design</a></li>
          <li><BsPipFill className='mt-2'/><a href="#" className='links'>Web Development</a></li>
          <li><BsPieChartFill className='mt-2'/><a href="#" className='links'>Product Management</a></li>
          <li><BsFile className='mt-2'/><a href="#" className='links'>Android Apps Development</a></li>
          <li><BsFile className='mt-2'/><a href="#" className='links'> iOS Apps Development</a></li>
         
          
        </ul>
        
              </div>
      </div>

      

      {Object.keys(offices).map((country, index) => (
              <div key={`office-${index}`} className="col-lg-3 col-md-6">
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

    </div>
  </div>


<div class="container">
 
  <div class="credits"  className='text-center mt-4 mb-5'>
               ©
                {` ${new Date().getFullYear()} `}
                PCS IT Solutions Pvt. Ltd.
                {' '}
                {t(footer.copyright)}
                
                
                
                <div className="shape8 rotateme">
                 
                </div>
  </div>
</div>

</footer>

      <div className="go-top"><ArrowUp /></div>
    </>
  );
};

export default Footer;

