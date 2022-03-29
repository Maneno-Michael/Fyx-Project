
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import zlatan from "../../Assets/images/successimage.png";
// import './Order.css';
import Sidebar from '../../components/Sidebar';
import ProfileNav from '../../components/profileNav';
import { Link,} from "react-router-dom";
import{useState} from "react";

function ActiveOrder() {
const[modal,setModal]=useState(false)
const Toggle =()=>setModal(!modal);
    return ( 
       
        <section>
            <Sidebar/>
        <ProfileNav profile="Nicole" />
       
       <div className = "container"style={{}}>
       <div className="nav orderz" style={{marginLeft:"2%",marginBottom:"5%"}}>
       <Link to="/ActiveOrders"> <button style={{borderRadius:"15px"}}>Active Orders</button>
       </Link>
      <button style={{marginLeft:"4%",borderRadius:"15px",backgroundColor:"white"}}>Sheduled orders</button>

      </div>
      <div className = "card major mw-100 h-50 border border-warning"style={{marginLeft:"2%",borderRadius:"15px"}}>
         <div className="icon" />
          
         <div className="heading1" >
           <h1 style={{marginLeft:"40%"}}>SUCCESS!</h1>
           </div>
         <div className="Orderz" >
           <h2 style={{marginLeft:"20%"}}>Your Order No. OR013   is being Processed</h2>

          
           </div>
         <div className="TrackOrder">
         
           <button on onClick={()=>Toggle()} style={{marginLeft:"40%",borderRadius:"15px",textDecorationColor:"white"}}>Track order status</button>
           {modal? <div className="Trackz"style={{marginLeft:"30%"}}>
             <h1 style={{fontSize:"25px",fontFamily:"sans-serif"}}>Technician has been dispached and is on the way.</h1>
             <h2  style={{fontSize:"20px",fontFamily:"sans-serif",marginLeft:"10%"}}>Fundi is 20 minute away.</h2>
           </div>:null}
           {/* </Link> */}
           
         </div>

         <div className="clarification"style={{marginLeft:"36%",fontSize:"20px",marginTop:"4%",marginBottom:"2%"}}>
         <h5 >Has the technician arrived?</h5>
         <div className="rieng">
           <button style={{marginLeft:"7%", borderRadius:"10px",backgroundColor:"white",borderColor:" orange"}}>no</button>
          
          <button style={{marginLeft:"10%", borderRadius:"10px",backgroundColor:"yellow"}}>yes</button>
          
          
         </div>
         
       </div>

         
         
         </div> 


        
         <button type="button  " class="btn1 btn-link" style={{marginTop:"20px",marginLeft:"25px"}}>Request for fyx agent to call you</button>
         


         <div className="zlatan" >
        <img id = "ordersimage" src ={zlatan}style={{height:400,width:350,marginLeft:"25%"}}/>
        </div>
         
         
       
    
  
    


        
//         </div>
//         </section>
    ); }

export default ActiveOrder;