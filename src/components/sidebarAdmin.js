import React from 'react'
import './sidebarAdmin.css'
import * as fa from "react-icons/fa";
import { NavDropdown} from 'react-bootstrap'; 
import {MdLogout} from "react-icons/md";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function SidebarAdmin(){




  
  const navigate = useNavigate();
  const logoutSubmit = (e) => {
      e.preventDefault();

      axios.post(`/api/logout`) .then(res =>{
         

          if (res.status === 200) {

              localStorage.removeItem("auth_token");
              localStorage.removeItem("auth_name", JSON.stringify(res.data.user));
      
      
              alert("Logged out successfully")
              navigate('/admin');
  
  
          } else {
  
              alert("Log out Incomplete")
  
          }
      })
  }




    return (
        <div className="">

        <div className="sidenav ">
        <div className="py-4 ps-4 " >
        <img src="/Assets/images/Asset 2.svg" alt="fyx logo" className="img-fluid border-bottom border-dark mx-auto d-block" width="150"/>
         <a href="/admindashboard" className="pt-3"><fa.FaHome style={{ fontSize:"30px", color:"black"}}/> Dashboard</a>   
            </div>
           <hr/>
            <h4 className='py-3'>Modules</h4>
        <div className=''>
            <div className=''>
                
            <NavDropdown 
            id="nav-dropdown-dark-example"
            title="Order managment"
            menuVariant="dark"
            >
            <NavDropdown.Item href="#action/3.1">New</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Scheduled</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">History</NavDropdown.Item>
            <NavDropdown.Divider />
            
            </NavDropdown>
            </div>
        </div>
        <NavDropdown
          id="nav-dropdown-dark-example"
          title="Technician managment"
          menuVariant="dark"
        >
          <NavDropdown.Item href="/technicians">Technicians</NavDropdown.Item>
          <NavDropdown.Item href="/techregistrations">Registrations</NavDropdown.Item>
          <NavDropdown.Item href="/technotifications">Notification</NavDropdown.Item>
          <NavDropdown.Divider />
          
        </NavDropdown>
        <NavDropdown
          id="nav-dropdown-dark-example"
          title="Client Managment"
          menuVariant="dark"
        >
          <NavDropdown.Item href="/callrequests">Call Requests</NavDropdown.Item>
          <NavDropdown.Item href="/clients">Clients</NavDropdown.Item>
          
          <NavDropdown.Divider />
          
        </NavDropdown>
       
        <NavDropdown
          id="nav-dropdown-dark-example"
          title="Finance Module"
          menuVariant="dark"
        >
          <NavDropdown.Item href="#action/3.1">Payment</NavDropdown.Item>
          
        </NavDropdown>
        <NavDropdown
          id="nav-dropdown-dark-example"
          title="Communication"
          menuVariant="dark"
        >
          <NavDropdown.Item href="/livechats">Live Chats</NavDropdown.Item>
          <NavDropdown.Item href="/newsletters">Newsletters</NavDropdown.Item>
          
          <NavDropdown.Divider />
        </NavDropdown>
        <NavDropdown
          id="nav-dropdown-dark-example"
          title="User Managment"
          menuVariant="dark"
        >
          <NavDropdown.Item href="#action/3.1">User Management</NavDropdown.Item>
          
        </NavDropdown>
        
        <NavDropdown
          id="nav-dropdown-dark-example"
          title="Content Managment"
          menuVariant="dark"
        >
          <NavDropdown.Item href="#/">Website</NavDropdown.Item>
          <NavDropdown.Item href="/carousel">Carousel</NavDropdown.Item>
          <NavDropdown.Item href="/miniForm">Mini form</NavDropdown.Item>
          <NavDropdown.Item href="/advertisements">Advertisements</NavDropdown.Item>
          <NavDropdown.Item href="/technicians">Technician</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4">Fyx policy</NavDropdown.Item>
          <NavDropdown.Divider />
        
        </NavDropdown>
        <hr/>
       
    
   <button onClick={logoutSubmit} style={{fontSize:"18px",background:"transparent",color:"black",border:"none",marginLeft:"28px"}}> <MdLogout style={{color:"black",fontSize:"35px"}}  className="ms-2" />Log Out</button>
               
       
      </div>

        </div>
    )
}
export  default SidebarAdmin;   