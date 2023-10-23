import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Sejam bem-vindo, eu sou o <span className="purple">Yago Costa Ayala </span>
            sou de <span className="purple"> Santa Catarina, Brasil.</span>
            <br />Sou um Desenvolvedor Pleno que atualmente está cursando
            Bacharelado em Engenharia de Software e trabalhando na Clinicorp Solution
            <br />
            <br />
            Alem de codar, existem outras atividades que eu gosto de fazer!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Ler livros
            </li>
            <li className="about-activity">
              <ImPointRight /> Jogar com meus amigos
            </li>
            <li className="about-activity">
              <ImPointRight /> Ver filme
            </li>
            <li className="about-activity">
              <ImPointRight /> Bater uma bola
            </li>
          </ul>
{/* TODO: Adicionar a fala do CTO da Spotify */}
          <p style={{ color: "rgb(155 126 172)" }}>
            "Ser programador é ser paciente e persistente na busca de novos conhecimentos."{" "}
          </p>
          <footer className="blockquote-footer">Igor Barros</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
