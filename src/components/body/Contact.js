import { Button } from 'bootstrap';
import React, { Component } from 'react'
import { Col, Form, FormGroup, Input, Label } from 'reactstrap'

export class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: "",
            lastname: "",
            telnum: "",
            email: "",
            agree: false,
            contactType: "Tel.",
            message: ""
        }
    }
    render() {
        return (
            <div className="container">
                <div className="row row-content" style={{ paddingLeft: "20px", textAlign: "left" }}>
                    <div className="col-12">
                        <h3>Send us your feedback</h3>
                    </div>
                    <div className="col-12 col-md-7">
                        <Form>
                            <FormGroup row>
                                <Label htmlFor="firstName" mb={2}>First Name</Label>
                                <Col md={10}>
                                    <Input type="text" name="firstname" placeholder="First Name" value={this.state.firstname} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="lastname" mb={2}>Last Name</Label>
                                <Col mb={10}>
                                    <Input type="text" name="lastname" value={this.state.lastname} placeholder="Tel. number" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="telnum" mb={2}>Contact Tel.</Label>
                                <Col mb={10}>
                                    <Input type="tel" name="telnum" value={this.state.telnum} placeholder="Tel. number" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" mb={2}>Email</Label>
                                <Col mb={10}>
                                    <Input type="email" name="email" value={this.state.email} placeholder="Email" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 6, offset: 2 }}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" name="agree" checked={this.state.agree} /> <strong>May we contact you!</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{ size: 3, offset: 1 }}>
                                    <Input type="select" name="contactType" checked={this.state.contactType}>
                                        <option>Tel.</option>
                                        <option>Email.</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="message" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Input type="textarea" name="message" value={this.state.message} rows="12">

                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact
