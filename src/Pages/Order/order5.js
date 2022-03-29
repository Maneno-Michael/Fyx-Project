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
    <Link to="/ActiveOrders"> <button style={{borderRadius:"15px"}}>Active Orders</button>
       </Link>
      <button style={{marginLeft:"4%",borderRadius:"15px",backgroundColor:"white"}}>Sheduled orders</button>

      </div>
        
        <div className = "card w-75 ">
        <div className="invoice" style={{marginLeft:"20%",maxWidth:"80%"}}>
          <div className="headz">
            <h1 style={{}}>Summary for Order No 01113</h1>
          </div>
        </div>
        

           </div>
          </div>
         



         


    
  
    

      
       </div>
        </section>
     );
}

export default ActiveOrder;