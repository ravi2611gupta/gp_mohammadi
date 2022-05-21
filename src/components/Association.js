import React from 'react'
import logo1 from '../img/logo/magadh.png'
import logo2 from '../img/logo/prabha.png'
import logo3 from '../img/logo/SWAYAM.png'
import logo4 from '../img/logo/ugc.png'
import logo5 from '../img/logo/unnat.jpg'
import logo6 from '../img/logo/NAAC_LOGO.png'
import logo7 from '../img/logo/aiu.jpg'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


function Association() {
  return (
    <div>
          <div className="container pt-5">
        <div className="row">
          <div className="col-sm-12 pb-3 pt-5">
            <h3><span>Our</span>  Association</h3>
            <div className="underline1 linear-bg"></div>
          </div>
        </div>
      </div>

      <div className="row pb-5">
      <OwlCarousel className='owl-theme asso' loop margin={10} nav items={4}>
                <div className="item"><img src={logo7} alt=""/></div>
            <div className="item px-5"><img src={logo1} alt="" className="px-5"/></div>
            <div className="item px-2"><img src={logo2} alt=""/></div>
            <div className="item px-2"><img src={logo3} alt=""/></div>
            <div className="item px-2"><img src={logo4} alt=""/></div>
            <div className="item px-2"><img src={logo5} alt=""/></div>
            <div className="item px-2"><img src={logo6} alt=""/></div>
    </OwlCarousel>

      </div>
    </div>
  )
}

export default Association