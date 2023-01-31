import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import headerImg from "../assets/img/90f4a792-788e-47ad-95eb-b65de043794c (2).png"

export const Preferencs = () => {
    return (
        <section className="preferencs" id="sobre">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <h2>Um pouco sobre mim</h2>
                        <p>Tenho 19 anos e nos meus 13 anos de idade fui apresentado ao meio tecnológico com cursos basicos de computação nos meus 15 anos entrei no ensino médio integrado ao curso de Tecnologia da Informação a partir de então aprendi a base da computação e da programação.</p>
                        <p>Sou um entusiasta automotivo e tenho minha paixão por carros.</p>
                        <hr></hr>                  
                    </Col>
                    <Col xs={12} md={6} xl={5}>                  
                        <img src={headerImg} alt="headder img"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}