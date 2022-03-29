import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
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
       <div className = "container">
    
    <div className="nav orderz" style={{marginLeft:"2%",marginBottom:"5%"}}>
      <button style={{borderRadius:"15px"}}>Active orders</button>
      <button style={{marginLeft:"4%",borderRadius:"15px",backgroundColor:"white"}}>Sheduled orders</button>

      </div>
        
        <div className = "card majorz"style={{maxWidth:"80%",marginLeft:"2%",borderRadius:"15px",borderColor:"yellow",marginTop:"10%"}}>
         <div className="iconz" />
        
              

       <div className="clarifyz"style={{ marginLeft:"23%",fontSize:"20px",marginTop:"8%",marginBottom:"5%",}}>
         <h5 >Are you satisfied with the the technician work?</h5>
         <div className="riengz">
           <button style={{marginLeft:"7%", borderRadius:"10px",backgroundColor:"yellow"}}>no</button>
           <button style={{marginLeft:"10%", borderRadius:"10px",backgroundColor:"white"}}>yes</button>
         </div>
         </div>



         </div> 


    
  
    


        </div>
        </div>
        </section>
     );
}

export default ActiveOrder;