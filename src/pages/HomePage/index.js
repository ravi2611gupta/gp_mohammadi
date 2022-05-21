import React from 'react'
import slide1 from '../../img/slider/sldie1.png'
import slide2 from '../../img/slider/img5.jpg'
import slide3 from '../../img/slider/slide3.png'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function index() {
  const options = {
    items: 1,
    nav: true,
    rewind: true,
    autoplay: true
};
 
  return (
   
      
    <>
     <div className="row">
        <div className="col-sm-12 p-0">
          <div id="my-slider" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#my-slider" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#my-slider" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#my-slider" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active my-slide" data-bs-interval="2000">
                <img src={slide1} className="d-block w-100" alt="..."/>
                <div className="slider-text">
                  <h3>Daudnagar College, Daudnagar</h3>
                  <h6>Welcome to the new website of Daudnagar College, Daudnagar</h6>
                </div>
              </div>
              <div className="carousel-item my-slide" data-bs-interval="2000">
                <img src={slide2} className="d-block w-100" alt="..."/>
                <div className="slider-text">
                  <h3>College labs</h3>
                  <h6>Students get practical knowledge form the labs.</h6>
                </div>
              </div>
              <div className="carousel-item my-slide">
                <img src={slide3} className="d-block w-100" alt="..."/>
                <div className="slider-text">
                  <h3>College Campus</h3>
                  <h6>Learning is a treasure that will follow its owner everywhere.</h6>
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

        
      </div>


    

      {/* <!-- =====inportant notice start===== --> */}
      <div className="row imp-notice">
        <div className="col-sm-3 imp-notice-txt linear-bg">
          <h4>Important Notice :</h4>
        </div>
        <div className="col-sm-9 imp-notice-mark">
          <marquee behavior="scroll" direction="left">
            <a href="#"><img src={require('../../img/new1.gif')}/>&nbsp; Welcome to the new website of Daudnagar College, Daudnagar.</a>
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
                      <img src={require('../../img/mentors/governor.jpg')}/>
                    </div>
                    <div className="card-text my-card-text">
                      <h5><strong>Shir Phagu Chauhan</strong></h5>
                      <h6><strong>Hon'ble Governor<br/>Bihar</strong></h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="card my-mentor-card">
                  <div className="card-body">
                    <div className="card-img">
                      <img src={require('../../img/mentors/governor.jpg')}/>
                    </div>
                    <div className="card-text my-card-text">
                      <h5><strong>Shir Nitish Kumar</strong></h5>
                      <h6><strong>Hon'ble Chief Minister<br/>Bihar</strong></h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="card my-mentor-card">
                  <div className="card-body">
                    <div className="card-img">
                      <img src={require('../../img/mentors/governor.jpg')}/>
                    </div>
                    <div className="card-text my-card-text">
                      <h5><strong>Prof. Rajendra Prasad</strong></h5>
                      <h6><strong>Hon'ble Vice Chancellor<br/>Magadh Darbhanga</strong></h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="card my-mentor-card">
                  <div className="card-body">
                    <div className="card-img">
                      <img src={require('../../img/mentors/governor.jpg')}/>
                    </div>
                    <div className="card-text my-card-text">
                      <h5><strong>Prof. (Dr.) M. Shamsul Islam</strong></h5>
                      <h6><strong>Principal<br/>Daudnagar College</strong></h6>
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
              <div className="col-sm-12 pt-4">
               <p className=" txt-justi my-para abt-us">
                Daudnagar College, Daudnagar was established on May 1, 1970. It got its affiliation from Magadh University in 1972 AD and got the distinction of being amalgamated with Magadh University on 30 September 1980 AD. It is the only incorporated college in Daudnagar. In this college, there is a system of co-education in Arts and Science faculties from Intermediate (Class XI and Class XII) to Graduation (Prestige). Further B.L.I.S., B.Com. (Hons.), B.Ed. The studies etc. will start very soon.
                <br/>
                This college is the only constituent college in Daudnagar, sub-division of Aurangabad district. This college is located in a completely free from the hustle and bustle of the city east of Patna-Aurangabad (N.H. 139) road, about one and a half kilometers north of Bhakhruan More. West of Patna Road from the college is the wide sports venue of the college. West of this is the canal from Indrapuri barrage to Patna in the Son river built by the British in 1873-74 AD. Daudnagar College is surrounded by many historical places. Aurangzeb's warlord Daud Khan had established this city in a planned manner. There are many scenic religious places here. In 1885, the British made a municipality in Daudnagar. Daud Khan Fort is also famous. At Kharati (Obra) of Daudnagar is the house of Jagatpati, who was martyred in front of Patna Secretariat in the revolution of 8th August, 1942 AD on the banks of Son river and Punpun river. Lord Buddha's Tapobhoomi is in Manora Obra.
               </p>
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

      <div className="row">
        <div className="col-sm-12">
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <div className="card mb-3 my-fac-card">
                  <div className="row g-0">
                    <div className="col-md-4  faci-icon">
                      <i className="fas fa-book-reader fa-4x"></i>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h6 className="card-title">Automated Library</h6>
                        <p className="card-text">We have well equiped fully automated library with 8000 books.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="card mb-3 my-fac-card">
                  <div className="row g-0">
                    <div className="col-md-4  faci-icon">
                      <i className="fas fa-wifi fa-4x"></i>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h6 className="card-title">24×7 Internet facility</h6>
                        <p className="card-text">Students get facilty of 24*7 Internet availability in the campus.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="card mb-3 my-fac-card">
                  <div className="row g-0">
                    <div className="col-md-4  faci-icon">
                      <i className="fas fa-users fa-4x"></i>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h6 className="card-title">Experienced Faculty</h6>
                        <p className="card-text">The students learn under the guidance of experienced faculties.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    
    
            <div className="row">
              <div className="col-sm-4">
                <div className="card mb-3 my-fac-card">
                  <div className="row g-0">
                    <div className="col-md-4 faci-icon">
                      <i className="fas fa-flask fa-4x"></i>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h6 className="card-title">Laboratory facility</h6>
                        <p className="card-text">Students get practical exposure while working in well equipped labs.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="card mb-3 my-fac-card">
                  <div className="row g-0">
                    <div className="col-md-4  faci-icon">
                      <i className="fas fa-brush fa-4x"></i>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h6 className="card-title">Neat &amp; Clean</h6>
                        <p className="card-text">We have a lavish green eco-friendly clean campus and environment</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="card mb-3 my-fac-card">
                  <div className="row g-0">
                    <div className="col-md-4 faci-icon">
                      <i className="fas fa-building fa-4x"></i>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h6 className="card-title">Largest Infrastructure</h6>
                        <p className="card-text">We have one of the largest infra-structure with all modern amenities.</p>
                      </div>
                    </div>
                  </div>
                </div>
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
                  <img src={require('../../img/mentors/governor.jpg')}/>
              </div>
              <div className="col-sm-9">
                <p className=" txt-justi my-para abt-us">
                  दाउदनगर कॉलेज दाउदनगर, मई, 1970 ई० से अद्यतन शैक्षणिक जगत में अपनी गौरवमयी परम्परा का निर्वहन करते हुए शिक्षा के उत्तरोत्तर विकास एवं प्रसार में अविस्मरणीय योगदान देता रहा है। हमें अपनी परम्परागत शिक्षा को सशक्त बनाने के साथ-साथ नये व्यवहारिक एवं व्यवसायिक पाठ्यक्रमों को अपनाते हुए नयी प्रौद्योगिकी की दिशा में पहल करनी होगी, तभी वर्तमान शिक्षा का मूलभाव फलित हो सकेगा। कॉलेज का उत्कर्ष हमारी उन्नति, देश का विकास तथा विश्व की प्रगति का प्रतीक है। हम आज के मापदंड पर खरा उतरना चाहते हैं तथा छात्रों के पलायन को रोकना चाहते है। महाविद्यालय में अनुशासन को बनाए रखना तथा मानवीय मूल्यों की रक्षा करना हमारी प्रतिबद्धता है। छात्र-छात्राओं के सर्वांगीण विकास के साथ-साथ उनमें शिक्षा के प्रति अभिरूचि तथा पठन-पाठन के प्रति जिज्ञासा उत्पन्न हो, यही हमारा लक्ष्य है। शिक्षकेत्तर कर्मचारी, छात्र-छात्राओं एवं अभिभावकों के पारस्परिक सहयोग से हम शैक्षणिक जगत में नये-नये कीर्तिमान स्थापित कर सकेंगे।
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
          

          <div className="col-sm-4 pt-5 stati">
            <div className="row stati-u">
              <div className="col-sm-6 stati-u1 stati-box">
                <h1 className="counter">51</h1>
                <h6>+ Year of Establishment</h6>
              </div>
  
              <div className="col-sm-6 stati-u2 stati-box">
                <h1 className="counter">45 </h1>
                <h6>+ Staff</h6>
              </div>
            </div>
            
            <div className="row stati-d">
              <div className="col-sm-6 stati-d1 stati-box">
                <h1 className="counter">15 </h1>
                <h6>+ Courses</h6>
              </div>
              
              <div className="col-sm-6 stati-d2 stati-box">
                <h1 className="counter">30000 </h1>
                <h6>+ students</h6>
              </div>
            </div>
          </div>


          <div className="col-sm-1"></div>
          
          <div className="col-sm-3 mt-4 p-2 board linear-bg-l">
            <h5 className="board-h">Latest News</h5>
            <marquee behavior="scroll" direction="down" className="marquee-notice">
              <img src={require('../../img/new1.gif')}/> <a href="" target="_blank"> Notice will be uploaded soon...! </a>
            </marquee>
          </div>
  
          <div className="col-sm-1"></div>

          <div className="col-sm-3 mt-4 p-2 board linear-bg-l">
            <h5 className="board-h">Notice Board</h5>
            <marquee behavior="scroll" direction="down" className="marquee-notice">
              <img src={require('../../img/new1.gif')}/> <a href="" target="_blank"> Notice will be uploaded soon...! </a>
            </marquee>
          </div>



        </div>
      </div>
      {/* <!-- =====notice section end=====  --> */}




      {/* <!-- =====testimonial start===== --> */}
      <div className="container">
        <div className="row">
          <div className="col-sm-12 pb-3 pt-5">
            <h3><span>Our</span>  Testimonial</h3>
            <div className="underline1 linear-bg"></div>
          </div>
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
                      <div className="col-sm-1"></div>
                      <div className="col-sm-8">
                        <div className="text-area">
                          <p className="my-para">I had a very good time at Daudnagar College. All the teachers are very friendly and enthusiastic. The lessons are very varied and inspiring. Thank you very much!!!</p>
                          <h5>Shiva Gupta</h5>
                          <h5>B.Sc.</h5>
                        </div>      
                      </div>
                      <div className="col-sm-2">
                        <div className="img-area">
                          <img src={require('../../img/male_avatar.jpg')}/>
                        </div>
                      </div>
                      <div className="col-sm-1"></div>
                    </div>
                  </div>
                </div>
              </div>
             
              <div className="carousel-item testi-box linear-bg-l">
                <div className="testi-box-inner">
                  <div className="container">
                    <div className="row">
                      <div className="col-sm-1"></div>
                      <div className="col-sm-8">
                        <div className="text-area">
                          <p className="my-para">Helpful and ample material, motivated and inspirational faculty. <br/>Thank you.</p>
                          <h5>Shivani Gupta</h5>
                          <h5>B.A.</h5>
                        </div>
                      </div>
                      <div className="col-sm-2">
                        <div className="img-area">
                          <img src={require('../../img/male_avatar.jpg')}/>
                        </div>
                      </div>
                      <div className="col-sm-1"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="carousel-item testi-box linear-bg-l">
                <div className="testi-box-inner">
                  <div className="container">
                    <div className="row">
                      <div className="col-sm-1"></div>
                      <div className="col-sm-8">
                        <div className="text-area">
                          <p className="my-para">It was a unique and great experience. Everybody here is so kind and nice. <br/>Thanks a billion for Daudnagar college faculty.</p>
                          <h5>Shivam Gupta</h5>
                          <h5>B.Sc.</h5>
                        </div>
                      </div>
                      <div className="col-sm-2">
                        <div className="img-area">
                          <img src={require('../../img/male_avatar.jpg')}/>
                        </div>
                      </div>
                      <div className="col-sm-1"></div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
           
          </div>
        </div>
        
      </div>
      {/* <!-- =====testimonial end===== --> */}






      {/* <!-- =====Gallery start===== --> */}
      <div className="container pt-5">
        <div className="row">
          <div className="col-sm-12 pb-3 pt-5">
            <h3><span>Our</span>  Gallery</h3>
            <div className="underline1 linear-bg"></div>
          </div>
        </div>
      </div>

      <div className="row pb-5">]
      <OwlCarousel className='owl-theme' loop margin={10} nav items={4}>
 
            <div className="item"><img src={ require('../../img/gallery/sldie1.png') } style={{height: "160px"}} /></div>
            <div className="item"><img src={ require('../../img/gallery/sldie2.png') }  style={{height: "160px"}}/></div>
            <div className="item"><img src={ require('../../img/gallery/slide3.png') }  style={{height: "160px"}}/></div>
            <div className="item"><img src={ require('../../img/gallery/img5.jpg') }  style={{height: "160px"}}/></div>
            <div className="item"><img src={ require('../../img/gallery/sldie1.png') }  style={{height: "160px"}}/></div>
      </OwlCarousel>

      
        {/* <div className="col-sm-12 in-gall owl-carousel owl-theme">  
        </div> */}
      </div>
      {/* <!-- =====Gallery end===== --> */}


      


    </>
     

  
  )
}

export default index