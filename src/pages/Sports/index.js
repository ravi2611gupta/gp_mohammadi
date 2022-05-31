import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Breadcrumb from '../../components/Breadcrumb'

function Index() {

 
  const [sport, setSport] = useState([])
  useEffect(()=>{
    const res = axios.get('https://test.polyprep.co.in/mohammadi_api/sports_show.php').then((data)=>{
      console.log(data)
      setSport(data.data)
    })
  }, [])

  return (
    <>
    
    <Breadcrumb heading="Sports" />


    
    <div className="container">
        <div className="row py-4">
        {sport?sport.map((sport) => {
              return (
              
              <div className="col-sm-3 mt-4">
              <div className="card gal">
                <a href={`https://test.polyprep.co.in/mohammadi_api/files/gallery/${sport.pic}`} data-fancybox="gallery"><img src={`https://test.polyprep.co.in/mohammadi_api/files/gallery/${sport.pic}`} alt="" className='' /></a>
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