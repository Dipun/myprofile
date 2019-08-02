import React from "react";
import myPic from "../startModal/deeptyranjan.jpg";
import "./startModal_style.css";
import { Typography, Icon } from "antd";
import TextArea from "antd/lib/input/TextArea";
const { Text } = Typography;
const { Paragraph } = Typography;

const StartModal = () => {
  return (
    <div className="startModal-bg">
      <section className="intro_header">
        <div className="myPic_div">
          <img className="mypic" src={myPic} />
        </div>
        <div className="mytext_div">
          <Text className="start_Name">Deeptyranjan Pradhan</Text>
          <br />
          <Text className="start_postion">
            Web Developer | MERN Stack Developer
          </Text>
          <br />
          <br />
          <br />
          <Text className="start_text">
            <Icon className="icon_text" type="mail" />
            deeptyranjan.p@gmail.com
          </Text>
          <br />
          <Text className="start_text">
            <Icon className="icon_text" type="phone" />
            +91-6361571215
          </Text>
          <br />
          <Text className="start_text">
            <Icon className="icon_text" type="skype" />
            deeptyranjan.pradhan
          </Text>
          <br />
          <Text className="start_text">
            <Icon className="icon_text" type="home" />
            Bangalore, India
          </Text>
          <br />
          <Text className="start_text">
            <Icon className="icon_text" type="linkedin" />
            www.linkedin.com/in/deepty-ranjan
          </Text>
          <br />
          <Text className="start_text">
            <Icon className="icon_text" type="global" />
            http://localhost:3000/
          </Text>
        </div>
        <div>
          <Paragraph
            className="textArea"
            ellipsis={{ rows: 4, expandable: false }}
          >
            <strong style={{ marginLeft: "50px" }}>3+ years</strong> of
            professional experience in cutting-edge technologies to make
            client-oriented Web and Mobile applications. Seeking a position of
            full stack developer in IT organization that gives me scope to
            implement my talent which upgrade my skills in accordance with
            latest trends and the organization to reach higher goals.
            <a className="myResume">
            <Icon type="download" />
            My Resume
          </a>
          </Paragraph>
        </div>
      </section>
    </div>
  );
};

export default StartModal;
