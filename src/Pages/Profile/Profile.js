import React, { useEffect } from 'react';
import { Formik, Form } from 'formik';
import {Formi} from './Formi';
import * as Yup from 'yup';
import { FaCamera } from "react-icons/fa";
import { FaWindowClose } from "react-icons/fa";
import { BiMessageRounded } from "react-icons/bi";
import { useState } from "react";
import "./Profile.css";
import Sidebar from '../../components/Sidebar';
import ProfileNav from '../../components/profileNav';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


function Profile() {


    const navigate = useNavigate();

    const [errors, seterrors] = useState({});
    const [isSub, setsub] = useState(false);
    const [reg, setregInput] = useState({
        first_name:'',
        surname:'',
       
        phone:'',
        address:'',
        email:'',
       
        password:'',
        password_confirmation:'',
        
    }); 
    
    const handleIput = (e) => {
        e.persist();
        setregInput({...reg, [e.target.name]: e.target.value})
    }
    
    const pageSubmit = (e) => {
    e.preventDefault();
    seterrors(validate(reg));
    setsub(true);
    
    const details = {
        first_name: reg.first_name,
        surname: reg.surname,
        phone: reg.phone,
        email: reg.email,
      
        address: reg.address,
        password: reg.password,
        password_confirmation: reg.password_confirmation,
    }
    //    console.log(errors); 
    
    
    axios.put(`/api/customers/1`, details ).then(res =>{
        
    
        
        if(res.status === 200)
        {
    
    
            alert("updated successfully");
            
              navigate('/home');
    
    
         }else
        {
    
            alert("Oops you have entered invalid credentials");
    
        }
    
    }).catch(res =>{

      alert("Invalid credentials");
    
    });
    
    }
    useEffect(()=>{
        // console.log(errors);
          if(Object.keys(errors).length === 0 && isSub){
            // console.log(reg);
          }
        },[errors])
        
    
        const validate = ( x  ) =>{ 
        
          const err = {};
          const regrex =  /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ ;

          if(!x.first_name){
            err.first_name =" First name field is required"
          }
          if(!x.surname){
            err.surname =" surname field is required"
          }
          if(!x.phone){
            err.phone =" Phone field is required"
          }
          if(!x.address){
            err.address =" Address field is required"
          }
          if(!x.password_confirmation){
            err.password_confirmation =" Confirm password field is required"
          }
          if(!x.email){
            err.email =" Email is required"
          }else if( !regrex.test(x.email) )
          {
            err.email =" Not a valid email" 
          }
          if(!x.password){
            err.password =" password is required";
          }else if(x.password.length < 4 )
          {
            err.password =" Must be more than 4 characters"
          }
        
          return err; 
        }

  
        return ( 
            <div className=''>


            <Sidebar/>
           
            <ProfileNav profile="Nicole" />

                        
                    <div className="page">
                        <div className="conte" style={{marginLeft:"25%",marginTop:"7%",background:"white", width:"60%", boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.5)" }}>
                           
                        <FaWindowClose style={{float:"right", fontSize:"25px",borderRadius:"50px",marginTop:"10px", marginRight:"5px"}}/>

                            <h3 style={{marginLeft:"20px", paddingTop:"10px", marginBottom:"4%"}}>Edit Profile</h3>
                            
                                         
                                         <div className="wrapper">

                                            <input type="file" className="input" accept='image/*'/>
                                            <FaCamera style={{fontSize:"20px",borderRadius:"5px", marginTop:"75px",marginLeft:"60px", background:"black",color:"white", zIndex:"2"}}/>
                                            </div>
                                     
                                        <form onSubmit={pageSubmit} style={{ marginLeft:"25%",marginTop:"15px"}} action="">

                                            <div style={{display:"flex", gap:"10%", marginBottom:"5px",overflow:"wrap" }}>
                                               
                                               
                                                <div>
                                                  First name <br />
                                                    <input style={{background:"#e8e9ed",border:"1px solid gray",paddingTop:"5px",paddingBottom:"5px",borderRadius:"5px"}} onChange={handleIput} name='first_name' value={reg.first_name} type="text" />
                                                    
                                                <p style={{color:"red"}}>{errors.first_name}</p>    
                                                </div>
                                                
                                                <div>
                                                   Surname <br />
                                                    <input style={{background:"#e8e9ed",border:"1px solid gray",paddingTop:"5px",paddingBottom:"5px",borderRadius:"5px"}} onChange={handleIput} name='surname' value={reg.surname} type="text" />
                                                     <p style={{color:"red"}}>{errors.surname}</p>
                                                </div>
                                                
                                              </div>

                                              <div style={{display:"flex", gap:"10%", marginBottom:"5px",overflow:"wrap" }}>
                                               
                                               
                                               <div>
                                                 Phone Number <br />
                                                   <input style={{background:"#e8e9ed",border:"1px solid gray",paddingTop:"5px",paddingBottom:"5px",borderRadius:"5px"}} onChange={handleIput} name='phone' value={reg.phone} type="text" />
                                                   
                                               <p style={{color:"red"}}>{errors.phone}</p>    
                                               </div>
                                               
                                               <div>
                                                  Address <br />
                                                   <input style={{background:"#e8e9ed",border:"1px solid gray",paddingTop:"5px",paddingBottom:"5px",borderRadius:"5px"}} onChange={handleIput} name='address' value={reg.address} type="text" />
                                                    <p style={{color:"red"}}>{errors.address}</p>
                                               </div>
                                               
                                             </div>
                                             <div style={{display:"flex", gap:"10%", marginBottom:"5px",overflow:"wrap" }}>
                                               
                                               
                                               <div>
                                                 Email Address <br />
                                                   <input style={{background:"#e8e9ed",border:"1px solid gray",paddingTop:"5px",paddingBottom:"5px",borderRadius:"5px",width:"235%"}} onChange={handleIput} name='email' value={reg.email} type="text" />
                                                   
                                               <p style={{color:"red"}}>{errors.email}</p>    
                                               </div>
                                               
                                            
                                               
                                             </div>
                                             <div style={{display:"flex", gap:"10%", marginBottom:"20px",overflow:"wrap" }}>
                                               
                                               
                                               <div>
                                                 Password <br />
                                                   <input style={{background:"#e8e9ed",border:"1px solid gray",paddingTop:"5px",paddingBottom:"5px",borderRadius:"5px"}} onChange={handleIput} name='password' value={reg.password} type="text" />
                                                   
                                               <p style={{color:"red"}}>{errors.password}</p>    
                                               </div>
                                               
                                               <div>
                                                  Confirm Password <br />
                                                   <input style={{background:"#e8e9ed",border:"1px solid gray",paddingTop:"5px",paddingBottom:"5px",borderRadius:"5px"}} onChange={handleIput} name='password_confirmation' value={reg.password_confirmation} type="text" />
                                                    <p style={{color:"red"}}>{errors.password_confirmation}</p>
                                               </div>
                                               
                                             </div>


                                            <button type='submit' style={{background:"#f8b609", width:"200px", paddingTop:"3px", paddingBottom:"3px",borderRadius:"20px",
                                             border:"1px solid white",marginLeft:"19%", color:"white",fontSize:"22px", marginBottom:"40px"}}>Update</button>
                                         <BiMessageRounded style={{fontSize:"35px", float:"right",background:"green", color:"white", borderRadius:"50%",
                                        padding:"5px", zIndex:"2",marginTop:"55px",marginRight:"-1.5%"}}/>
                               
                                </form>          
                        </div>
                     </div>
            </div>
         );
}

export default Profile;