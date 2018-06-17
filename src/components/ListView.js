import React, {Component} from 'react'
import '../Sidebar.css'
import {Link} from 'react-router-dom'
import { Checkbox, Grid, Row, Col, Button, Glyphicon, Image, FormControl } from 'react-bootstrap'

export default class ListView extends Component {
    render() {
        return (
              <div>
                  <div className="sidenav">
                    <Image src="/img/index.jpg" />
                    <a href="#services">ข้อมูลเด็ก</a>
                    <Link to="/vaccine">วัคซีน</Link>
                    <Link to="/projectList">ย้อนกลับ</Link>
                  </div>
                  <div className="main">
                  <Grid>
                  <Row className="show-grid">
                    <Col xs={12} md={8}>
                      ตัวกรอง: &nbsp;
                      <Checkbox inline><p class="font">อายุ</p></Checkbox>
                      <Checkbox inline><p class="font">เพศ</p></Checkbox>
                      <Checkbox inline><p class="font">สัญชาติ</p></Checkbox>
                      <Checkbox inline><p class="font">ระดับการศึกษา</p></Checkbox>
                    </Col>
                    <br/><br/>
                    &nbsp;&nbsp;
                    <Col xs={12} md={8}>
                    <FormControl placeholder="Search.." type="text"/>
                    </Col>
                    <Button><Glyphicon glyph="search" /></Button>
                    <br/><br/>
                    <div className="container">           
                    <table className="table">
                      <thead>
                        <tr>
                          <th>รหัสเด็ก</th>
                          <th>ชื่อ-นามสกุล</th>
                          <th>อายุ</th>
                        </tr>
                      </thead>
                    <tbody>
                  <tr>
                   <td>31796</td>
                   <td>กิดจุง จุง</td>
                   <td>7</td>
                   <td> <Button>ดูข้อมูล</Button> </td>
                </tr>
                <tr>
                  <td>48002</td>
                  <td>อนุชิต มาธาวี</td>
                  <td>10</td>
                  <td> <Button>ดูข้อมูล</Button> </td>
                </tr>
                <tr>
                  <td>23012</td>
                  <td> สิรภพ สวัสดิ์บุญ</td>
                  <td>7</td>
                  <td> <Button>ดูข้อมูล</Button> </td>
                </tr>
                </tbody>
                </table>
                </div>
                  </Row>
                  </Grid>
                  </div>
              </div>
        )
    }
}
 
  