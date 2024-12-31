import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/route.png";
import projImg2 from "../assets/img/pixel.png";
import projImg3 from "../assets/img/to_dolist.png";
import projImg4 from "../assets/img/crowdfunding_foss.png";
import projImg5 from "../assets/img/drought-preditction2.png";
import projImg6 from "../assets/img/notyet.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Route Optimisation using LPP",
      description: "Route Optimisation for ration supply management amongst Starbucks outlets in London",
      imgUrl: projImg1,
      URL: "https://colab.research.google.com/github/Prabuddha747/Vehicle_Route_optimisation/blob/main/TSP_final.ipynb",
    },
    
    {
      title: "Collaborative To-Do List using JS",
      description: "JS based open clipboard to manage productivity and tasks as a team ",
      imgUrl: projImg3,
      URL: "https://open-messages.onrender.com/", // Replace with actual URL
    },
    {
      title: "PIXEL- A talk bot leveraging JS's Speech Recognisation feature",
      description: "The talk bot takes voice commands to provide information on weather,enables google searches and many other features.",
      imgUrl: projImg2,
      URL: "https://pixel-ai-bot.vercel.app/", // Replace with actual URL
    },
    {
      title: "Crowd Funding UI to support small business",
      description: "User Interface that serves as an one-stop-shop to help farmers and other startups to raise funds,a frontend project made during ALL INDIA FOSS HACKATHON Project",
      imgUrl: projImg4,
      URL: "https://crowd-lifting-foss.vercel.app/", // Replace with actual URL
    },
    {
      title: "Drought Prediction in India",
      description: "Video Link to my ML app that aims at Drought prediction for next 100 years in diferent regions of india ",
      imgUrl: projImg5,
      URL: "https://drive.google.com/drive/folders/1oM_NdnA_Z2jlTisz7QurbavcDARTJz6h?zx=onq8lxpwc2mb", // Replace with actual URL
    },
    {
      title: "Future",
      description: "Checkout my git to know more...",
      imgUrl: projImg6,
      URL:"https://github.com/Prabuddha747?tab=repositories", // No link for this card
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Here are a few of my projects which I have done over the past years.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Skill Card</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Connect</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">About Me</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            ))
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>Stay connected to learn more about my work and ideas.</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          I'm a product designer with a passion for creating products that solve real-world problems.
                          My design philosophy is simple: make it visually appealing, functional, and bring a smile to people's faces.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background"></img>
    </section>
  );
};
