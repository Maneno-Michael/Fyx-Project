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
        
        <div className = "card w-50 rounded">
        <div className="invoice" style={{marginLeft:"20%",maxWidth:"80%"}}>
          <div className="headz">
            <h2 style={{textDecoration:"underline"}}>Summary for Order No 01113</h2>
          </div>
          <h6>Service charge</h6>
          <div class="row row-cols-2">
    <div class="col">
   <p1>Assesment fee</p1><br></br> 
   <p2>Labour fee</p2> 
    </div>
    <div class="col ">ksh 500.00
    <br></br>ksh 3000.00
    </div>

    <h6>Service charge</h6>
    <div class="col"></div>
    <div class="col">E.g Tv screen e.t.c</div>
    <div class="col">ksh 20,000</div>
  </div>


  <div class="col"></div>
    <div class="col">Total amount</div>
    <div class="col">ksh 23,500</div>
  </div>

  
   <div className="col wez" style={{marginLeft:"25%"}}>
     <h3>Mode of payment</h3>
   </div>
          <div className="lipah"style={{marginLeft:"28%"}}>
          <div className='btn btn-outline-warning rounded-pill ms-5 text-black'> M-pesa</div>
        <div className='btn btn-outline-warning rounded-pill ms-3 text-black'  >Cash</div>
          </div>


        
  
        
            
           </div>
           <div className="lipahz"style={{marginLeft:"22%",marginTop:"10%"}}>
          <div className='btn btn-outline-warning rounded-pill ms-5 text-black'> Order Complete</div>
          </div>
   
   
          </div>
         



         


    
  
    

      
       </div>
        </section>
     );
}

export default ActiveOrder;