import React from 'react';
import { Formik, Form } from 'formik';
import {Formi} from './Formi';
import * as Yup from 'yup';
import { BiMessageRounded } from "react-icons/bi";

function BookService() {
    const validate = Yup.object({
        Fname: Yup.string()
        .required('Field is required'),
        Sname: Yup.string()
        .required('Field is required'),
        number: Yup.string()
        .required('Field is required'),

        Mnumber: Yup.string(),
        other: Yup.string(),

        area: Yup.string( )
        .required('Field is required'),
        street: Yup.string( )
        .required('Field is required'),
        model: Yup.string( )
        .required('Field is required'),
        date: Yup.string( )
        .required('Field is required'),
        time: Yup.string( )
        .required('Field is required'),
        
        email: Yup.string()
        .email("Email is invalid")
        .required('Email field is required'),
        password: Yup.string()
        .min(6, "Password must be atleast 6 characters")
        .required("password field is required"),
        confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'password must match')
        . required('confirm password is required'),
    })
    
        return ( 
            <Formik
            
            initialValues={{
                Fname:"",
                Sname:"",
                number:"",
                Mnumber:"",
                email:"",
                password:"",
                confirmPassword:"",
                area:"",
                street:"",
                other:"",
                model:"",
                date:"",
                time:"",
               
            }}
            validationSchema={validate}
            >
             {formik => (
                        
                    <div className="page">
                        <div className="conte" style={{marginLeft:"25%",marginTop:"5%",background:"white", width:"60%", boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.5)" }}>
                  
                            <h4 style={{marginLeft:"20px", paddingTop:"10px", marginBottom:"0%"}}>Service Booking Details</h4><hr style={{border:"2px solid black", marginBottom:"20px"}} />
                            
                                         
   
                                   
                                        <Form style={{ marginLeft:"2%",marginTop:"15px"}}>

                                            <div style={{display:"flex", gap:"5%", marginBottom:"20px",overflow:"wrap" }}>
                                                <b>Personal details</b>
                                           <Formi  name="Fname" type="text" placeholder="First name" style={{background:"#e8e9ed", marginLeft:"7.5%"}}   />
                                           <Formi  name="Sname" type="text" placeholder="Surname" style={{background:"#e8e9ed"}} />
                                           <Formi  name="Sname" type="text" placeholder="Phone Number" style={{background:"#e8e9ed"}} />
                                           
                                            </div>

                                            
                                            <Formi label="Phone number" name="Mnumber" type="text" placeholder="Enter your M-pesa number." style={{width:"445px", marginBottom:"20px" , background:"#e8e9ed", marginLeft:"19.5%"}} />
                                           
                                            <div style={{display:"flex", gap:"5%", marginBottom:"20px",overflow:"wrap" }}>
                                                <b>Location</b>

                                                <div className='select'>
               <select  name='citizenship'  style={{background:"#e8e9ed",border:"0px solid white", marginLeft:"32.5%",fontSize:"16px",paddingTop:"10px",paddingBottom:"5px",borderRadius:"5px", width:"200px", marginBottom: "20px" }} id=" " >
                    <option value="selected">Location</option>
                    <option value="Kenya">Kenya</option>
                    <option value="Tanzania">Tanzania</option>
                    <option value="Uganda">Uganda</option>
                    <option value="Rwanda">Rwanda</option>
                    <option value="Ethiopia">Etiopia</option>
                    <option value="Somalia">Somalia</option>
                    <option value="Burundi">Burundi</option>
                    </select> <br/>
                    
               </div>
                                         <Formi  name="area" type="text" placeholder="Area e.g Kileleshwa" style={{background:"#e8e9ed", marginLeft:"24.5%"}} />
                                           <Formi  name="street" type="text" placeholder="Street/building" style={{background:"#e8e9ed", marginLeft:"28.5%"}} />
                                           </div>

                                           <Formi  name="other" type="text" placeholder="Other location details" style={{width:"445px", marginBottom:"20px" , background:"#e8e9ed", marginLeft:"19.5%"}} />
                                          
                                           <div style={{display:"flex", gap:"5%", marginBottom:"20px",overflow:"wrap" }}>
                                                <b>Problem <br /> description</b>
                                                <div className='select'>
               <select  name='citizenship'  style={{background:"#e8e9ed",border:"0px solid white", marginLeft:"25.5%",fontSize:"16px",paddingTop:"10px",paddingBottom:"5px",borderRadius:"5px", width:"200px", marginBottom: "20px" }} id=" " >
                    <option value="selected">Choose service</option>
                    <option value="Kenya">Kenya</option>
                    <option value="Tanzania">Tanzania</option>
                    <option value="Uganda">Uganda</option>
                    <option value="Rwanda">Rwanda</option>
                    <option value="Ethiopia">Etiopia</option>
                    <option value="Somalia">Somalia</option>
                    <option value="Burundi">Burundi</option>
                    </select> <br/>
                    
               </div>
               <div className='select'>
               <select  name='citizenship'  style={{background:"#e8e9ed",border:"0px solid white", marginLeft:"25.5%",fontSize:"16px",paddingTop:"10px",paddingBottom:"5px",borderRadius:"5px", width:"200px", marginBottom: "20px" }} id=" " >
                    <option value="selected">Description</option>
                    <option value="Kenya">Kenya</option>
                    <option value="Tanzania">Tanzania</option>
                    <option value="Uganda">Uganda</option>
                    <option value="Rwanda">Rwanda</option>
                    <option value="Ethiopia">Etiopia</option>
                    <option value="Somalia">Somalia</option>
                    <option value="Burundi">Burundi</option>
                    </select> <br/>
                    
               </div>                                                                   <div className='select'>
               <select  name='citizenship'  style={{background:"#e8e9ed",border:"0px solid white", marginLeft:"25.5%",fontSize:"16px",paddingTop:"10px",paddingBottom:"5px",borderRadius:"5px", width:"200px", marginBottom: "20px" }} id=" " >
                    <option value="selected">Model</option>
                    <option value="Kenya">Kenya</option>
                    <option value="Tanzania">Tanzania</option>
                    <option value="Uganda">Uganda</option>
                    <option value="Rwanda">Rwanda</option>
                    <option value="Ethiopia">Etiopia</option>
                    <option value="Somalia">Somalia</option>
                    <option value="Burundi">Burundi</option>
                    </select> <br/>
                    
               </div>  </div>

                                           <Formi  name="model" type="text" placeholder="Model decription" style={{width:"445px", marginBottom:"20px" , background:"#e8e9ed", marginLeft:"19.5%"}} />
                                          

                                            <div style={{marginLeft:"19.5%",marginBottom:"20px"}}>
                                            <label for="comment"><b>Exact problem</b></label>
                                           <textarea class="form-control" rows="2" name="text" style={{background:"#e8e9ed", width:"700px"}}></textarea>

                                            </div>

                                           <div style={{display:"flex", gap:"5%", marginBottom:"20px",overflow:"wrap" }}>
                                                <b>Date and time to <br /> receive technician</b>
                                           <Formi  name="date" type="date" placeholder="Select prefered date" style={{background:"#e8e9ed"}}   />
                                           <Formi  name="time" type="time" placeholder="Select prefered time" style={{background:"#e8e9ed"}} />
                                          </div>

                                           <BiMessageRounded style={{fontSize:"35px", float:"right",background:"green", color:"white", borderRadius:"50%",
                                          padding:"5px", zIndex:"2",marginTop:"-45px",marginRight:"-1.5%"}}/>
                                 </Form>
                                        
                        </div>
                        <button style={{background:"#f8b609", width:"200px", paddingTop:"3px", paddingBottom:"3px",borderRadius:"20px",
                                             border:"1px solid white",marginLeft:"50%", color:"white",fontSize:"22px"}}>Book technician</button>
                                         
                     </div>
                         
             )}
    
            </Formik>
         );
}

export default BookService;