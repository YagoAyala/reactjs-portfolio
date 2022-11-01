import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import blog from "../../Assets/Projects/blog.png";
import chatify from "../../Assets/Projects/chatify.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Onde já <strong className="purple">trabalhei? </strong>
        </h1>
        <p style={{ color: "white" }}>
          Minhas experiências
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              title="Upflux"
              description="Atualmente estou trabalhando no Back-End usando C#, também estou trabalhando no FrontEnd realizando testes automatizados E2E para 
              verificar se há bugs na plataforma, utilizando Cypress e Cucumber. Além disso dei suporte na área de DevOps melhorando/adicionando CI 
              pipeline para verificar a qualidade de código usando a integração do Sonarqube e para também rodar todos os testes a cada pull request aberta."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              title="Multiplier"
              description="Trabalhei na Multiplier por 5 meses. Refatorei as validações e os controllers e criei dois Backend's uma usando TypeScript e 
              outra usando Go/Golang, nos dois tiveram Teste Unitário, e GraphQL. Foram usados os princípios do SOLID e do TDD."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              title="DevHero"
              description="Fiquei na DevHero, por 5 meses. Produzi sites para os consumidores, na parte do Front-End usei Vue.js, JavaScript, CSS, SASS, HTML. 
              Também consumi várias API's para dar novas funcionalidades para os sites, na parte do BackEnd tive muito contato com REST, Node.js, express, MongoDB."             
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
