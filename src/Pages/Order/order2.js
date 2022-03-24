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
       <div>
       <div className = "container"style={{}}>
    <ul className="nav nav-pills">
        <li className="nav-item ml-3">
          <a className="nav-link pt-1 pl-4 pr-4 pb-1 mb-3 shadow-sm active" aria-current="page" href= "activeorders">Active Orders</a>
        </li>
        <li className="nav-item ml-3">
          <a className="nav-link pt-1 pl-4 pr-4 pb-1 mb-3 shadow-sm" href="scheduledorders">Scheduled Orders</a>
        </li>
      </ul>
      </div>
      <div className = "card major"style={{maxWidth:"60%",marginLeft:"18%",borderRadius:"15px"}}>
         <div className="icon" />
          
         <div className="heading1" >
           <h1 style={{marginLeft:"40%"}}>SUCCESS!</h1>
           </div>
         <div className="Orderz" >
           <h2 style={{marginLeft:"20%"}}>Your Order No. OR013   is being Processed</h2>
           </div>
         <div className="TrackOrder">
           <button style={{marginLeft:"40%",borderRadius:"15px",backgroundColor:"yellow",textDecorationColor:"white"}}>Track order status</button>
         </div>

{/* tech arrival */}
              

       <div className="clarification"style={{marginLeft:"36%",fontSize:"20px",marginTop:"4%",marginBottom:"2%"}}>
         <h5 >Has the technician arrived?</h5>
         <div className="rieng">
           <button style={{marginLeft:"7%", borderRadius:"10px",backgroundColor:"white"}}>no</button>
           <button style={{marginLeft:"10%", borderRadius:"10px",backgroundColor:"yellow"}}>yes</button>
         </div>
       </div>



         </div> 


         <div className="request"style={{marginLeft:"18%",textDecoration:"underline"}}>
         <p>Request for a fix aggent to call you</p>
         </div>


         
        <img id = "ordersimage" src ={zlatan}style={{height:400,width:350,marginLeft:"35%"}}/>
        
         
         
       
    
  
    


        
        </div>
        </section>
     );
}

export default ActiveOrder;