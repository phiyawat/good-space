import React, { Component } from 'react';
import logo from './logo.svg';
import {Row,Col,Label} from 'reactstrap';
import './App_projectlist.css';

class App extends Component {
  render() {
    return (
      <div>
          <div class="sidenav">
            <a href="#clients">หน้าหลัก</a>
            <a href="#clients">เพิ่มโครงการ</a>
            <a href="#contact">ออกจากระบบ</a>
          </div>
        <Label className='main'>รายชื่อโครงการ</Label>
      </div>
    );
  }
}

export default App;
