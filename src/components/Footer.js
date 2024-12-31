import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a 
                href="https://www.linkedin.com/in/prabuddha-verma-8647a6265" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img src={navIcon1} alt="LinkedIn Icon" />
              </a>
              <a 
                href="https://github.com/Prabuddha747?tab=repositories" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img src={navIcon2} alt="GitHub Icon" />
              </a>
              <a 
                href="https://www.instagram.com/prabuddha_verma/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img src={navIcon3} alt="Instagram Icon" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
