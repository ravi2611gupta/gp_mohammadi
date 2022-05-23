import React from 'react'
import Breadcrumb from '../../components/Breadcrumb'

function index() {
  return (
    <>
    
    <Breadcrumb heading="Gallery" />


    
    <div className="container">
        <div className="row py-4">
          <div className="col-sm-3 mt-4">
              <div className="card gal">
                <a href={ require('../../img/gallery/gal1.jpeg') } data-fancybox="gallery"><img src={ require('../../img/gallery/gal1.jpeg') } alt="" className='' /></a>
              </div>
          </div>
          <div className="col-sm-3 mt-4">
            <div className="card gal">
                <a href={ require('../../img/gallery/gal2.jpeg') } data-fancybox="gallery"><img src={ require('../../img/gallery/gal2.jpeg') } alt="" /></a>
            </div>
          </div>
          <div className="col-sm-3 mt-4">
            <div className="card gal">
                <a href={ require('../../img/gallery/gal3.jpg') } data-fancybox="gallery"><img src={ require('../../img/gallery/gal3.jpg') } alt="" /></a>
            </div>
          </div>
          <div className="col-sm-3 mt-4">
            <div className="card gal">
                <a href={ require('../../img/gallery/gal4.jpg') } data-fancybox="gallery"><img src={ require('../../img/gallery/gal4.jpg') } alt="" /></a>
            </div>
          </div>
          
        </div>
      </div>

  

    </>
  )
}

export default index