import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { Button, FormGroup, ControlLabel, 
        FormControl, Form, Col, } from 'react-bootstrap'
import '../Regis.css';

export default class Register extends Component { 

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
                    อีเมล
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
                  <Link to="/"><Button >สมัครสมาชิก</Button></Link>
                  </Col>
                </FormGroup>
              </Form>
        </div>
        </p>
    </div>
    )
  }
}