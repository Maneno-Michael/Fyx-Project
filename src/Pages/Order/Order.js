import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './Order.css';
import Sidebar from '../../components/Sidebar';
import ProfileNav from '../../components/profileNav';
import mini from "../../Assets/images/balloons.png";


import { Link,} from "react-router-dom";
function ActiveOrder() {
    return ( 
       
        <section>
            <Sidebar/>
        <ProfileNav profile="Nicole" />
       {/* image ballon */}
      
            

              
              
               <div className="minions"style={{marginLeft:"20%",maxWidth:"80%",marginTop:"10%"}}>
             <img   src={mini} height="450px" width="450px"/>
             </div>
      <div className="col">
             <div className="texz"style={{marginLeft:"50%",}}>
                 
             </div>
            </div>
                 
                
                 
               
           
          
    
        
        </section>
     );
}

export default ActiveOrder;