import React, { Component } from 'react'
import {Grid,Row,Col,Image,FormGroup,Form,
        FormControl,Glyphicon,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import '../App.css'


export default class Login extends Component {
  buttonClicked () {
    console.log('Button was clicked!')
  }
    render() {
      return (
         <Grid>
          <Row className="show-grid">
            <Col xs={12} xsOffset={2}>
              <br/><br/>
                <Image src="/img/index.jpg" circle />
              <br/><br/>
            </Col>
          </Row>
            <Form horizontal>
              <FormGroup>
                <Col sm={10}>
                  ชื่อผู้ใช้งาน: <Glyphicon glyph="user" /> <br/>
                  <FormControl type="email"/>
                </Col>
              </FormGroup>
            <FormGroup>
              <Col sm={10}>
                รหัสผ่าน: &nbsp;&nbsp; <Glyphicon glyph="lock" /> <br/>
                <FormControl type="password" />
              </Col>
            </FormGroup>
            <Link to="/projectList"><Button onClick={this.buttonClicked}>เข้าสู่ระบบ</Button></Link> &nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/register"><Button>สมัครสมาชิก</Button></Link>
          </Form>
          </Grid>
      )
    }
  }
  