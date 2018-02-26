import React, { Component } from 'react';
import logo from './logo.svg';
import {
    Button,
    Card,
    Col,
    Icon,
    Input,
    Layout,
    Row,
} from 'antd';

import './App.css';
import 'antd/dist/antd.css';

const { Header, Footer, Sider, Content } = Layout;

class App extends Component {
  render() {
    return (
      <div className="App">
          <Layout className="root-container">
              <Content>
                <div id="login-form-container">
                  <Card
                      title="Administrator Login"
                      style={{
                          width: 380,
                          margin: "0 auto"
                      }}
                  >
                      <Row type="flex" justify="center">
                          <Col
                            className="login-form-input"
                            span={22}
                          >
                              <Input
                                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                  placeholder="Enter Username"
                              />
                          </Col>
                      </Row>
                      <Row type="flex" justify="center">
                          <Col
                              className="login-form-input"
                              span={22}
                          >
                              <Input
                                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                  placeholder="Enter Password"
                                  type={"password"}
                              />
                          </Col>
                      </Row>
                      <Row>
                          <Col>
                              <Button>{"Login"}</Button>
                          </Col>
                      </Row>
                  </Card>
                </div>
              </Content>
          </Layout>
      </div>
    );
  }
}

export default App;
