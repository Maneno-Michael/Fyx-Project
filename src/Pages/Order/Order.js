import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import zlatan from "../../Assets/images/successimage.png";
// import './Order.css';
import Sidebar from '../../components/Sidebar';
import ProfileNav from '../../components/profileNav';
import { Link,} from "react-router-dom";
function ActiveOrder() {
    return ( 
       
        <section>
            <Sidebar/>
        <ProfileNav profile="Nicole" />
       
       <div className = "container"style={{}}>
       <div className="nav orderz" style={{marginLeft:"2%",marginBottom:"5%"}}>
      <button style={{borderRadius:"15px"}}>Active orders</button>
      <button style={{marginLeft:"4%",borderRadius:"15px",backgroundColor:"white"}}>Sheduled orders</button>

      </div>
      <div className = "card major"style={{marginLeft:"2%",borderRadius:"15px"}}>
         <div className="icon" />
          
         <div className="heading1" >
           <h1 style={{marginLeft:"40%"}}>SUCCESS!</h1>
           </div>
         <div className="Orderz" >
           <h2 style={{marginLeft:"20%"}}>Your Order No. OR013   is being Processed</h2>
           </div>
         <div className="TrackOrder">
         <Link to="/order1">
           <button style={{marginLeft:"40%",borderRadius:"15px",backgroundColor:"yellow",textDecorationColor:"white"}}>Track order status</button>
           </Link>
                   
         </div>
         </div> 


         <div className="request"style={{marginLeft:"15%",textDecoration:"underline",textDecorationColor:"white"}}>
         <p>Request for a fix aggent to call you</p>
         </div>


         <div className="zlatan" >
        <img id = "ordersimage" src ={zlatan}style={{height:400,width:350,marginLeft:"25%"}}/>
        </div>
         
         
       
    
  
    


        
        </div>
        </section>
     );
}

export default ActiveOrder;