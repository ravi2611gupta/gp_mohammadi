import React, { useEffect, useState } from 'react'
import slide1 from '../../img/slider/slider1.jpg'
import slide2 from '../../img/slider/slider2.jpg'


import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const menOptions = {
  margin: 1,
  responsiveClass: true,
  nav: true,
  loop:true,
  dots: false,
  autoplay: false,
  navText: ["Prev", "Next"],
  smartSpeed: 1000,
  responsive: {
      0: {
          items: 1,
      },
      400: {
          items: 1,
      },
      600: {
          items: 2,
      },
      700: {
          items: 3,
      },
      1000: {
          items: 4,

      }
  },
};


const galOptions = {
  margin: 10,
  responsiveClass: true,
  nav: false,
  loop:true,
  dots: true,
  autoplay: true,
  navText: ["Prev", "Next"],
  smartSpeed: 1000,
  responsive: {
      0: {
          items: 1,
      },
      400: {
      },
      items: 1,
      600: {
          items: 2,
      },
      700: {
          items: 3,
      },
      1000: {
          items: 4,

      }
  },
};


function Index() {
  
  const [slider, setSlider] = useState([])
  useEffect(()=>{
  const res = axios.get('http://localhost/mohammadi_api/slider_show.php').then((data)=>{
    console.log("slider response : ",data)
    setSlider(data.data)
  })
  },[])


  const [noti, setNoti] = useState([])
  useEffect(()=>{
    const res1 = axios.get('https://test.polyprep.co.in/mohammadi_api/noti_show.php').then((data1)=>{
      console.log(data1)
      setNoti(data1.data)
    })
  }, [])


  const [latestNoti, setLatestNoti] = useState([])
  useEffect(()=>{
    const res2 = axios.get('https://test.polyprep.co.in/mohammadi_api/latest_noti_show.php').then((data2)=>{
      console.log("Latest Notices : ",data2)
      setLatestNoti(data2.data);
    })
  }, [])

  
  const [gal, setGal] = useState([])
  useEffect(()=>{
    const res3 = axios.get('https://test.polyprep.co.in/mohammadi_api/gallery_show_all.php').then((data3)=>{
      console.log(data3)
      setGal(data3.data)
    })
  }, [])


  let flag = 1;
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

            {slider?slider.map((slider) => {
              if(flag==1){
                return (
                  <div className="carousel-item active my-slide" data-bs-interval="2000">
                  <img src={`http://localhost/mohammadi_api/files/slider/${slider.pic}`} className="d-block w-100" alt="..."/>
                  <div className="slider-text">
                    <h3>Government Polytechnic, Mohammadi Kheri</h3>
                    <h6>Affiliated to : Uttar Pradesh Board of Technical Education</h6>
                  </div>
                </div>
                )
              }else{
                <div className="carousel-item my-slide" data-bs-interval="2000">
                <img src={`http://localhost/mohammadi_api/files/slider/${slider.pic}`} className="d-block w-100" alt="..."/>
                <div className="slider-text">
                  <h3>College labs</h3>
                  <h6>Students get practical knowledge form the labs.</h6>
                </div>
              </div>
              }
              flag = 0;
              
                }):"Sorry, no data found!"}

             
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
                {noti?noti.map((noti) => {
                  return (
                    <a href={`https://test.polyprep.co.in/mohammadi_api/files/notice/${noti.file_name}`} key={noti.file_id} target="_blank" style={{display:"block"}}> <img src={require('../../img/new1.gif')}/>  {noti.notice} </a>
                  );
                }):"Sorry, no data found!"}
          </marquee>
        </div>

        
      </div>


    

      {/* <!-- =====inportant notice start===== --> */}
      <div className="row imp-notice">
        <div className="col-sm-3 imp-notice-txt pt-1 linear-bg">
          <h5>Latest Notice :</h5>
        </div>
        <div className="col-sm-9 imp-notice-mark">
          <marquee behavior="scroll" direction="left">
          {latestNoti?noti.map((lnoti) => {
                  return (
                    <a href={`https://test.polyprep.co.in/mohammadi_api/files/notice/${lnoti.file_name}`} key={lnoti.file_id} target="_blank"> <img src={require('../../img/new1.gif')}/>  {lnoti.notice} </a>
                  );
                }):"Sorry, no data found!"}

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

            <OwlCarousel className='owl-theme' {...menOptions}> 
          <div className="item p-4">
          <div className="col-sm-12">
                <div className="card my-card1 my-mentor-card">
                  <div className="card-body">
                    <div className="card-img">
                      <img src={require('../../img/mentors/yogi.jpg')}/>
                    </div>
                    <div className="card-text my-card-text">
                      <h5><strong>Shri Yogi <br /> Adityanath</strong></h5>
                      <h6>Hon’ble Chief Minister Government of Uttar Pradesh</h6>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        
          <div className="item p-4">
          <div className="col-sm-12">
                <div className="card my-card1 my-mentor-card">
                  <div className="card-body">
                    <div className="card-img">
                      <img src={require('../../img/mentors/ashish.jpg')}/>
                    </div>
                    <div className="card-text my-card-text">
                      <h5><strong>Shri Ashish <br /> Patel</strong></h5>
                      <h6>Hon'ble Minister for Technical Education, U.P.</h6>
                    </div>
                  </div>
                </div>
              </div>
          </div>

          <div className="item p-4">
          <div className="col-sm-12">
                <div className="card my-card1 my-mentor-card">
                  <div className="card-body">
                    <div className="card-img">
                      <img src={require('../../img/mentors/amrit.jpg')}/>
                    </div>
                    <div className="card-text my-card-text">
                      <h5><strong>Shri Subhash Chand Sharma (I.A.S.)</strong></h5>
                      <h6>Principal Secretary, Technical Education, Uttar Pradesh</h6>
                    </div>
                  </div>
                </div>
              </div>             
          </div>

          <div className="item p-4">
          <div className="col-sm-12">
                <div className="card my-card1 my-mentor-card">
                  <div className="card-body">
                    <div className="card-img">
                      <img src={require('../../img/mentors/manoj.jpg')}/>
                    </div>
                    <div className="card-text my-card-text">
                      <h5><strong>Shri Sunil Kumar Chaudhary (I.A.S)</strong></h5>
                      <h6>Special Secretary, Technical Education, U.P.</h6>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          </OwlCarousel>

          
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
                Government Polytechnic Mohammadi, Kheri was established in the year of 2017. The present campus measures 7 acres of land.
                The institution is running 3 courses in Computer Science and Engineering, Civil Engineering and Electrical Engineering  with intake of 60 students in each branch.
                Government Polytechnic Mohammadi, Kheri is approved by AICTE Govt. of India and affiliated to Board of Technical Education UP (BTEUP).
                The College has fully furnished, air conditioned Computer Lab equipped with Broadband Internet facility and video projection facility.
               </p>
              </div>

              <div className='col-sm-4 pb-3 pt-5'>
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
                              <i className="fa fa-desktop fa-4x"></i>
                            </div>
                            <div className="col-md-9">
                              <div className="card-body">
                                <h6 className="card-title">MODERN COMPUTER LAB</h6>
                                <p className="card-text">The College has fully furnished, air conditioned Computer Lab equipped with Broadband Internet and video projection facility.</p>
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
                              <i className="fas fa-briefcase fa-4x"></i>
                            </div>
                            <div className="col-md-9">
                              <div className="card-body">
                                <h6 className="card-title">ANNUAL JOB FAIR</h6>
                                <p className="card-text">We organize Job Fair every year for better career opportunity to our students as well as for students for other polytechnic students.</p>
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
                              <i className="fas fa-building fa-4x"></i>
                            </div>
                            <div className="col-md-9">
                              <div className="card-body">
                                <h6 className="card-title">CLASSROOMS</h6>
                                <p className="card-text">The college has classrooms spacious, well furnished, and ventilated classrooms and infrastructure.</p>
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
                              <i className="fa fa-volleyball fa-4x"></i>
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
                              <i className="fas fa-book fa-4x"></i>
                            </div>
                            <div className="col-md-9">
                              <div className="card-body">
                                <h6 className="card-title">LIBRARY</h6>
                                <p className="card-text">The College Library provides a very conducive atmosphere for reading and learning. It is well equipped with more than 3000 books. Government Polytechnic Mohammadi is a member of National Digital Library with every student having their access to this library.</p>
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

        <div className="col-sm-4 stati my-5 px-4 my-sm-0">
          
            <ul className="stati-card">
          <li>
              <h3>5</h3><i className="fa fa-plus clr-up"></i>
            <p> Year of <br /> Establishment</p>
          </li>
          <li>
                <h3>15</h3><i className="fa fa-plus clr-up"></i>
              <p> Staff</p>
            </li>
          <li>
              <h3>3</h3><i className="fa fa-plus clr-up"></i>
            <p>Branches</p>
          </li>
          <li>
              <h3>9000</h3><i className="fa fa-plus clr-up"></i>
            <p>Students</p>
          </li>
            </ul>

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
                Our institute was established in 2017, which aims at providing educationally technical manpower to the nation. We aim to produce technocrats with an all rounder personality i.e. technically, mentally and spiritually sound so they may prove themselves as an asset to the nation. Whenever or wherever they ought to be placed, they must prove themselves as a source of light in all fields of the society.
                <br/><br/>
                I am confident this website will guide the students, staff and parents for better information &amp; communication with our institute.

                  <br/><br/>
                  <Link to="/" className="btn my-btn">Read More</Link>
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

          <div className="col-sm-8">
            <div className="row">
            <div className="col-sm-12 pb-3 pt-5">
            <h3><span>Our</span>  Testimonial</h3>
            <div className="underline1 linear-bg"></div>
          </div>
            </div>


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
            <div className="row">
            <div className="col-sm-12 pt-5 pb-3">
              <h3><span>Courses</span>  Offered</h3>
              <div className="underline1 linear-bg"></div>
            </div>
          </div>
          
            <div className="row">
              <div className="col-sm-12 pt-5">
              <OwlCarousel className='owl-theme' loop margin={10} nav={false} autoplay items={1}> 
          <div className="item">
              <div className="card mb-3 my-fac-card">
                <div className="row g-0">
                  <div className="col-md-12 pt-4 faci-icon">
                    <i className="fas fa-gears fa-4x"></i>
                  </div>
                  <div className="col-md-12">
                    <div className="card-body">
                      <h6 className="card-title">ELECTRICAL ENGINEERING</h6>
                      <p className="card-text text-center">In Three Year Diploma COURSES, the institute is offers Electrical Engineering.</p>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        
          <div className="item">
              <div className="card mb-3 my-fac-card">
                <div className="row g-0">
                  <div className="col-md-12 pt-4 faci-icon">
                    <i className="fas fa-desktop fa-4x"></i>
                  </div>
                  <div className="col-md-12">
                    <div className="card-body">
                      <h6 className="card-title">COMPUTER SCIENCE &amp; ENGINEERING</h6>
                      <p className="card-text text-center">In Three Year Diploma COURSES, the institute is offers Computer Science &amp; Engineering.</p>
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
                      <p className="card-text text-center">In Three Year Diploma COURSES, the institute is offers Civil Engineering.</p>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          </OwlCarousel>
              </div>
            </div>
     
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
      <OwlCarousel className='owl-theme' {...galOptions}>

            {gal?gal.map((gal) => {
              return (
                <div className="item" key={gal.gal_id}><img src={`https://test.polyprep.co.in/mohammadi_api/files/gallery/${gal.pic}`} style={{height: "160px"}} /></div>
              );
            }):""}
 
            {/* <div className="item"><img src={ require('../../img/gallery/gal2.jpeg') }  style={{height: "160px"}}/></div>
            <div className="item"><img src={ require('../../img/gallery/gal3.jpg') }  style={{height: "160px"}}/></div>
            <div className="item"><img src={ require('../../img/gallery/gal4.jpg') }  style={{height: "160px"}}/></div>
            <div className="item"><img src={ require('../../img/gallery/gal2.jpeg') }  style={{height: "160px"}}/></div> */}

      </OwlCarousel>

      
        {/* <div className="col-sm-12 in-gall owl-carousel owl-theme">  
        </div> */}
        
      </div>
     </div>
      {/* <!-- =====Gallery end===== --> */}


      


    </>
     

  
  )
}

export default Index