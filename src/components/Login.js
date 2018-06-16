import React, { Component } from 'react'
import {Grid,Row,Col,Image,FormGroup,Form,
        FormControl,Glyphicon,Button} from 'react-bootstrap'
import '../App.css'

export default class Login extends Component {
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
            <Button>เข้าสู่ระบบ</Button> &nbsp;&nbsp;&nbsp;&nbsp;
            <Button>สมัครสมาชิก</Button>
          </Form>
          </Grid>
      )
    }
  }
  