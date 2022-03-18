import React from 'react';

function Order() {
    return ( 
        <div>


       
                    <div  id="wrapper">
                    <nav id = "sideBar" className="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0 mb-5 mt-1">
                        <div className="container-fluid d-flex flex-column p-0"><a className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" href="#">
                            <div className="mr-3"><img id = "logo" src = "assets/img/Asset 2.svg" width = "130px" height="80px"/></div>
                            </a>
                            <hr className="sidebar-divider mt-2" />
                            
                            <ul className="navbar-nav text-light ml-3 mb-0" id="accordionSidebar">
                                <li className="nav-item"><a className="nav-link" href="profile.html"><img src = "assets/icons/Icon awesome-user-circle.png"/><span className = "nav-li">Profile</span></a></li>
                                <li className="nav-item"><a className="nav-link" href="history.html"><img src = "assets/icons/Icon awesome-history.png"/><span className = "nav-li">History</span></a></li>
                                <li className="nav-item"><a className="nav-link" href="bookservice.html"><img src = "assets/icons/Icon material-queue.png"/><span className = "nav-li">Book a Service</span></a></li>
                                <li className="nav-item"><a className="nav-link active" href="orders.html"><img src = "assets/icons/icons8-purchase-order-50.png" width = "25px" height = "25px"/><span className = "nav-li">Orders</span></a></li>
                                <li className="nav-item"><a className="nav-link" href="feedback.html"><img src = "assets/icons/Icon material-feedback.png"/><span className = "nav-li">Feedback</span></a></li>
                                <li className="nav-item"><a className="nav-link" href="fyxpolicy.html"><img src = "assets/icons/Icon awesome-file-contract.png"/><span className = "nav-li">Fyx Policy</span></a></li>
                                <li className="nav-item"><a className="nav-link" href="https://localhost/fyx-frontend/homepage.html"><img src = "assets/icons/Icon awesome-home.png"/><span className = "nav-li">Home</span></a></li>
                                <li className="nav-item" style = "margin-top: 70px;"><a className="nav-link" href="#"><img src = "assets/icons/Icon awesome-info-circle.png"/><span className = "nav-li">About Us</span></a></li>
                                <li className="nav-item" style = "margin-bottom: 0px; padding-bottom: 5%;"><a className="nav-link" href="#"><img src = "assets/icons/Icon feather-log-out.png"/>  <span className = "nav-li logout">Log Out</span></a></li>
                            </ul>
                            
                        </div>
                    </nav>
                    </div>

                    <div className="d-flex flex-column" id="content-wrapper">
                        <div id="content">
                            <nav className="navbar navbar-light navbar-expand shadow-sm bg-white mb-3 ml-4 mr-4 mt-1 topbar static-top">
                                <div className="container-fluid">
                                    <form className="form-inline d-sm-inline-block mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                                        <a href = "customerhome.html"><img src = "assets/icons/Icon awesome-home.png"/></a>
                                    </form>
                                    <ul className="nav navbar-nav flex-nowrap ml-auto">
                                        <li className="nav-item dropdown no-arrow">
                                            <div className="nav-item dropdown no-arrow"><a className="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="#"><img className = "mr-2" src = "assets/icons/Icon awesome-user-circle.png"/><span id = "userIdentity" className="d-none d-lg-inline medium">Hi, Nicole</span></a>
                                                
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                </nav>
                                </div>

                <div className = "container-fluid">
                    <ul className="nav nav-pills">
                        <li className="nav-item ml-3">
                        <a className="nav-link pt-1 pl-4 pr-4 pb-1 mb-3 shadow-sm active" aria-current="page" href= "activeorders.html">Active Orders</a>
                        </li>
                        <li className="nav-item ml-3">
                        <a className="nav-link pt-1 pl-4 pr-4 pb-1 mb-3 shadow-sm" href="scheduledorders.html">Scheduled Orders</a>
                        </li>
                    </ul>
                    <div className = "orders text-center">
                        <img id = "ordersimage" src = "assets/img/ordersbgimg.png"/>

                        <h4>You don't have an Active Order</h4>
                        <p><a href = "bookservice.html"><button type = "button" id = "bookbtn">Book Service</button></a></p>
                    </div>
                    
                </div>
                <a href="#" className="float">
                    <i className="fa fa-comment my-float"></i>
                </a>
                    
                    <script src="assets/js/jquery.min.js"></script>
                    <script src="assets/bootstrap/js/bootstrap.min.js"></script>
                            




        </div>
                    </div>
     );
}

export default Order;