import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/mss5.jpg"

export const Projects = () => {
    
    const projects = [
        {
            title: "MSS",
            description: "Desenvolvimento da Página, com o Design dado pelo Cliente",
            imgUrl: projImg1,
        },
        {
            title: "Em desenvolvimento...",
            description: "Design e Desenvolvimento",
            imgUrl: projImg1,
        },        {
            title: "Em desenvolvimento...",
            description: "Design e Desenvolvimento",
            imgUrl: projImg1,
        },
    ];
      return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>
                            Alguns dos meus Trabalhos
                        </h2>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" defaultActiveKey="/home">

                        </Nav>
                        <Tab.Content>
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
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
      )
}