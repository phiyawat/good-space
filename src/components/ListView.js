import React, {Component} from 'react'
import '../Sidebar.css'
import {Link} from 'react-router-dom'
import { Checkbox, Grid, Row, Col, Button, Glyphicon } from 'react-bootstrap'

export default class ListView extends Component {
    render() {
        return (
              <div>
                  <div className="sidenav">
                    <a href="#about">logo</a>
                    <a href="#services">ข้อมูลเด็ก</a>
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
                    &nbsp;&nbsp;<input type="text" placeholder="Search.."></input>
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
                   <td>John</td>
                   <td>Doe</td>
                   <td>john@example.com</td>
                   <td> <Button>ดูข้อมูล</Button> </td>
                </tr>
                <tr>
                  <td>Mary</td>
                  <td>Moe</td>
                  <td>mary@example.com</td>
                  <td> <Button>ดูข้อมูล</Button> </td>
                </tr>
                <tr>
                  <td>July</td>
                  <td>Dooley</td>
                  <td>july@example.com</td>
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
 
  