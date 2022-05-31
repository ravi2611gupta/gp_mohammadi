import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Breadcrumb from '../../components/Breadcrumb'

function Index() {

  const [gallery, setGallery] = useState([])
  useEffect(()=>{
    const res = axios.get('https://test.polyprep.co.in/mohammadi_api/gallery_show.php').then((data)=>{
      console.log(data)
      setGallery(data.data)
    })
  }, [])


  return (
    <>
    
    <Breadcrumb heading="Gallery" />


    
    <div className="container">
        <div className="row py-4">

        {gallery?gallery.map((gal) => {
              return (
              
              <div className="col-sm-3 mt-4">
              <div className="card gal">
                <a href={`https://test.polyprep.co.in/mohammadi_api/files/gallery/${gal.pic}`} data-fancybox="gallery"><img src={`https://test.polyprep.co.in/mohammadi_api/files/gallery/${gal.pic}`} alt="" className='' /></a>
              </div>
              </div>
              );
              }):""}
                 
         
          
        </div>
      </div>

  

    </>
  )
}

export default Index