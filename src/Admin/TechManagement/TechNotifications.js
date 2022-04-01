import React from 'react';
import SidebarAdmin from '../../components/sidebarAdmin';
import ProfileNavAdmin from '../../components/profileNavAdmin';
import 'bootstrap/dist/css/bootstrap.min.css';



function TechNotifications() {



    return ( 
        <div>
           <SidebarAdmin/>
             <ProfileNavAdmin/> 


             <div className='tabs' style={{marginTop:"0%", marginLeft:"20%",display:"flex", gap:"5%"}}> 

<div><h3><b>Notifications</b></h3></div>

</div>
<div className='d-flex flex-row ' style={{marginLeft:"20%"}}>Dashboard / Technician Managment/<h5 style={{color:"#fca311"}}>Notifications</h5></div>
<hr style={{width:"60%",marginLeft:"20%",border:"1px solid black"}} />



 <div  className='tabs' style={{marginTop:"3%", marginLeft:"20%",display:"flex", gap:"5%"}}> 

    
   
{/* modal/First modal */}

  <div className="modal fade " id="sonicModalToggle" aria-hidden="true" aria-labelledby="sonicModalToggleLabel" tabIndex="-1">
   <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="sonicModalToggleLabel">NOTIFICATION TO THE TECHNICIAN</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
                     <select className="form-select -sm" aria-label="Default select example-sm">
                            <option selected>Fundi Technician</option>
                            <option value="1">Asma ab</option>
                            <option value="2">Derick Ambeyi</option>
                            <option value="3">John Doe</option>
                            </select>
                                  <h5 >Enter message to be sent</h5>
                                  <form className="form-floating container " >
                                  <textarea className="form-control" placeholder="Comment on your experience" id="floatingTextarea2" style={{height: "100px"}}></textarea>
                                 </form>
                                  {/* <div className="form-floating">
                                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
                                    <label for="floatingTextarea2">Comments</label>
                                    </div> */}
    {/* end of first modal */}
    {/* second modal */}
      </div>
      <div className="modal-footer">
        <button className="btn btn-outline-warning rounded-pill" data-bs-target="#sonicModalToggle2" data-bs-toggle="modal">send</button>
      </div>
      </div>
      </div>
      </div>
                          <div className="modal fade" id="sonicModalToggle2" aria-hidden="true" aria-labelledby="sonicModalToggleLabel2" tabIndex="-1">
                           <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                            <div className="modal-header">
                               </div>
                             <div className="modal-body">
                                      message sent
       
                                    </div>
           <div className="modal-footer">
          </div>
          </div>
          </div>
          </div>
          <a className="btn btn-outline-warning rounded-pill" data-bs-toggle="modal" href="#sonicModalToggle" role="button">Send Notification</a>
 

</div>



</div>
     );
}

export default TechNotifications;