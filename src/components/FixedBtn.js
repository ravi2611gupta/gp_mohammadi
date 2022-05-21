import React from 'react'

function FixedBtn() {
  return (
    <>
            <div className="fixed-btn-one-in">
        <div className="icon"><i className="fas fa-user-tie"></i></div>
        <div className="fixed-btn-one">
          <a href="#" className="btn" target="_blank"> Admission </a>
        </div>
      </div>


      <div className="fixed-btn-two-in">
        <div className="icon"><i className="fas fa-headphones-alt"></i></div>
        <div className="fixed-btn-two">
          <a href="contact.php" className="btn"> Enquiry </a>
        </div>
      </div>

        <a href="#" className="btn ttb"> <i className="fas fa-chevron-up"></i> </a>
    </>
  )
}

export default FixedBtn