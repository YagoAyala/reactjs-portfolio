import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              DEIXE-ME <span className="purple"> APRESENTAR </span> O YAGO
            </h1>
            <p className="home-about-body">
            Brasileiro, 19 anos de idade. Sou ambicioso e dedicado, apaixonado por tecnologia, estou disposto a aprender linguagens 
            novas (tanto de programação, quanto faladas). Pretendo agregar coisas boas por onde eu passar.🤷‍♂️
              <br />
              <br />Me sinto confortavel com
              <i>
                <b className="purple"> JavaScript, TypeScript e C#. </b>
              </i>
              <br />
              <br />
              Tenho muito interesse em mexer com&nbsp;
              <i>
                <b className="purple">API's e Backend's </b> e também
                gosto de trabalhar na área relacionada a{" "}
                <b className="purple">
                  Desenvolvedor Frontend e DevOps.
                </b>
              </i>
              <br />
              <br />
              Sempre que possível, gosto de ficar fazendo projetos pessoais e para pequenas empresas usando
              <b className="purple"> Node.js</b> e
              <i>
                <b className="purple">
                  {" "}
                  Frameworks e bibliotecas moderndas do JavaScript
                </b>
              </i>
              &nbsp; como por exemplo:
              <i>
                <b className="purple"> React.js e Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Bora trocar uma ideia?</h1>
            <p>
              Sinta-se a vontade de entrar <span className="purple">em contato </span>comigo
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/YagoAyala"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/yagoca/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/yago_ca_/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
