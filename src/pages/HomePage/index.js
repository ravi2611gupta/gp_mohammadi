import React from 'react'
import slide1 from '../../img/slider/slider1.jpg'
import slide2 from '../../img/slider/slider2.jpg'


import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function index() {
  

  return (
   
      
    <>
     <div className="row">
        <div className="col-sm-9 p-0">
          <div id="my-slider" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#my-slider" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#my-slider" data-bs-slide-to="1" aria-label="Slide 2"></button>
              {/* <button type="button" data-bs-target="#my-slider" data-bs-slide-to="2" aria-label="Slide 3"></button> */}
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active my-slide" data-bs-interval="2000">
                <img src={slide1} className="d-block w-100" alt="..."/>
                <div className="slider-text">
                  <h3>Government Polytechnic, Mohammadi Kheri</h3>
                  <h6>Affiliated to : Uttar Pradesh Board of Technical Education</h6>
                </div>
              </div>
              <div className="carousel-item my-slide" data-bs-interval="2000">
                <img src={slide2} className="d-block w-100" alt="..."/>
                <div className="slider-text">
                  <h3>College labs</h3>
                  <h6>Students get practical knowledge form the labs.</h6>
                </div>
              </div>
             
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#my-slider" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#my-slider" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div className="col-sm-3 p-2 board linear-bg-l">
          <h5 className="board-h">Notice Board</h5>
          <marquee behavior="scroll" direction="down" className="marquee-notice">
            <img src={require('../../img/new1.gif')}/> <a href="" target="_blank"> Notice will be uploaded soon...! </a>
          </marquee>
        </div>

        
      </div>


    

      {/* <!-- =====inportant notice start===== --> */}
      <div className="row imp-notice">
        <div className="col-sm-3 imp-notice-txt linear-bg">
          <h4>Important Notice :</h4>
        </div>
        <div className="col-sm-9 imp-notice-mark">
          <marquee behavior="scroll" direction="left">
            <a href="#"><img src={require('../../img/new1.gif')}/>&nbsp; Welcome to the new website of Government Polytechnic, Mohammadi Kheri.</a>
          </marquee>
        </div>
      </div>
      {/* <!-- =====inportant notice end===== --> */}






       {/* <!-- =====mentors section start===== --> */}
       <div className="container">
        <div className="row pt-3">
          <div className="col-sm-12 pb-3 pt-5">
            <h3><span>Our</span> Mentors</h3>
            <div className="underline1 linear-bg"></div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12 py-3">
          <div className="container">
            <div className="row">
              <div className="col-sm-3">
                <div className="card my-mentor-card">
                  <div className="card-body">
                    <div className="card-img">
                      <img src={require('../../img/mentors/yogi.jpg')}/>
                    </div>
                    <div className="card-text my-card-text">
                      <h5><strong>Shir Yogi Adityanath</strong></h5>
                      <h6><strong>Hon’ble Chief Minister Government of Uttar Pradesh</strong></h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="card my-mentor-card">
                  <div className="card-body">
                    <div className="card-img">
                      <img src={require('../../img/mentors/ashish.jpg')}/>
                    </div>
                    <div className="card-text my-card-text">
                      <h5><strong>Shir Ashish Patel</strong></h5>
                      <h6><strong>Hon'ble Minister for Technical Education, U.P.</strong></h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="card my-mentor-card">
                  <div className="card-body">
                    <div className="card-img">
                      <img src={require('../../img/mentors/amrit.jpg')}/>
                    </div>
                    <div className="card-text my-card-text">
                      <h5><strong>Shri Amrit Abhijat(I.A.S.)</strong></h5>
                      <h6><strong>Principal Secretary, Technical Education, Uttar Pradesh</strong></h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="card my-mentor-card">
                  <div className="card-body">
                    <div className="card-img">
                      <img src={require('../../img/mentors/manoj.jpg')}/>
                    </div>
                    <div className="card-text my-card-text">
                      <h5><strong>Shri Manoj Kumar</strong></h5>
                      <h6><strong>Director Directorate of Technical Education, Uttar Pradesh</strong></h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- =====mentors section end===== --> */}





      {/* <!-- =====about us start===== --> */}
      <div className="container">
        <div className="row">
          <div className="col-sm-12 pb-3 pt-5">
            <h3><span>About</span> College</h3>
            <div className="underline1 linear-bg"></div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12 linear-bg">
          <div className="container">
            <div className="row">
              <div className="col-sm-8 pt-4">
               <p className=" txt-justi my-para abt-us">
                
              <span style={{color:"#fff", fontSize:"1.3em", fontWeight:"bold"}}>Welcome To Government Polytechnic Mohammadi Kheri</span> <br/><br />
                Government Polytechnic Mohammadi, Kheri was established in the year of 2017. The present campus measured 7 Acres of land.
                The institution is running 3 courses in Computer Science and Engineering, Civil Engineering and Electrical Engineering  with intake of 60 students in each.
                Government Polytechnic Mohammadi, Kheri is approved by AICTE Govt. of India and affiliated to Board of Technical Education UP (BTEUP).
                The College has fully furnished air conditioned Computer Lab equipped with Broadband Internet facility and video projection facility.
               </p>
              </div>

              <div className='col-sm-4 pb-3'>
                <img src={require('../../img/college.jpeg')} className='mt-0 mt-sm-5 w-100' alt="" />
              </div>
              
            </div>
          </div>
        </div>
      </div>
      {/* <!-- =====about us end===== --> */}








      {/* <!-- =====our feature start===== --> */}

      <div className="container">
        <div className="row">
          <div className="col-sm-12 pb-3 pt-5">
            <h3><span>Our</span> facilities</h3>
            <div className="underline1 linear-bg"></div>
          </div>
        </div>
      </div>

      <div className="container">
      <div className="row">
       
        <div className="col-sm-8">
          <div className="container">


            <div className="row">
              <div className="col-sm-12">

                  <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        MODERN COMPUTER LAB
                      </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                      <div className="card mb-3 my-fac-card">
                          <div className="row g-0">
                            <div className="col-md-3 faci-icon">
                              <i className="fas fa-book-reader fa-4x"></i>
                            </div>
                            <div className="col-md-9">
                              <div className="card-body">
                                <h6 className="card-title">MODERN COMPUTER LAB</h6>
                                <p className="card-text">The College has fully furnished air conditioned Computer Lab equipped with Broadband Internet and video projection facility.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        24×7 INTERNET FACILITY
                      </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <div className="card mb-3 my-fac-card">
                            <div className="row g-0">
                              <div className="col-md-3  faci-icon">
                                <i className="fas fa-wifi fa-4x"></i>
                              </div>
                              <div className="col-md-9">
                                <div className="card-body">
                                  <h6 className="card-title">24×7 INTERNET FACILITY</h6>
                                  <p className="card-text">Students get facilty of 24*7 Internet availability in the campus.</p>
                                </div>
                              </div>
                            </div>
                          </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        ANNUAL JOB FAIR
                      </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <div className="card mb-3 my-fac-card">
                          <div className="row g-0">
                            <div className="col-md-3 faci-icon">
                              <i className="fas fa-users fa-4x"></i>
                            </div>
                            <div className="col-md-9">
                              <div className="card-body">
                                <h6 className="card-title">ANNUAL JOB FAIR</h6>
                                <p className="card-text">We will organize Job Fair every year for Better Opportunity to our students as we as for students for other polytechnic students.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        CLASSROOMS
                      </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <div className="card mb-3 my-fac-card">
                          <div className="row g-0">
                            <div className="col-md-3 faci-icon">
                              <i className="fas fa-flask fa-4x"></i>
                            </div>
                            <div className="col-md-9">
                              <div className="card-body">
                                <h6 className="card-title">CLASSROOMS</h6>
                                <p className="card-text">The college has classrooms which are spacious, well furnished, and ventilated form the basic infrastructure of the college.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFive">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        SPORTS &amp; GAMES
                      </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <div className="card mb-3 my-fac-card">
                          <div className="row g-0">
                            <div className="col-md-3 faci-icon">
                              <i className="fas fa-brush fa-4x"></i>
                            </div>
                            <div className="col-md-9">
                              <div className="card-body">
                                <h6 className="card-title">SPORTS &amp; GAMES</h6>
                                <p className="card-text">The College lays considerable emphasis on student participation in various outdoor and indoor games.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSix">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                        LIBRARY
                      </button>
                    </h2>
                    <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <div className="card mb-3 my-fac-card">
                          <div className="row g-0">
                            <div className="col-md-3 faci-icon">
                              <i className="fas fa-building fa-4x"></i>
                            </div>
                            <div className="col-md-9">
                              <div className="card-body">
                                <h6 className="card-title">LIBRARY</h6>
                                <p className="card-text">The College Library provides a very conducive atmosphere for reading and learning. It is well equipped with more than 3000 books. Government Polytechnic Mohammdi is member of National Digital Library and also every student have their email account on this library.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                </div>

              </div>

           
            </div>

    
          
          </div>
        </div>

        <div className="col-sm-4 stati">
            <div className="row stati-u">
              <div className="col-sm-6 stati-u1 stati-box">
                <h1 className="counter">5</h1>
                <h6>+ Year of Establishment</h6>
              </div>
  
              <div className="col-sm-6 stati-u2 stati-box">
                <h1 className="counter">15 </h1>
                <h6>+ Staff</h6>
              </div>
            </div>
            
            <div className="row stati-d">
              <div className="col-sm-6 stati-d1 stati-box">
                <h1 className="counter">3 </h1>
                <h6>+ Branches</h6>
              </div>
              
              <div className="col-sm-6 stati-d2 stati-box">
                <h1 className="counter">9000 </h1>
                <h6>+ students</h6>
              </div>
            </div>
          </div>
       
        
      </div>
      </div>
      {/* <!-- =====our feature end===== --> */}
     



      {/* <!-- =====vice chancelor's desk start===== --> */}
      <div className="container">
        <div className="row">
          <div className="col-sm-12 pb-3 pt-5">
            <h3><span>From</span>  Principal's Desk</h3>
            <div className="underline1 linear-bg"></div>
          </div>
        </div>
      </div>


      <div className="row">
        <div className="col-sm-12 linear-bg-l">
          <div className="container">
            <div className="row">
              <div className="col-sm-3 form-desk-img">
                  <img src={require('../../img/mentors/principal.jpg')}/>
              </div>
              <div className="col-sm-9">
                <p className=" txt-justi my-para abt-us">
                Our institute  established in 2017, which providing  technical manpower to the nation. We want to produce such technocrats having all round personality i.e. sound technically, mentally, spiritually so they may prove themselves as an asset to the nation. Whenever or wherever they be placed they may proved themselves as a source of light in all fields of the society.
                <br/><br/>
                Hope this website come in handy to students, staff and parents for better information &amp; communication.
                Best Wishes…..

                  <br/><br/>
                  <a href="principal.html" className="btn my-btn">Read More</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    
      {/* <!-- =====vice chancelor's desk end===== --> */}





      {/* <!-- =====notice section start=====  --> */}
      <div className="container">
        <div className="row">
          <div className="col-sm-12 pb-3 pt-5">
            <h3><span>Our</span>  Testimonial</h3>
            <div className="underline1 linear-bg"></div>
          </div>
        </div>
      </div>
      

      <div className="container">
        <div className="row">
          

       
          <div className="col-sm-8">
            <div className="row">
              <div className="col-sm-12">
                <div id="testi" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-indicators">
                    <button type="button" data-bs-target="#testi" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#testi" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#testi" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active testi-box">
                      <div className="testi-box-inner">
                        
                        <div className="container">
                          <div className="row">
                           
                            <div className="col-sm-9">
                              <div className="text-area">
                                <p className="my-para">I had a very good time at GP Mohammadi. All the teachers are very friendly and enthusiastic. The lessons are very varied and inspiring. Thank you very much!!!</p>
                                <h5>Shiva Gupta</h5>
                                <h5>B.Sc.</h5>
                              </div>      
                            </div>
                            <div className="col-sm-3">
                              <div className="img-area">
                                <img src={require('../../img/male_avatar.jpg')}/>
                              </div>
                            </div>
                            
                          </div>
                        </div>
                      </div>
                    </div>
                  
                    <div className="carousel-item testi-box linear-bg-l">
                      <div className="testi-box-inner">
                        <div className="container">
                          <div className="row">
                            <div className="col-sm-9">
                              <div className="text-area">
                                <p className="my-para">Helpful and ample material, motivated and inspirational faculty. <br/>Thank you.</p>
                                <h5>Shivani Gupta</h5>
                                <h5>B.A.</h5>
                              </div>
                            </div>
                            <div className="col-sm-3">
                              <div className="img-area">
                                <img src={require('../../img/male_avatar.jpg')}/>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="carousel-item testi-box linear-bg-l">
                      <div className="testi-box-inner">
                        <div className="container">
                          <div className="row">
                            <div className="col-sm-9">
                              <div className="text-area">
                                <p className="my-para">It was a unique and great experience. Everybody here is so kind and nice. <br/>Thanks a billion for Daudnagar college faculty.</p>
                                <h5>Shivam Gupta</h5>
                                <h5>B.Sc.</h5>
                              </div>
                            </div>
                            <div className="col-sm-3">
                              <div className="img-area">
                                <img src={require('../../img/male_avatar.jpg')}/>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                
                </div>
              </div>
              
            </div>
          </div>
          
        
          <div className='col-sm-4 pb-3 pb-sm-0'>
        <OwlCarousel className='owl-theme' loop margin={10} nav={false} autoplay items={1}> 
          <div className="item">
              <div className="card mb-3 my-fac-card">
                <div className="row g-0">
                  <div className="col-md-12 pt-4 faci-icon">
                    <i className="fas fa-building fa-4x"></i>
                  </div>
                  <div className="col-md-12">
                    <div className="card-body">
                      <h6 className="card-title">ELECTRICAL ENGINEERING</h6>
                      <p className="card-text text-center">In Three Year Diploma COURSES, the institute is running Electrical Engineering.</p>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        
          <div className="item">
              <div className="card mb-3 my-fac-card">
                <div className="row g-0">
                  <div className="col-md-12 pt-4 faci-icon">
                    <i className="fas fa-building fa-4x"></i>
                  </div>
                  <div className="col-md-12">
                    <div className="card-body">
                      <h6 className="card-title">COMPUTER SCIENCE &amp; ENGINEERING</h6>
                      <p className="card-text text-center">In Three Year Diploma COURSES, the institute is running Computer Science &amp; Engineering.</p>
                    </div>
                  </div>
                </div>
              </div>
          </div>

          <div className="item">
              <div className="card mb-3 my-fac-card">
                <div className="row g-0">
                  <div className="col-md-12 pt-4 faci-icon">
                    <i className="fas fa-building fa-4x"></i>
                  </div>
                  <div className="col-md-12">
                    <div className="card-body">
                      <h6 className="card-title">CIVIL ENGINEERING</h6>
                      <p className="card-text text-center">In Three Year Diploma COURSES, the institute is running Civil Engineering.</p>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          </OwlCarousel>
        </div>


        </div>
      </div>
      {/* <!-- =====notice section end=====  --> */}









      {/* <!-- =====Gallery start===== --> */}
      <div className="container pt-5">
        <div className="row">
          <div className="col-sm-12 pb-3 pt-5">
            <h3><span>Our</span>  Gallery</h3>
            <div className="underline1 linear-bg"></div>
          </div>
        </div>
      </div>

     <div className="container">
     <div className="row pb-5">
      <OwlCarousel className='owl-theme' loop margin={10} nav={false} items={4}>
 
            <div className="item"><img src={ require('../../img/gallery/gal1.jpeg') } style={{height: "160px"}} /></div>
            <div className="item"><img src={ require('../../img/gallery/gal2.jpeg') }  style={{height: "160px"}}/></div>
            <div className="item"><img src={ require('../../img/gallery/gal3.jpg') }  style={{height: "160px"}}/></div>
            <div className="item"><img src={ require('../../img/gallery/gal4.jpg') }  style={{height: "160px"}}/></div>
            <div className="item"><img src={ require('../../img/gallery/gal2.jpeg') }  style={{height: "160px"}}/></div>
      </OwlCarousel>

      
        {/* <div className="col-sm-12 in-gall owl-carousel owl-theme">  
        </div> */}
      </div>
     </div>
      {/* <!-- =====Gallery end===== --> */}


      


    </>
     

  
  )
}

export default index