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
       <Link to="/ActiveOrders"> <button style={{borderRadius:"15px"}}>Active Orders</button>
       </Link>
      <button style={{marginLeft:"4%",borderRadius:"15px",backgroundColor:"white"}}>Sheduled orders</button>

      </div>
      <div className = "card mb-4 shadow-sm"style={{maxWidth:"80%",marginLeft:"10%",borderRadius:"15px"}}>
    <div className = "orders text-center">
        <img id = "ordersimage" src ={mpmba}/>

        <h4>You don't have an Active Order</h4>
        {/* book service link */}
        <Link to="/BookService"> <button style={{borderRadius:"15px",marginLeft:"5%",backgroundColor:"white",borderColor:"yellow"}}>
                      Book Service
                    </button>
                    </Link>
                   
                 {/* end link */}
    </div>
    </div>
</div>



            
        </div>
        </section>
     );
}

export default ActiveOrder;