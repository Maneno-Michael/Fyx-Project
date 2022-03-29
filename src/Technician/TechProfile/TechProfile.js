import React from 'react';
import { Formik, Form } from 'formik';
import {Formi} from './Formi';
import * as Yup from 'yup';
import { FaCamera } from "react-icons/fa";
import { FaWindowClose } from "react-icons/fa";
import { BiMessageRounded } from "react-icons/bi";
import axios from 'axios';
import TechnicianSidebar from '../../components/technicianSidebar';
import ProfileTechNav from '../../components/profileTechNav';
import "./TechProfile.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// const user = JSON.parse(localStorage.getItem('auth_userName'));

function Profile() {
    const validate = Yup.object({
        first_name: Yup.string()
        .required('Field is required'),
        surname: Yup.string()
        .required('Field is required'),
        address: Yup.string()
        .required('Field is required'),
        phone: Yup.string()
        .required('Field is required'),
        email: Yup.string()
        .email("Email is invalid")
        .required('Email field is required'),
        password: Yup.string()
        .min(6, "Password must be atleast 6 characters")
        .required("password field is required"),
        password_confirmation: Yup.string()
        .oneOf([Yup.ref('password'), null], 'password must match')
        . required('confirm password is required'),
    })



    const navigate = useNavigate();

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
        // console.log('res', res)
    
        
        if(res.status === 200)
        {
    
    
            alert("updated successfully");
            
              navigate('/adminlogin');
    
    
         }else
        {
    
            alert("Oops you have entered invalid credentials");
    
        }
    
    });
    
    }
    
  


    return ( 
        <div className=''>

        <TechnicianSidebar/>
        <ProfileTechNav profile="" />

  
        <Formik
        
        initialValues={{
            first_name:"",
            surname:"",
            phone:"",
            email:"",
            address:"",
            password:"",
            password_confirmation:"",
           
        }}
        validationSchema={validate}
        
        >
         {formik => (
                    
                <div className="page">
                    <div className="conte" style={{marginLeft:"25%",marginTop:"7%",background:"white", width:"60%", boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.5)" }}>
                       
                    <FaWindowClose style={{float:"right", fontSize:"25px",borderRadius:"50px",marginTop:"10px", marginRight:"5px"}}/>

                        <h3 style={{marginLeft:"20px", paddingTop:"10px", marginBottom:"4%"}}>Edit Profile</h3>
                        
                                     
                                     <div className="wrapper">

                                        <input type="file" className="input" accept='image/*'/>
                                        <FaCamera style={{fontSize:"20px",borderRadius:"5px", marginTop:"75px",marginLeft:"60px", background:"black",color:"white", zIndex:"2"}}/>
                                        </div>
                                    
                               
                                    <Form onSubmit={pageSubmit} style={{ marginLeft:"25%",marginTop:"15px"}}>

                                        <div style={{display:"flex", gap:"10%", marginBottom:"20px",overflow:"wrap" }}>
                                       <Formi  onChange={handleIput} value={reg.first_name} label="First name" name="first_name" type="text" style={{background:"#e8e9ed"}}   />
                                       <Formi onChange={handleIput} value={reg.surname} label="Surname" name="surname" type="text" style={{background:"#e8e9ed"}} />
                                       
                                        </div>
                                        <div style={{display:"flex", gap:"9.7%", marginBottom:"20px",overflow:"wrap" }}>
                                        <Formi  onChange={handleIput} value={reg.phone} label="Phone number" name="phone" type="text" style={{width:"225px", marginBottom:"20px" , background:"#e8e9ed"}} />
                                        <Formi onChange={handleIput} value={reg.address} label="Address" name="address" type="text" style={{width:"235px", marginBottom:"20px",background:"#e8e9ed"}} />
                                     
                                        </div>
                                        <Formi onChange={handleIput} value={reg.email} label="Email address" name="email" type="email" style={{width:"530px", marginBottom:"20px",background:"#e8e9ed"}} />
                                     

                                        <div style={{display:"flex", gap:"10%", marginBottom:"20px"}}>
                                       <Formi onChange={handleIput} value={reg.password} label="Password" name="password" type="password" style={{background:"#e8e9ed"}} />
                                       <Formi onChange={handleIput} value={reg.password_confirmation} label="Confirm Password" name="password_confirmation" type="password" style={{background:"#e8e9ed"}} />
                                        </div>

                                        <button type='submit' style={{background:"#f8b609", width:"200px", paddingTop:"3px", paddingBottom:"3px",borderRadius:"20px",
                                         border:"1px solid white",marginLeft:"19%", color:"white",fontSize:"22px", marginBottom:"40px"}}>Update</button>
                                     <BiMessageRounded style={{fontSize:"35px", float:"right",background:"green", color:"white", borderRadius:"50%",
                                    padding:"5px", zIndex:"2",marginTop:"55px",marginRight:"-1.5%"}}/>
                            </Form>
                                    
                    </div>
                 </div>
                     
         )}

        </Formik>
        </div>
     );
}

export default Profile;