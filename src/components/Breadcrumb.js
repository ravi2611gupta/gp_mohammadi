import React from 'react'

function Breadcrumb(props) {
  return (

     <div className="row">
            <div className="col-sm-12 breadcrumb">
                <h3>{props.heading}</h3>
            </div>
        </div>

  )
}

export default Breadcrumb