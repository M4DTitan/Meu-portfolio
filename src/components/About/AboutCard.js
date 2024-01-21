import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Olá mundo <span className="purple">Heldério Wafunga </span>
            Dev júnior de <span className="purple"> Angola.</span>
            <br /> M👋 Saudações, sou Heldério Wafunga, mas me chamam de Heldério.
👨‍💻 Com mais de 3 anos de experiência, sou um entusiasta no desenvolvimento de soluções de software que buscam a excelência. Minha jornada envolve a construção de aplicativos móveis e web, com expertise em tecnologias como Flutter e Firebase, que possibilitam a criação de soluções intuitivas e eficientes.
📚 Atualmente, estou imerso no desafiante mundo da Engenharia Informática, um curso que aprimora ainda mais minha compreensão da tecnologia e como ela molda nosso mundo. Essa formação acadêmica complementa minhas experiências práticas e me capacita a enfrentar desafios técnicos de maneira mais sólida.
💡 Meu coração bate mais forte pelo desenvolvimento Front-end, especialmente com tecnologias como React e VueJS. Além disso, tenho um profundo interesse em UI/UX Design, acreditando que a beleza e a usabilidade são fundamentais para criar experiências excepcionais.
🚀 Todos os dias, meu objetivo é superar o que fiz ontem, buscando constantemente aprimorar minhas habilidades e conhecimento, e aplicá-los em cada projeto para elevar o padrão e proporcionar experiências incríveis aos usuários.  <br />
            Além do meu trabalho como desenvolvedor de software, também sou apaixonado por compartilhar conhecimentos e ajudar a comunidade de desenvolvedores a crescer. Sempre que possível, estou envolvido em iniciativas de educação, escrevendo artigos técnicos, ministrando workshops e participando de grupos de discussão.
            <br />
            <br />
            Alguns dos meu passatempos são:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Gaming
            </li>
            <li className="about-activity">
              <ImPointRight /> Anime e cultura pop em geral
            </li>
            <li className="about-activity">
              <ImPointRight /> Desporto
            </li>
          </ul>
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
