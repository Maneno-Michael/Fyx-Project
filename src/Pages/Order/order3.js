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
    <Link to="/ActiveOrders"> <button style={{borderRadius:"15px"}}>Active Orders</button>
       </Link>
      <button style={{marginLeft:"4%",borderRadius:"15px",backgroundColor:"white"}}>Sheduled orders</button>

      </div>
        
        <div className = "card majo border border-warning "style={{maxWidth:"80%",marginLeft:"2%",borderRadius:"15px"}}>
         <div className="icon" />
        
              

       <div className="clarify"style={{marginLeft:"23%",fontSize:"20px",marginTop:"4%",marginBottom:"2%"}}>
         <h5 >Are you satisfied with the the technician work?</h5>
         <div className="satisfied">
           <button style={{marginLeft:"7%", borderRadius:"10px",backgroundColor:"white"}}>no</button>
          
           <button onClick={()=>Toggle()} style={{marginLeft:"10%", borderRadius:"10px",backgroundColor:"yellow"}}>yes</button>
            { modal ? <div className="modal">yes</div> : null}
         </div>
         </div>



         </div> 


    
  
    


        </div>
        </div>
        </section>
     );
}

export default Order3;



