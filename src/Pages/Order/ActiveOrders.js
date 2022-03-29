import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import mpmba from "../../Assets/images/ordersbgimg.png";
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
       <div className="nav orderz" style={{marginLeft:"2%",marginBottom:"5%"}}>
       <a  href='/ActiveOrders' className='btn btn-outline-warning rounded-pill ms-1 text-black'> Active orders</a>
       <a  href='/scheduledorder' className='btn btn-outline-warning rounded-pill ms-2 text-black'>Sheduled orders</a>


      </div>
      <div className = "card mb-4 shadow-sm"style={{maxWidth:"80%",marginLeft:"10%",borderRadius:"15px"}}>
    <div className = "orders text-center">
        <img id = "ordersimage" src ={mpmba}/>

        <h4>You don't have an Active Order</h4>
        {/* book service link */}
        <a href='/bookservice' className='btn btn-outline-warning rounded-pill text-black text-center mb-5 mt-5'> Book Service</a>
                   
                   
                   
                 {/* end link */}
    </div>
    </div>
</div>



            
        </div>
        </section>
     );
}

export default ActiveOrder;