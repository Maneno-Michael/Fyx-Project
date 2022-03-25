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
    
    <div className="nav order" style={{marginLeft:"2%",marginBottom:"5%"}}>
      <button style={{borderRadius:"15px"}}>Active orders</button>
      <button style={{marginLeft:"4%",borderRadius:"15px",backgroundColor:"white"}}>Sheduled orders</button>

      </div>
        
        <div className = "card major"style={{maxWidth:"80%",marginLeft:"2%",borderRadius:"15px",borderColor:"yellow"}}>
         <div className="icon" />
        
              

       <div className="clarify"style={{marginLeft:"23%",fontSize:"20px",marginTop:"4%",marginBottom:"2%"}}>
         <h5 >Are you satisfied with the the technician work?</h5>
         <div className="rieng">
           <button style={{marginLeft:"7%", borderRadius:"10px",backgroundColor:"white"}}>no</button>
           <button style={{marginLeft:"10%", borderRadius:"10px",backgroundColor:"yellow"}}>yes</button>
         </div>
         </div>



         </div> 


    
  
    


        </div>
        </div>
        </section>
     );
}

export default ActiveOrder;