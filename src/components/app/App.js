import React, { Component } from "react";
import { Layout, Menu } from "antd";
import "antd/dist/antd.css";
import Toolbar from "../toolbar/toolbar";
import StartModal from "../startModal/startModal";
import ExePage from "../exeComponent/exePage";
const { Header, Content, Footer } = Layout;

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Toolbar />
            <StartModal />
            <Content style={{margin:"0px 50px 0px 50px",backgroundColor:"white"}}>
            <ExePage/>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Portfolio Design ©2019 Created by DeeptyRanjan
          </Footer>
        </Layout>
      </div>
    );
  }
}

export default App;
