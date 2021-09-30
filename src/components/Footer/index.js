<<<<<<< HEAD
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';







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

  return (
    <>
     <footer id="footer" class="footer" className='pt-5 mt-5'>
  <div class="container">
    <div class="row gy-4">
      <div class="col-lg-3 col-md-6 footer-info">
      <div className="single-footer-widget">
            
              </div>
      </div>

      <div class="col-lg-3 col-6 footer-info">
     
      </div>

      

      {Object.keys(offices).map((country, index) => (
              <div key={`office-${index}`} className="col-lg-3 col-md-6">
                <div className="single-footer-widget">
                  
                </div>
              </div>
            ))}

    </div>
  </div>


<div class="container">
 
  <div class="credits"  className='text-center mt-4 mb-5'>
             
                
                
                <div className="shape8 rotateme">
                 
                </div>
  </div>
</div>

</footer>

      
    </>
  );
};

export default Footer;

=======
import React from 'react'
import { footer } from './content'

function Footer() {
	const year = new Date().getFullYear()
	console.log(year)
	return (
		<footer className='footer-area'>
			<div className='container'>
				<div className='row'>
					<div className='footer clear container'>{footer.copyright}</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
>>>>>>> 9255c419e38a8a4ca28f2aac7f494d41233cc6b5
