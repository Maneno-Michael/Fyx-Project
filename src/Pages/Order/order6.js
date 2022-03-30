import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './Order.css';
import Sidebar from '../../components/Sidebar';
import ProfileNav from '../../components/profileNav';
import mini from "../../Assets/images/balloons.png";



function order6() {
    return ( 
       
        <section>
            <Sidebar/>
        <ProfileNav profile="Nicole" />
       {/* image ballon */}
      
            
         <div className="container">
              <div style={{display:"flex",gap:"40px"}}>

              <div className="minions"style={{marginLeft:"20%",maxWidth:"80%",marginTop:"10%"}}>
             <img   src={mini} height="450px" width="450px"/>
             </div>

             <div>
               <div  style={{marginTop:"100%",}} >
               <h1 style={{}}>THANK YOU</h1>
                <h2  >FOR CHOOSING</h2> 
                <h3 style={{marginLeft:"20%"}} >US!</h3> 
               
                </div>
<div className="card reciept" style={{borderRadius:"20px",borderColor:"yellow",}}>
  <div className="reciept"style={{marginTop:"10px"}} >
    <p>Your reciept will be sent to your email.</p>
  </div>
</div>

             </div>
            
            
            
             </div>
             </div>
              
     
     
                 
                
                 
               
           
          
    
        
        </section>
     );
}

export default order6;