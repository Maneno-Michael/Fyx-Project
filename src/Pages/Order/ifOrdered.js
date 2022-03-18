 import React from "react";
import * as fa from "react-icons/fa";
import Table from 'react-bootstrap/Table'
import { IsScheduled,NotScheduled } from "./orderedOrNot";

function IfOrdered(props){
const schedule= props.scheduled;

            
    if (schedule){
        return <IsScheduled/>
    }
    
        return <NotScheduled/>
    
}


export default IfOrdered; 