import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/route.png";
import projImg2 from "../assets/img/intrusion.png";
import projImg3 from "../assets/img/Trust_shield.jpeg";
import projImg4 from "../assets/img/fosshack.jpeg";
import projImg5 from "../assets/img/darkpattern.png";
import projImg6 from "../assets/img/notyet.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Route Detection",
      description: "ML Project",
      imgUrl: projImg1,
      URL :"https://colab.research.google.com/github/Prabuddha747/Vehicle_Route_optimisation/blob/main/TSP_final.ipynb"
    },
    {
      title: "Intrusion Detection",
      description: "ML ,Computer Networks",
      imgUrl: projImg2,
    },
    {
      title: "Trust Shield",
      description: "IIT BHU DARK PATTERN BUSTER HACKATHON PROJECT WebScrapping of E-commerce website,Product Image Detection(openCV),WebDev",
      imgUrl: projImg3,
    },
    {
      title: "FOSS UNITED",
      description: "ALL INDIA FOSS HACKAHTON Project",
      imgUrl: projImg4,
    },
    {
      title: "Crowd Lifting",
      description: "Smart India Hackathon Project ",
      imgUrl: projImg5,
    },
    {
      title: "`Future",
      description: "Please wait a bit more...",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here are few of my projects which I have done in these past years which </p>
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
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>I'm a product designer with a passion for creating products that not only look good but also solve real problems. When I'm not sketching ideas on paper, you can find me binge-watching a Netflix series or playing video games. My design philosophy is simple: make it visually appealing, functional, and bring a smile to people's faces. I'm the designer you want on your team if you want to make people say 'I need that in my life!'.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
