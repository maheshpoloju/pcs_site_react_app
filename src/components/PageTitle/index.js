import React from 'react';
import Shape1 from '../../assets/img/shape1.png';
import Shape2 from '../../assets/img/shape2.svg';
import Shape3 from '../../assets/img/shape3.svg';
import Shape4 from '../../assets/img/shape4.svg';
import Shape5 from '../../assets/img/shape5.png';

const PageTitle = ({ title, subtitle }) => (
  <div className="page-title-area">
    <div className="d-table">
      <div className="d-table-cell">
        <div className="container">
          <h2>{title}</h2>
          {subtitle && (
            <>
              <br />
              <h5>{subtitle}</h5>
            </>
          )}
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

export default PageTitle;
