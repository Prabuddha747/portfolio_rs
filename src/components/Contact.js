import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Contact = () => {
  
  
  
  

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                
                  <Row>
                  <Col size={12} sm={6} className="px-1">
                    <div>First Name: <strong>Prabuddha</strong></div>
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <div>Last Name: <strong>Verma</strong></div>
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <div>Email Address: <strong>prabuddhaverma2548@gmail.com</strong></div>
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <div>Phone No.: <strong>9155512548</strong></div>
                  </Col>
                  
                  </Row>
                  <Row>
                  <Col size={12} sm={6} className="px-1">
  <a 
    href="https://www.canva.com/design/DAF-zSdLr3E/36jy8P2DNrpYcBX9pabTng/view?utm_content=DAF-zSdLr3E&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h40cc7f29f0" 
    target="_blank" 
    rel="noopener noreferrer"
    className="resume-link"
  >
    <strong>Resume</strong>
  </a>
</Col>

                  </Row>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
