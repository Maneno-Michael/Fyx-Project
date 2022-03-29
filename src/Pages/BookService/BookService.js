import React from 'react';
import { Formik, Form } from 'formik';
import {Formi} from './Formi';
import * as Yup from 'yup';
import { BiMessageRounded } from "react-icons/bi";
import Sidebar from '../../components/Sidebar';
import ProfileNav from '../../components/profileNav';
import axios from 'axios';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function BookService() {


    const navigate = useNavigate();
    const validate = Yup.object({
        first_name: Yup.string()
        .required('Field is required'),
        surname: Yup.string()
        .required('Field is required'),
        phone: Yup.string()
        .required('Field is required'),

        mpesa_number: Yup.string()
        .required('Field is required'),
        service_id: Yup.string()
        .required('Field is required'),
        category_id: Yup.string()
        .required('Field is required'),

        brand_id: Yup.string( )
        .required('Field is required'),
        service_extra_details: Yup.string( )
        .required('Field is required'),
        area: Yup.string( )
        .required('Field is required'),
        street_building: Yup.string( )
        .required('Field is required'),
        location_extra_details: Yup.string( )
        .required('Field is required'),
        model_number: Yup.string( )
        .required('Field is required'),
        date_available: Yup.string( )
        .required('Field is required'),
        time_available: Yup.string( )
        .required('Field is required'),

    })



    const [booking, setbooking] = useState({
        first_name:"",
        surname:"",
        phone:"",
        mpesa_number:"",

        location_id:"",
        area:"",
        street_building:"",
        location_extra_details:"",

        service_id:"",
        brand_id:"",
        model_number:"",
        service_extra_details:"",
        category_id:"",
       
       
        date_available:"",
        time_available:"",
        
    }); 
    
    const handleIput = (e) => {
        e.persist();
        setbooking({...booking, [e.target.name]: e.target.value})
    }
    
    const bookingSubmit = (e) => {
    e.preventDefault();
    
    const details = {
        first_name: booking.first_name,
        surname: booking.surname,
        phone: booking.phone,
        mpesa_number: booking.mpesa_number,
      
        location_id: booking.location_id,
        area: booking.area,
        street_building: booking.street_building,
        location_extra_details: booking.location_extra_details,

        service_id: booking.service_id,
        brand_id: booking.brand_id,
        model_number: booking.model_number,
        service_extra_details: booking.service_extra_details,
        category_id: booking.category_id,

        date_available: booking.date_available,
        time_available: booking.time_available,
        request_callback: 0,

    }
    //    console.log(errors); 
    
    
    axios.post(`/api/customer/orders`, details ).then(res =>{
        // console.log('res', res)
    
        
        if(res.status === 201)
        {
    
    
            alert("created successfully");
            
                navigate('/home');
    
         }else
        {
    
            alert("Oops you have entered invalid credentials");
    
        }
    
    });
    
    }
    








    
        return ( 
            <div>
             <Sidebar/>
            <ProfileNav profile="Nicole" />

            <Formik
            
            initialValues={{
                first_name:"",
                surname:"",
                phone:"",
                mpesa_number:"",

                location_id:"",
                area:"",
                street_building:"",
                location_extra_details:"",

                service_id:"",
                brand_id:"",
                model_number:"",
                service_extra_details:"",
                category_id:"",
               
               
                date_available:"",
                time_available:"",
               
            }}
            validationSchema={validate}
            >
             {formik => (
                        
                    <div className="page">
                        <div className="conte" style={{marginLeft:"25%",marginTop:"5%",background:"white", width:"60%", boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.5)" }}>
                  
                            <h4 style={{marginLeft:"20px", paddingTop:"10px", marginBottom:"0%"}}>Service Booking Details</h4><hr style={{border:"2px solid black", marginBottom:"20px"}} />
                            
                                         
   
                                   
                                        <Form  style={{ marginLeft:"2%",marginTop:"15px"}}>

                                            <div style={{display:"flex", gap:"2%", marginBottom:"20px",overflow:"wrap" }}>
                                                <b>Personal details</b>
                                           <Formi onChange={handleIput} value={booking.first_name}  name="first_name" type="text" placeholder="First name" style={{background:"#e8e9ed", marginLeft:"3%"}}   />
                                           <Formi onChange={handleIput} value={booking.surname}   name="surname" type="text" placeholder="Surname" style={{background:"#e8e9ed"}} />
                                           <Formi onChange={handleIput} value={booking.phone}  name="phone" type="text" placeholder="Phone Number" style={{background:"#e8e9ed"}} />
                                           
                                            </div>

                                            
                                            <Formi onChange={handleIput} value={booking.mpesa_number}  label="Phone number" name="mpesa_number" type="text" placeholder="Enter your M-pesa number." style={{width:"50.5%", marginBottom:"20px" , background:"#e8e9ed", marginLeft:"16.8%"}} />
                                           
                                            <div style={{display:"flex", gap:"2%", marginBottom:"20px",overflow:"wrap" }}>
                                                <b>Location</b>

                                                <div className='select'>
               <select onChange={handleIput} value={booking.location_id}   name='location_id'  style={{background:"#e8e9ed",border:"0px solid white", marginLeft:"28.5%",fontSize:"16px",paddingTop:"10px",paddingBottom:"5px",borderRadius:"5px", width:"230px", marginBottom: "20px" }} id=" " >
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
                                         <Formi onChange={handleIput} value={booking.area}   name="area" type="text" placeholder="Area e.g Kileleshwa" style={{background:"#e8e9ed", marginLeft:"25.5%"}} />
                                           <Formi onChange={handleIput} value={booking.street_building}  name="street_building" type="text" placeholder="Street/building" style={{background:"#e8e9ed", marginLeft:"24.5%"}} />
                                           </div>

                                           <Formi onChange={handleIput} value={booking.location_extra_details}  name="location_extra_details" type="text" placeholder="Other location details" style={{width:"50.5%", marginBottom:"20px" , background:"#e8e9ed", marginLeft:"16.5%"}} />
                                          
                                           <div style={{display:"flex", gap:"2%", marginBottom:"20px",overflow:"wrap" }}>
                                                <b>Problem <br /> description</b>
                                                <div className='select'>
               <select onChange={handleIput} value={booking.service_id}   name='service_id'  style={{background:"#e8e9ed",border:"0px solid white", marginLeft:"17%",fontSize:"16px",paddingTop:"10px",paddingBottom:"5px",borderRadius:"5px", width:"230px", marginBottom: "20px" }} id=" " >
                    <option value="selected">Choose service</option>
                    <option value="Kenya">Repair</option>
                    <option value="Tanzania">Maintainance</option>
                    <option value="Uganda">Installation</option>
            
                    </select> <br/>
                    
               </div>
               <div className='select'>
               <select onChange={handleIput} value={booking.brand_id}  name='brand_id'  style={{background:"#e8e9ed",border:"0px solid white", marginLeft:"15%",fontSize:"16px",paddingTop:"10px",paddingBottom:"5px",borderRadius:"5px", width:"230px", marginBottom: "20px" }} id=" " >
                    <option value="selected">Description</option>
                    <option value="Kenya">Tv</option>
                    <option value="Tanzania">Microwave</option>
                    <option value="Uganda">Fridge</option>
                    <option value="Rwanda">Washing Machine</option>
                 
                    </select> <br/>
                    
               </div>                                                                   <div className='select'>
               <select onChange={handleIput} value={booking.model_number}   name='model_number'  style={{background:"#e8e9ed",border:"0px solid white", marginLeft:"15%",fontSize:"16px",paddingTop:"10px",paddingBottom:"5px",borderRadius:"5px", width:"230px", marginBottom: "20px" }} id=" " >
                    <option value="selected">Model</option>
                    <option value="Kenya">Sumsung-45-G3</option>
                    <option value="Tanzania">LG-345</option>
                    <option value="Uganda">Sayona-23-gray</option>
                    <option value="Rwanda">Sony12-NXT</option>
                    <option value="Ethiopia">Peak-Tech3</option>
                 
                    </select> <br/>
                    
               </div>  </div>

                                           <Formi onChange={handleIput} value={booking.category_id}  name="category_id" type="text" placeholder="Model decription" style={{width:"51%", marginBottom:"20px" , background:"#e8e9ed", marginLeft:"16%"}} />
                                          

                                            <div style={{marginLeft:"16%",marginBottom:"20px"}}>
                                            <label htmlFor="comment"><b>Exact problem</b></label>
                                           <textarea  onChange={handleIput} value={booking.service_extra_details} className="form-control" rows="2" name="service_extra_details" style={{background:"#e8e9ed", width:"93%"}}></textarea>

                                            </div>

                                           <div style={{display:"flex", gap:"5%", marginBottom:"20px",overflow:"wrap" }}>
                                                <b>Date and time to <br /> receive technician</b>
                                           <Formi onChange={handleIput} value={booking.date_available}  name="date_available" type="date" placeholder="Select prefered date" style={{background:"#e8e9ed"}}   />
                                           <Formi onChange={handleIput} value={booking.time_available}  name="time_available" type="time" placeholder="Select prefered time" style={{background:"#e8e9ed"}} />
                                          </div>

                                           <BiMessageRounded style={{fontSize:"35px", float:"right",background:"green", color:"white", borderRadius:"50%",
                                          padding:"5px", zIndex:"2",marginTop:"-45px",marginRight:"-1.5%"}}/>
                                 </Form>
                                        
                        </div>
                        <button onClick={bookingSubmit} style={{background:"#f8b609", width:"200px", paddingTop:"3px", paddingBottom:"3px",borderRadius:"20px",
                                             border:"1px solid white",marginLeft:"50%", color:"white",fontSize:"22px"}}>Book technician</button>
                                         
                     </div>
                         
             )}
    
            </Formik>
            </div>
         );
}

export default BookService;