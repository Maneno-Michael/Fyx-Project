import React from "react";
import { Card,Container,Row,Col } from "react-bootstrap";
import * as fa from "react-icons/fa";
import { IoPersonCircle} from "react-icons/io5"; 
const ProfileNav = ({profile})=>{
    return(
    <Container>
        <Card className="shadow p-3 mb-5 bg-body rounded">
                <Card.Body>
                <Row>
                  <Col lg={1} md={1} >
                      <a href="/home" ><fa.FaHome  style={{ fontSize:"30px", color:"black"}}/></a>
                  </Col>  
                  <Col lg={9} md={6}></Col>
                  <Col lg={1} md={1}>
                  <IoPersonCircle  style={{ fontSize:"30px", color:"black"}}/>
                  </Col>
                  <Col lg={1} md={3}>Hi {profile} </Col>
                </Row>
                </Card.Body>
        </Card>
     </Container>
    )
}
export default ProfileNav; 