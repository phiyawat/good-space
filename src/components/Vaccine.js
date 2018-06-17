import React, { Component } from 'react';
import '../Vaccine.css';
import { Button, FormGroup, Panel, 
        Row, Grid, Form, Col } from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default class Vaccine extends Component { 
  
  render() {   
    
    return (

    <div className="App">
    <header className="App-header">                  
      <h1 className="App-title"><b>ประวัติการฉีดวัคซีน</b></h1>
    </header>
  
      
    <Panel className='tab'>
    <Grid className='App-title'>
    <Row className="show-grid">
    <Form horizontal>
    <FormGroup controlId="formHorizontalEmail">
    <Col sm={3} md={2}>
    <Panel.Body><b>ชื่อ-นามสกุล</b></Panel.Body>
    <Panel.Body><b>สัญชาติ</b></Panel.Body>
    <Panel.Body><b>อายุ</b></Panel.Body>
    <Panel.Body><b>เพศ</b></Panel.Body>
    </Col>
    <Col sm={3} md={2}>
      <Panel.Body>Data1</Panel.Body>
      <Panel.Body>Data2</Panel.Body>
      <Panel.Body>Data3</Panel.Body>
      <Panel.Body>Data4</Panel.Body>
    </Col>
    </FormGroup>
    </Form>    
    </Row>
     </Grid> 
    </Panel >
    <Panel.Body className='App-title'><b>วัคซีนที่เคยรับ</b></Panel.Body>
      
    <select id = "dropdown" ref = {(input)=> this.menu = input} className='align'>    
    <option value="0">กรุณาเลือกรายการ</option>
    <option value="1">BCG, HB1 (แรกเกิดถึง 1 เดือน)</option>
    <option value="2">OPV1, DTP-HB (2 เดือน)</option>
    <option value="3">OPV2, IPV1, DTP-HB2 (4 เดือน)</option>
    <option value="4">OPV3, DTP-HB3 (6 เดือน)</option>
    <option value="5">MMR1 (9 เดือน)</option>
    <option value="6">LAJE1 (1 ปี)</option>
    <option value="7">OPV4, DTP4 (1 ปี 6 เดือน)</option>
    <option value="8">MMR2, LAJE2 (2 ปี 6 เดือน)</option>
    <option value="9">OPV5, DTP5 (4 ปี)</option>
    </select>
    <br></br>
    <Link to="/listView"><Button bsStyle="primary" bsSize="large" className="btn">บันทึกผล</Button></Link>
             
    </div> 
    );
  }
}