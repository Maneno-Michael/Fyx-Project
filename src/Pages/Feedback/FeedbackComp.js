import React from "react";
import { Card,Col,Row,Container } from "react-bootstrap";

function FeedbackForm({orderNo,servedBy}){
    const date = new Date();
    return (
        <div>
             <h2>Leave feedback on our service.</h2>
                    <Card>
                    <Container>
                        <Card.Body>
                            <div>Feedback form For</div>
                            <Row>
                                <Col md={6} lg={6}>
                                    <div>Order No</div>
                                </Col>
                                <Col md={6} lg={6}>
                                    <div>{orderNo}</div>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6} lg={6}>
                                    <div>Served by:</div>
                                </Col>
                                <Col md={6} lg={6}>
                                    <div>{servedBy}</div>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6} lg={6}>
                                    <div>Date:</div>
                                </Col>
                                <Col md={6} lg={6}>
                                    <div>{date.toLocaleDateString()}</div>
                                </Col>
                            </Row>
                            <div className='pt-5'>Fyx Technician:</div>
                            <form className="form-floating container">
                                <textarea className="form-control" placeholder="Comment on your experience" id="floatingTextarea2" style={{height: "100px"}}></textarea>
                                <input value="submit" type="submit" className="btn btn-warning text-center mt-3"/>
                            </form>
                            <div className='pt-5'>Fyx Website:</div>
                            <form className="form-floating container ">
                                <textarea className="form-control" placeholder="Comment on your experience" id="floatingTextarea2" style={{height: "100px"}}></textarea>
                                <input value="submit" type="submit" className="btn btn-warning text-center mt-3"/>
                            </form>
                            
                            
                        </Card.Body>
                    </Container>

                    </Card>
        </div>
    )
}
export default FeedbackForm;