import { Container, Row, Col } from "react-bootstrap";
import logo from '../assets/img/hiena.png';
import navIcon1 from '../assets/img/github-svgrepo-com.svg';
import navIcon2 from '../assets/img/linkedin-svgrepo-com.svg';
import navIcon3 from '../assets/img/whatsapp-color-svgrepo-com.svg';


export const Footer = () => {
    return (
        <section className="footer" id="pezinhodecria">
            <Container>
                <Row class="align-item-center">
                    <Col sm={6}>
                        <img src={logo} alt="Logo"/>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="."><img src={navIcon1} alt="GitHub"/></a>
                            <a href="."><img src={navIcon2} alt="Linkedin"/></a>
                            <a href="."><img src={navIcon3} alt="WhatsApp"/></a>  
                        </div>
                        <p>CoryRight 2023. Todos os direitos reservados.</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}