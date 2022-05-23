import React from 'react'
import Breadcrumb from '../../components/Breadcrumb'

function index() {
  return (
    <>
    
    
    <Breadcrumb heading="Academic Calendar" />


    <div className="container pb-5">
        <div className="row">
          <div className="col-sm-12 pt-4 table-responsive">
            <table className="table text-center table-bordered">
                <thead>
                    <tr className="linear-bg">
                        <th>S.No.</th>
                        <th>File</th>
                        <th>Session</th>
                    </tr>
                </thead>
                
                <tbody>
                    <tr>
                        <td>1.</td>
                        <td><a href="" target="_blank"> Click here to view </a></td>
                        <td>2017-2018</td>
                    </tr>
                    <tr>
                        <td>2.</td>
                        <td><a href="" target="_blank"> Click here to view </a></td>
                        <td>2018-2019</td>
                    </tr>
                    <tr>
                        <td>3.</td>
                        <td><a href="" target="_blank"> Click here to view </a></td>
                        <td>2019-2020</td>
                    </tr>
                </tbody>
            </table>
          </div>
        </div>

        <h3>Data will be uploaded soon...!</h3>
      </div>
    </>
  )
}

export default index