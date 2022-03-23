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



function Profile() {
    const validate = Yup.object({
        Fname: Yup.string()
        .required('Field is required'),
        Sname: Yup.string()
        .required('Field is required'),
        number: Yup.string()
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

        location: Yup.string()
        .required('Field is required'),
        area: Yup.string()
        .required('Field is required'),
    })



    const [Fname, setFname] = useState("");
    const [Sname, setSname] = useState("");
    const [number, setnumber] = useState("");
    const [email, setemail] = useState("");
    const [location, setlocation] = useState("");
    const [area, setarea] = useState("");
    const [password, setpassword] = useState("");
    const [password_confirmation, setpassword_confirmation] = useState("");


    const pageSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();

  
        formData.append('Fname', Fname);
        formData.append('Sname', Sname);
        formData.append('number', number);
        formData.append('email', email);
        formData.append('location', location);
        formData.append('area', area);
        formData.append('password', password);
        formData.append('password_confirmation', password_confirmation);



        axios.post(`/api/user/update-profile`, formData).then(res => {
            // /${user.id}
            
            if (res.data.status === 200) {
      
              localStorage.setItem('auth_token', res.data.token);
              localStorage.setItem('auth_name', res.data.firstName);
      
            } else {
      
      
      
            }
      
          });
    }






    
        return ( 
            <section>
            <TechnicianSidebar/>
            <ProfileTechNav profile="Fundi" />
            
            <Formik
            
            initialValues={{
                Fname:"",
                Sname:"",
                number:"",
                email:"",
                password:"",
                area:"",
                location:"",
                confirmPassword:"",
               
            }}
            validationSchema={validate}

            onSubmit={pageSubmit}
            >
             {formik => (
                        
                    <div className="page">
                        <div className="conte" style={{marginLeft:"25%",marginTop:"7%",background:"white", width:"53%", boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.5)" }}>
                           
                        <FaWindowClose style={{float:"right", fontSize:"25px",borderRadius:"50px",marginTop:"10px", marginRight:"5px"}}/>

                            <h3 style={{marginLeft:"20px", paddingTop:"10px", marginBottom:"4%"}}>Edit Profile</h3>
                            
                                         
                                         <div className="wrapper">

                                            <input type="file" className="input" />
                                            <FaCamera style={{fontSize:"20px",borderRadius:"5px", marginTop:"65px",marginLeft:"55px", background:"black",color:"white", zIndex:"2"}}/>
                                            </div>
                                        
                                   
                                        <Form style={{ marginLeft:"15%",marginTop:"15px"}}>

                                            <div style={{display:"flex", gap:"3%", marginBottom:"20px",overflow:"wrap" }}>
                                           <Formi onChange={(e) => setFname(e.target.value)} label="First name" name="Fname" type="text" style={{background:"#e8e9ed"}}   />
                                           <Formi onChange={(e) => setSname(e.target.value)} label="Surname" name="Sname" type="text" style={{background:"#e8e9ed"}} />
                                           
                                            </div>



                                            
                                            <div style={{display:"flex", gap:"3%", marginBottom:"20px",overflow:"wrap" }}>
                                            <Formi onChange={(e) => setnumber(e.target.value)} label="Phone number" name="number" type="text" style={{width:"208px", marginBottom:"20px" , background:"#e8e9ed"}} />
                                           <Formi onChange={(e) => setlocation(e.target.value)} label="Location" name="location" type="text" style={{background:"#e8e9ed"}}   />
                                           <Formi onChange={(e) => setarea(e.target.value)} label="Area" name="area" type="text" style={{background:"#e8e9ed"}} />
                                           
                                            </div>
                                           <Formi onChange={(e) => setemail(e.target.value)} label="Email address" name="email" type="email" style={{width:"61%", marginBottom:"20px",background:"#e8e9ed"}} />
                                            
                                            <div style={{display:"flex", gap:"3%", marginBottom:"20px"}}>
                                           <Formi onChange={(e) => setpassword(e.target.value)} label="Password" name="password" type="password" style={{background:"#e8e9ed"}} />
                                           <Formi onChange={(e) => setpassword_confirmation(e.target.value)} label="Confirm Password" name="confirmPassword" type="password" style={{background:"#e8e9ed"}} />
                                            </div>

                                            <button type='submit' style={{background:"#f8b609", width:"200px", paddingTop:"3px", paddingBottom:"3px",borderRadius:"20px",
                                             border:"1px solid white",marginLeft:"15%", color:"white",fontSize:"22px", marginBottom:"40px"}}>Update</button>
                                         <BiMessageRounded style={{fontSize:"35px", float:"right",background:"green", color:"white", borderRadius:"50%",
                                          padding:"5px", zIndex:"2",marginTop:"55px",marginRight:"-1.5%"}}/>
                                 </Form>
                                        
                        </div>
                     </div>
                         
             )}
    
            </Formik>

            </section>
         );
}

export default Profile;