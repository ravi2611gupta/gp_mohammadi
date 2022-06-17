import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Breadcrumb from '../../components/Breadcrumb'
import Loader from '../../components/Loader';

function Index() {

  const apiPrefix = process.env.REACT_APP_API_PREFIX

  const [spinner, setSpinner] = useState(false);

  const [gallery, setGallery] = useState([])
  useEffect(()=>{
    setSpinner(true);
    const res = axios.get(`${apiPrefix}/gallery_show.php`).then((data)=>{
      console.log(data)
      setGallery(data.data)
      setSpinner(false);
    })
  }, [])


  return (
    <>
    
    <Breadcrumb heading="Gallery" />


    
    <div className="container">
       {!spinner?<div className="row py-4">

{gallery?gallery.map((gal) => {
      return (
      <div key={gal.gal_id} className="col-sm-3 mt-4">
      <div className="card gal">
        <a href={`${apiPrefix}/files/gallery/${gal.pic}`} data-fancybox="gallery"><img src={`${apiPrefix}/files/gallery/${gal.pic}`} alt="" className='' /></a>
      </div>
      </div>
      );
      }):""}
</div>:<div className='row'><div className='col-sm-12 py-5'><Loader/></div></div>}
      </div>

  

    </>
  )
}

export default Index