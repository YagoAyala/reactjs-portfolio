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
              title="Clinicorp Solution"
              description="Atualmente trabalho como Desenvolvedor Full Stack na Clinicorp Solutions, iniciando em dezembro de 2022. Concentrei-me inicialmente na resolução de bugs em produtos recém-lançados, aumentando a confiabilidade das aplicações. Enfrentei o desafio de refatorar um software complexo responsável por gerenciar uma grande quantidade de dados, utilizando tecnologias como NodeJS Stream e métodos avançados de compressão de dados. Além disso, efetivamente integrei React Context, useMemo, e React Memo para melhorar o desempenho. Durante esse período, desenvolvi uma função de nuvem (CF) que simplificou a integração de novas rotas, destacando-se por sua eficiência. Fui essencial no desenvolvimento de diversas Cloud Functions, Tasks, Queues, e Jobs, gerenciando Collections do DataStore e soluções de armazenamento, com um foco particular na implementação de testes unitários, alcançando uma cobertura de 100%."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              title="Upflux"
              description="Como desenvolvedor backend em C#, contribuí significativamente para o projeto Upflux, implementando novas funcionalidades e refatorando código legado, mantendo altos padrões de qualidade através de testes unitários e de integração. Ampliei minha experiência para o frontend, focando na refatoração de código para garantir compatibilidade total com SonarQube. Esta jornada me levou ao campo de DevOps, onde me especializei na configuração de SonarQube, Quality Gates, integração contínua (CI) e no uso do Husky para reforçar a eficiência e qualidade do processo de desenvolvimento."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              title="DevHero"
              description="Comecei na DevHero realizando integrações usando Typescript e Node.js. Mais tarde, tive a oportunidade de apoiar a equipe de front-end, onde trabalhei com Vue.js, ampliando minha experiência e contribuindo para diversos aspectos do projeto."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;