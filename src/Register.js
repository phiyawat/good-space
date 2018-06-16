import React, { Component } from 'react';
import logo from './logo.svg';
import './Regis.css';
import { ButtonToolbar, ButtonGroup, Button, Glyphicon, FormGroup, ControlLabel, 
        FormControl, HelpBlock, Form, Col, Checkbox } from 'react-bootstrap'

class Register extends Component { 

  render() {
    return (
              <div className="App">
                <header className="App-header">
                  
                  <h1 className="App-title"><b>สมัครสมาชิก</b></h1>
                </header>
                <p className="App-intro">

          <div className='App-regis'>
          <Form horizontal>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>
              ชื่อ-นามสกุล
            </Col>
            <Col sm={8}>
              <FormControl type="text" placeholder="กรุณากรอกชื่อ-นามสกุล" />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              ชื่อผู้ใช้งาน
            </Col>
            <Col sm={8}>
              <FormControl type="text" placeholder="กรุณากรอกชื่อผู้ใช้งาน" />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Email
            </Col>
            <Col sm={8}>
              <FormControl type="email" placeholder="กรุณากรอก Email" />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={2}>
              รหัสผ่าน
            </Col>
            <Col sm={8}>
              <FormControl type="password" placeholder="กรุณากรอกรหัสผ่าน" />
            </Col>
          </FormGroup>

          <FormGroup className='App'>
            <Col smOffset={2} sm={8}>
              <Button >สมัครสมาชิก</Button>
            </Col>
          </FormGroup>
        </Form>
        </div>
        </p>
        
    </div>
    );
  }
}

export default Register;
