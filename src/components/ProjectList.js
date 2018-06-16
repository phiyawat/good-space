import React, { Component } from 'react'
import {Label,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import '../ProjectList.css'

export default class ProjectList extends Component {
  render() {
    return (
      <div>
          <div class="sidenav">
            <Link to="/projectList">หน้าหลัก</Link>
            <Link to="/addProject">เพิ่มโครงการ</Link>
            <Link to="/">ออกจากระบบ</Link>
          </div>
        <Label className='main'>รายชื่อโครงการ</Label>
        <Link to="/listView"><Button >ข้อมูลเด็ก</Button></Link>
      </div>
    );
  }
}