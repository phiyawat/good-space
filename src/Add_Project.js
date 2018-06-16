import React, { Component } from 'react';
import {Label,Input,Row,Col,FormGroup,Form,Container,Button} from 'reactstrap';
import './AddCss.css';

class App extends Component {
  render() {
    return (
<Container>
  <div>
    <div class="sidenav">
      <a href="#about">หน้าหลัก</a>
      <a href="#services">เพิ่มโครงการ</a>
      <a href="#clients">Logout</a>
    </div>
      <div className="main">
        <Col className="App">
          ข้อมูลโครงการ
        </Col>
         <Row>
            <Col className="App3">
              <Label>รหัสโครงการ</Label>
              <Input  type="email" name="project_id"  placeholder="รหัสโครงการ" />
            </Col>
          </Row>
          <Row>
            <Col className="App3">
                <Label>ชื่อโครงการ</Label>
                <Input type="text" name="project_name"  placeholder="ชื่อโครงการภาษาไทย/English" />
            </Col>
          </Row>
          <Row>
            <Col className="App3">
                <Label>จังหวัด</Label>
                <Input type="text" name="province"  placeholder="จังหวัด" />
            </Col>
          </Row>
          <Row>
            <Col className="App3">
                <Label>ระยะเวลาของโครงการ</Label>
                <Input type="text" name="project_time"  placeholder="ระยะเวลาของโครงการ" />
            </Col>
          </Row>
          <Row>
            <Col>
                <div><Label className="App2">Project Manager</Label></div>
                <Label>ชื่อ-สกุล</Label>
                <Input type="text" name="pm_name"  placeholder="ชื่อ-สกุล Project Manager" />
            </Col>
          </Row>
          <Row>
            <Col className="App3">
                <Label>เบอร์ติดต่อ</Label>
                <Input type="text" name="pm_tel"  placeholder="เบอร์ติดต่อ Project Manager" />
            </Col>
          </Row>
                <div className="App3">
                  <Button color="success">บันทึก</Button>{' '}
                  <Button color="danger">ยกเลิก</Button>{' '}
                </div>
       </div>
    </div>
</Container>
    );
  }
}

export default App;
