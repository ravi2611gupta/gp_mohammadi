import React from 'react'

function index() {
  return (
    <>
     <div className="row">
        <div className="col-sm-12 breadcrumb">
          <h3>Branches Offered</h3>
        </div>
    </div>

    <div className="container pb-5">
        <div className="row">
          <div className="col-sm-12 pt-4 table-responsive">
            <table className="table text-center table-bordered">
                <thead>
                    <tr className="linear-bg">
                        <th>S.No.</th>
                        <th>Branch Code</th>
                        <th>Branch Name</th>
                        <th>Eligibility</th>
                        <th>Duration</th>
                        <th>Intake</th>
                    </tr>
                </thead>
                
                <tbody>
                    <tr>
                        <td>1.</td>
                        <td>355</td>
                        <td>COMPUTER SCIENCE AND ENGINEERING</td>
                        <td>High School</td>
                        <td>3 Years</td>
                        <td>75</td>
                    </tr>
                    <tr>
                        <td>2.</td>
                        <td>328</td>
                        <td>ELECTRICAL ENGINEERING</td>
                        <td>High School</td>
                        <td>3 Years</td>
                        <td>75</td>
                    </tr>
                    <tr>
                        <td>3.</td>
                        <td>322</td>
                        <td>CIVIL ENGINEERING</td>
                        <td>High School</td>
                        <td>3 Years</td>
                        <td>75</td>
                    </tr>
                    <tr>
                        <td>4.</td>
                        <td>389	</td>
                        <td>COMPUTER SCIENCE AND ENGINEERING [LATERAL ENTRY]</td>
                        <td>Intermediate</td>
                        <td>2 Years</td>
                        <td>7</td>
                    </tr>
                    <tr>
                        <td>5.</td>
                        <td>378</td>
                        <td>ELECTRICAL ENGINEERING [LATERAL ENTRY]</td>
                        <td>Intermediate</td>
                        <td>2 Years</td>
                        <td>7</td>
                    </tr>
                    <tr>
                        <td>6.</td>
                        <td>375</td>
                        <td>CIVIL ENGINEERING [LATERAL ENTRY]</td>
                        <td>Intermediate</td>
                        <td>2 Years</td>
                        <td>7</td>
                    </tr>
                </tbody>
            </table>
          </div>
        </div>

        {/* <h3>Data will be uploaded soon...!</h3> */}
      </div>
    </>
  )
}

export default index