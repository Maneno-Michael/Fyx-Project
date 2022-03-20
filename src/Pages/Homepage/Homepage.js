import React from "react";

import "./Homepage.css";
import 'bootstrap/dist/css/bootstrap.min.css';
function Homepage() {
  return (
    <div>


      <div className="container-fluid sticky-top px-0">
        <div className="advert">
          <div id="arrow-shaped"></div>
          <h3 className="text-center mb-0">Advertisements</h3>
        </div>
        <nav className="navbar navbar-light navbar-expand-md bg-secondary pb-2 pt-2" id="mainNav">
          <a className="navbar-brand p-0" href="#">
            <img src="assets/img/Asset 2.svg" height="120px" width="120px" alt="" className="img-fluid logo-nav" />
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#bar" aria-controls="bar" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse ml-5 mr-5" id="bar">
            <ul className="nav navbar-nav ml-auto">
              <li className="nav-item mx-0 mx-lg-1">
                <a className="nav-link py-3 px-0 px-lg-3  js-scroll-trigger" href="#">Learn More <i className="fa fa-play"></i></a>
              </li>

              <li className="nav-item mx-0 mx-lg-1">
                <div className="dropdown show">
                  <a className="nav-link py-3 px-0 px-lg-3  js-scroll-trigger" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Technician <i className="fa fa-play"></i>
                  </a>

                  <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <a className="dropdown-item" href="login.html">Login</a>
                    <a className="dropdown-item" href="registerTechnician.html">Register</a>
                  </div>
                </div>
              </li>
              <li className="nav-item mx-0 mx-lg-1">
                <div className="dropdown show">
                  <a className="nav-link py-3 px-0 px-lg-3  js-scroll-trigger" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Customer <i className="fa fa-play"></i>
                  </a>

                  <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <a className="dropdown-item" href="login.html">Login</a>
                    <a className="dropdown-item" href="signup.html">Signup</a>
                  </div>
                </div>
              </li>
              <li className="nav-item mx-0 mx-lg-1">
                <a className="nav-link py-3 px-0 px-lg-3  js-scroll-trigger" href="#"><i className="fa fa-phone mr-1"></i>0794636596</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>


      <header className="masthead text-white" />
      <div className="carousel slide" data-ride="carousel" id="header-carousel">
        <div className="carousel-inner">
          <div className="carousel-item c-header active"><img className="w-100 d-block" src="assets/img/bgimage2.jpg" alt="Slide Image" /></div>
          <div className="carousel-item c-header"><img className="w-100 d-block" src="assets/img/barman-front-fridge.jpg" alt="Slide Image" /></div>
          <div className="carousel-item c-header"><img className="w-100 d-block" src="assets/img/side-view-fridge.jpg" alt="Slide Image" /></div>
          <div className="carousel-item c-header"><img className="w-100 d-block" src="assets/img/instruments-electrical-repair.jpg" alt="Slide Image" /></div>
        </div>
        <div>
          <a className="carousel-control-prev" href="#header-carousel" role="button" data-slide="prev"><i className="fas fa-chevron-circle-left slidearrow"></i><span className="sr-only">Previous</span></a>
          <a className="carousel-control-next" href="#header-carousel" role="button" data-slide="next"><i className="fas fa-chevron-circle-right slidearrow"></i><span className="sr-only">Next</span></a>
        </div>

      </div>

      <div className="row main-text ">
        <div className="col-md-12 text-center">
          <div className="hidden-xs">

            <div id="form-holder">
              <h1 id="form-header" className="text-center">Ready to Live Smarter?</h1>
              <p className="text-center text-warning">Request for Fyx Best Rated Professionals</p>

              <form className="d-md text-left" id="servicesform">

                <div className="row">
                  <div className="col px-1">
                    <label htmlFor="services">Choose a Service:</label>
                    <select className="js-example-basic-single" name="states[]" multiple="multiple">
                      <option value="AL">Alabama</option>
                      <option value="WY">Wyoming</option>
                    </select>
                  </div>
                  <div className="col px-1">
                    <label htmlFor="description">Description:</label>
                    <select className="js-example-basic-multiple" name="description">
                      <option value="">desc1</option>
                      <option value="">desc2</option>
                    </select>
                  </div>
                  <div className="col px-1">
                    <label htmlFor="model">Model:</label>
                    <select className="js-example-basic-multiple" name="model">
                      <option value=""></option>
                    </select>
                  </div>
                  <div className="col px-1">
                    <label htmlFor="location">Location:</label>
                    <select className="js-example-basic-multiple" name="location">
                      <option value=""></option>
                    </select>
                  </div>
                  <div className="col pt-2">


                    <a href="login.html"><button className="btnProceed" type="button">Proceed</button></a>
                  </div>

                </div>
              </form>
            </div>


            <div id="registertechnician" className="align-items-center mt-md-3 pl-5" />
            <i className="fas fa-times-circle mt-2 mr-1" id="close" aria-label="Close"></i>
            <img src="assets/img/registertech.png" />
            <div className="text-centered">
              <p className="small font-weight-bold">Register to be a technician for FYX
                <a href="registerTechnician.html"><button type="button" id="registertech">Register Now <i className="fas fa-arrow-circle-right arrows"></i></button></a>

              </p>


            </div>
          </div>


        </div>
      </div>



    <section id="markerting" /><div id="advert1">
        <h2 className="text-center font-weight-bold mt-5">Services we Offer</h2>
        <div id="services-carousel" className="carousel slide carousel-multi-item" data-ride="carousel" data-interval="6000">

          <div className="carousel-inner" role="listbox">
            <ol className="carousel-indicators">
              <li data-target="#services-carousel" data-slide-to="0" className="active"></li>
              <li data-target="#services-carousel" data-slide-to="1"></li>
              <li data-target="#services-carousel" data-slide-to="2"></li>
            </ol>



            <div className="carousel-item active">
              <h6 className="text-center text-warning">Maintenance</h6>
              <div className="row servicerow align-items-center ml-5">
                <div className="col-md-1"></div>

                <div className="col-md-2 cardItem">
                  <div className="card servicecards">
                    <div className="card-body">
                      <img className="servicesimgs" src="assets/icons/television.png" width="50px" height="50px" />
                      <p className="text-center small">Tvs</p>

                    </div>
                  </div>
                </div>

                <div className="col-md-2 cardItem">
                  <div className="card servicecards">
                    <div className="card-body">
                      <img className="servicesimgs" src="assets/icons/smartphone.png" width="50px" height="50px" />
                      <p className="text-center small">Phones</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-2 cardItem">
                  <div className="card servicecards">
                    <div className="card-body">
                      <img className="servicesimgs" src="assets/icons/fridge.png" width="50px" height="50px" />
                      <p className="text-center small">Fridge</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-2 cardItem">
                  <div className="card servicecards">
                    <div className="card-body">
                      <img className="servicesimgs" src="assets/icons/microwave.png" width="50px" height="50px" />
                      <p className="text-center small">Microwave</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-2 cardItem">
                  <div className="card servicecards">
                    <div className="card-body">
                      <img className="servicesimgs" src="assets/icons/blender.png" width="50px" height="50px" />
                      <p className="text-center small">Blender</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-1"></div>

              </div>

            </div>

            <div className="carousel-item">
              <h6 className="text-center text-warning">Repair</h6>
              <div className="row servicerow align-items-center ml-5">
                <div className="col-md-1"></div>

                <div className="col-md-2 cardItem">
                  <div className="card servicecards">
                    <div className="card-body">
                      <img className="servicesimgs" src="assets/icons/television.png" width="50px" height="50px" />
                      <p className="text-center small">Tvs</p>

                    </div>
                  </div>
                </div>

                <div className="col-md-2 cardItem">
                  <div className="card servicecards">
                    <div className="card-body">
                      <img className="servicesimgs" src="assets/icons/smartphone.png" width="50px" height="50px" />
                      <p className="text-center small">Phones</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-2 cardItem">
                  <div className="card servicecards">
                    <div className="card-body">
                      <img className="servicesimgs" src="assets/icons/fridge.png" width="50px" height="50px" />
                      <p className="text-center small">Fridge</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-2 cardItem">
                  <div className="card servicecards">
                    <div className="card-body">
                      <img className="servicesimgs" src="assets/icons/microwave.png" width="50px" height="50px" />
                      <p className="text-center small">Microwave</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-2 cardItem">
                  <div className="card servicecards">
                    <div className="card-body">
                      <img className="servicesimgs" src="assets/icons/blender.png" width="50px" height="50px" />
                      <p className="text-center small">Blender</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-1"></div>
              </div>

            </div>

            <div className="carousel-item">
              <h6 className="text-center text-warning">Installation</h6>
              <div className="row servicerow align-items-center ml-5">
                <div className="col-md-1"></div>

                <div className="col-md-2 cardItem">
                  <div className="card servicecards">
                    <div className="card-body">
                      <img className="servicesimgs" src="assets/icons/television.png" width="50px" height="50px" />
                      <p className="text-center small">Tvs</p>

                    </div>
                  </div>
                </div>

                <div className="col-md-2 cardItem">
                  <div className="card servicecards">
                    <div className="card-body">
                      <img className="servicesimgs" src="assets/icons/smartphone.png" width="50px" height="50px" />
                      <p className="text-center small">Phones</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-2 cardItem">
                  <div className="card servicecards">
                    <div className="card-body">
                      <img className="servicesimgs" src="assets/icons/fridge.png" width="50px" height="50px" />
                      <p className="text-center small">Fridge</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-2 cardItem">
                  <div className="card servicecards">
                    <div className="card-body">
                      <img className="servicesimgs" src="assets/icons/microwave.png" width="50px" height="50px" />
                      <p className="text-center small">Microwave</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-2 cardItem">
                  <div className="card servicecards">
                    <div className="card-body">
                      <img className="servicesimgs" src="assets/icons/blender.png" width="50px" height="50px" />
                      <p className="text-center small">Blender</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-1"></div>
              </div>

            </div>


          </div>


        </div>
      </div><div id="advert2">
        <div className="row  no-gutters">
          <div className="col m-2">
            <img className="img-fluid" src="assets/img/side-view-fridge.jpg" />

          </div>
          <div className="col m-2">
            <img className="img-fluid" src="assets/img/barman-front-fridge.jpg" />
          </div>
          <div className="col m-2">
            <img className="img-fluid" src="assets/img/instruments-electrical-repair.jpg" />
          </div>
        </div>
      </div><br /><br /><div id="advert3">
        <h3 className="text-center mb-3  font-weight-bold">Why Work with Us</h3>
        <div id="workWithUs" style=  {{background: 'url(assets/img/instruments-electrical-repair.jpg)', backgroundSize:'cover'}}  >
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-2">
                  <img className="ml-3 mt-2" src="assets/icons/Icon material-schedule.png" />
                </div>
                <div className="col-md-10">
                  <h5 className="text-uppercase">Book Conviniently</h5>
                  <p>We provide on-site services from 7.a.m to 7.p.m. 7days a week.
                    Simply book online or contact us through a phone call and  get the service done as soon as next day.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-2">
                  <img className="ml-3 mt-2" src="assets/icons/Icon feather-shield.png" />
                </div>
                <div className="col-md-10">
                  <h5 className="text-uppercase">For your safety</h5>
                  <p>All our pros undergo rigorous identity checks and personality interviews.
                    We make sure that you do not have to worry about your security.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-2">
                  <img className="ml-3 mt-2" src="assets/icons/group1.png" />
                </div>
                <div className="col-md-10">
                  <h5 className="text-uppercase">Always in Touch</h5>
                  <p>Book a service online, keep a trck of your service status as well as keep in touch with your pro.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-2">
                  <img className="ml-3 mt-2" src="assets/icons/Icon awesome-award.png" />
                </div>
                <div className="col-md-10">
                  <h5 className="text-uppercase">Best Rated Professionals</h5>
                  <p>Our pros are highly experienced and specialized. This complimented with our dedication to perfection.
                    We use your reviews and feedback to cntinuously improve our service
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div><div id="brands">
        <h2 className="text-center font-weight-bold mt-5">Brands we fix</h2>
        <div id="multi-item-example" className="carousel slide carousel-multi-item" data-ride="carousel" data-interval="8000">

          <div className="carousel-inner" role="listbox">


            <div className="carousel-item active">
              <div className="row align-items-center">
                <div className="col"><img className="img-fluid d-block mx-auto" src="assets/img/samsung.png" width="150px" height="150px" /></div>
                <div className="col"><img className="img-fluid d-block mx-auto" src="assets/img/hisense.png" width="100px" height="100px" /></div>
                <div className="col"><img className="img-fluid d-block mx-auto" src="assets/img/sony.png" width="100px" height="100px" /></div>
                <div className="col"><img className="img-fluid d-block mx-auto" src="assets/img/armco.jpg" width="100px" height="100px" /></div>
                <div className="col"><img className="img-fluid d-block mx-auto" src="assets/img/syinix.png" width="100px" height="100px" /></div>
              </div>

            </div>

            <div className="carousel-item">
              <div className="row align-items-center">
                <div className="col"><img className="img-fluid d-block mx-auto" src="assets/img/samsung.png" width="150px" height="150px" /></div>
                <div className="col"><img className="img-fluid d-block mx-auto" src="assets/img/hisense.png" width="100px" height="100px" /></div>
                <div className="col"><img className="img-fluid d-block mx-auto" src="assets/img/sony.png" width="100px" height="100px" /></div>
                <div className="col"><img className="img-fluid d-block mx-auto" src="assets/img/armco.jpg" width="100px" height="100px" /></div>
                <div className="col"><img className="img-fluid d-block mx-auto" src="assets/img/syinix.png" width="100px" height="100px" /></div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="row align-items-center">
                <div className="col"><img className="img-fluid d-block mx-auto" src="assets/img/samsung.png" width="150px" height="150px" /></div>
                <div className="col"><img className="img-fluid d-block mx-auto" src="assets/img/hisense.png" width="100px" height="100px" /></div>
                <div className="col"><img className="img-fluid d-block mx-auto" src="assets/img/sony.png" width="100px" height="100px" /></div>
                <div className="col"><img className="img-fluid d-block mx-auto" src="assets/img/armco.jpg" width="100px" height="100px" /></div>
                <div className="col"><img className="img-fluid d-block mx-auto" src="assets/img/syinix.png" width="100px" height="100px" /></div>
              </div>

            </div>


          </div>


        </div>
      </div><br /><section /><section id="clientreviews" className="mb-4" /><h3 className="text-center  font-weight-bold">Happy Clients' Testimonials</h3><div id="multi-item-example" className="carousel slide carousel-multi-item" data-ride="carousel" data-interval="10000">




        <div className="carousel-inner" role="listbox">


          <div className="carousel-item active">

            <div className="col-md-4 cardItem">
              <div className="card mb-2">
                <div className="card-body">
                  <h4 className="card-title text-left"><img src="assets/icons/icons8-quote-left-96 (1).png" width="40px" height="40px" /></h4>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content. Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
                  <h4 className="card-title text-right"><img src="assets/icons/icons8-quote-right-96 (1).png" width="40px" height="40px" /></h4>
                </div>
              </div>
            </div>

            <div className="col-md-4 cardItem">
              <div className="card mb-2">
                <div className="card-body">
                  <h4 className="card-title text-left"><img src="assets/icons/icons8-quote-left-96.png" width="40px" height="40px" /></h4>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content. Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
                  <h4 className="card-title text-right"><img src="assets/icons/icons8-quote-right-96.png" width="40px" height="40px" /></h4>
                </div>
              </div>
            </div>

            <div className="col-md-4 cardItem">
              <div className="card mb-2">
                <div className="card-body">
                  <h4 className="card-title text-left"><img src="assets/icons/icons8-quote-left-96 (1).png" width="40px" height="40px" /></h4>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content. Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
                  <h4 className="card-title text-right"><img src="assets/icons/icons8-quote-right-96 (1).png" width="40px" height="40px" /></h4>
                </div>
              </div>
            </div>

          </div>

          <div className="carousel-item">

            <div className="col-md-4 cardItem">
              <div className="card mb-2">
                <div className="card-body">
                  <h4 className="card-title text-left"><img src="assets/icons/icons8-quote-left-96 (1).png" width="40px" height="40px" /></h4>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content. Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
                  <h4 className="card-title text-right"><img src="assets/icons/icons8-quote-right-96 (1).png" width="40px" height="40px" /></h4>
                </div>
              </div>
            </div>

            <div className="col-md-4 cardItem">
              <div className="card mb-2">
                <div className="card-body">
                  <h4 className="card-title text-left"><img src="assets/icons/icons8-quote-left-96.png" width="40px" height="40px" /></h4>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content. Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
                  <h4 className="card-title text-right"><img src="assets/icons/icons8-quote-right-96.png" width="40px" height="40px" /></h4>
                </div>
              </div>
            </div>

            <div className="col-md-4 cardItem">
              <div className="card mb-2">
                <div className="card-body">
                  <h4 className="card-title text-left"><img src="assets/icons/icons8-quote-left-96 (1).png" width="40px" height="40px" /></h4>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content. Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
                  <h4 className="card-title text-right"><img src="assets/icons/icons8-quote-right-96 (1).png" width="40px" height="40px" /></h4>
                </div>
              </div>
            </div>

          </div>


        </div>

      </div><section /><section className="map-clean">
        <div className="container">
          <div className="intro">
            <h3 className="text-center  font-weight-bold">Technicians spread out in Kenya</h3>

          </div>
        </div><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7977208152984!2d36.80523821397037!3d-1.2959791360004282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10ea41b1ef41%3A0x9a28a94dc1b0f665!2sGA%20Insurance%20House!5e0!3m2!1sen!2ske!4v1647669102312!5m2!1sen!2ske" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
      </section><section id="footer">
        <div className="footer-dark" id="footer">
          <footer>
            <div className="container">
              <div className="row pt-4 ml-4">
                <div className="col-md-4 item">
                  <h3 id="contactUs">Contact Us</h3>
                  <ul>
                    <li><i className="fa fa-map-marker fa-2x mr-2"></i> GA House, 2nd Floor. UpperHill</li>
                    <li><img id="iconPhone" src="assets/icons/icons8-phone-24.png" height="20px" width="20px" />  0794636596/0709596105</li>
                    <li><img id="iconEmail" src="assets/icons/icons8-envelope-50.png" height="20px" width="20px" />    hello@fyx.co.ke</li>
                  </ul>
                </div>
                <div className="col-md-4 item text-center pr-5">
                  <img src="assets/img/Asset 2.svg" height="130px" width="150px" />
                  <ul>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Policy</a></li>
                    <li><a href="#">Technicians</a></li>
                  </ul>
                </div>
                <div className="col-md-4 item text-white">
                  <h3 id="newsletter">Signup for the Newsletter</h3>
                  <form className="footerForm">
                    <input type="email" name="email" placeholder="Enter your Email" />
                    <i className="fa fa-long-arrow-right arrows position-absolute"></i>
                  </form>
                  <h3 id="fyxCall">Ask Fyx to Call you</h3>
                  <form className="footerFormPhone">
                    <input type="phone" name="phoneNo" placeholder="Enter your Phone Number" />
                    <i className="fa fa-long-arrow-right arrows position-absolute"></i>
                  </form>
                </div>
              </div>
              <div className="col-md-4 item social">
                <h5>Get Social</h5>
                <a href="#"><i className="fa fa-facebook"></i></a>
                <a href="#"><i className="fa fa-twitter"></i></a>
                <a href="#"><i className="fa fa-instagram"></i></a>
              </div>

              <hr id="footerDivider" />
              <p className="copyright"><img src="assets/icons/icons8-copyright-24.png" /> Fyx 2021 All Rights Reserved.</p>
            </div>
          </footer>
        </div>
      </section><a href="#" className="float">
        <i className="fa fa-comment my-float"></i>
      </a>





    </div>
  );
}

export default Homepage;