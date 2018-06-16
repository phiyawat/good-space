import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Label,Row,Col,Button,FormControl} from 'react-bootstrap'
import '../AddProject.css'

export default class AddProject extends Component {
  render() {
    return (
  <div>
    <div class="sidenav">
    <Link to="/projectList">หน้าหลัก</Link>
      <Link to="/addProject">เพิ่มโครงการ</Link>
    <Link to="/">ออกจากระบบ</Link>
    </div>
      <div className="main">
        <Col className="App">
          ข้อมูลโครงการ
        </Col>
         <Row>
            <Col className="App3">
              <Label>รหัสโครงการ</Label>
              <FormControl type="email" name="project_id" placeholder="รหัสโครงการ"/>
            </Col>
          </Row>
          <Row>
            <Col className="App3">
                <Label>ชื่อโครงการ</Label>
                <FormControl type="text" name="project_name" placeholder="ชื่อโครงการภาษาไทย/English"/>
            </Col>
          </Row>
          <Row>
            <Col className="App3">
                <Label>จังหวัด</Label>
                <FormControl type="text" name="province" placeholder="จังหวัด"/>
            </Col>
          </Row>
          <Row>
            <Col className="App3">
                <Label>ระยะเวลาของโครงการ</Label>
                <FormControl type="text" name="project_time" placeholder="ระยะเวลาของโครงการ"/>
            </Col>
          </Row>
          <Row>
            <Col>
                <div><Label className="App2">Project Manager</Label></div>
                <Label>ชื่อ-สกุล</Label>
                <FormControl type="text" name="pm_name" placeholder="ชื่อ-สกุล Project Manager"/>
            </Col>
          </Row>
          <Row>
            <Col className="App3">
                <Label>เบอร์ติดต่อ</Label>
                <FormControl type="text" name="pm_tel" placeholder="เบอร์ติดต่อ Project Manager"/>
            </Col>
          </Row>
                <div className="App3">
                  <Button color="success">บันทึก</Button>{' '}
                </div>
       </div>
    </div>
    );
  }
}