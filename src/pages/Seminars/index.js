import axios from 'axios'
import React, { useState } from 'react'
import Breadcrumb from '../../components/Breadcrumb'

function Index() {

  const [seminar, setSeminar] = useState([])
  useState(()=>{
    const res = axios.get('http://localhost/mohammadi_api/seminar_show.php').then((data)=>{
      console.log(data)
      setSeminar(data.data)
    })
  }, [])



  return (
    <>
     
     <Breadcrumb heading="Seminars" />


    
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

export default Index