import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './Order.css';
import Sidebar from '../../components/Sidebar';
import ProfileNav from '../../components/profileNav';
 import { Link,} from "react-router-dom";
import{useState} from "react";
function Order3() {
  const[modal,setModal]=useState(false)
 const Toggle =()=>setModal(!modal);
    return ( 
       
        <section>
            <Sidebar/>
        <ProfileNav profile="Nicole" />
       <div>
       <div className = "container">
    
    <div className="nav order" style={{marginLeft:"2%",marginBottom:"10%"}}>
    <a  href='/ActiveOrders' className='btn btn-outline-warning rounded-pill ms-1 text-black'> Active orders</a>
       <a  href='/scheduledorder' className='btn btn-outline-warning rounded-pill ms-2 text-black'>Sheduled orders</a>
      </div>
        
        <div className = "card majo border border-warning "style={{maxWidth:"80%",marginLeft:"2%",borderRadius:"15px"}}>
         <div className="icon" />
        
              

       <div className="clarify"style={{marginLeft:"20%",fontSize:"20px",marginTop:"4%",marginBottom:"2%"}}>
         <h5 >Are you satisfied with the the technician work?</h5>
         <div className="satisfied" style={{marginLeft:"20%"}}>
        
        <div className='btn btn-outline-warning rounded-pill ms-1 text-black'> Yes</div>
        <div className='btn btn-outline-warning rounded-pill ms-2 text-black'>No</div>
         </div>
         </div>



         </div> 


    
  
    


        </div>
        </div>
        </section>
     );
}

export default Order3;



