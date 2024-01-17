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
            <br /> Minha experiência se concentra principalmente no uso das tecnologias Flutter e Firebase para criar aplicativos móveis e web que entregam experiências excepcionais aos usuários. Como alguém que busca constantemente aprimorar minhas habilidades, estou sempre atualizado com as últimas tendências e melhores práticas nesses domínios em constante evolução.
Minha abordagem para o desenvolvimento de software é centrada no usuário. Acredito que a usabilidade e a experiência do usuário são elementos cruciais para o sucesso de qualquer aplicativo. Trabalho incansavelmente para garantir que meus aplicativos sejam não apenas funcionais, mas também altamente intuitivos e agradáveis de usar.

Minha experiência se estende além do desenvolvimento de aplicativos e abrange várias áreas complementares. Tenho profundos conhecimentos em design de interface de usuário (UI) e experiência do usuário (UX), o que me permite criar interfaces atraentes e eficientes. Além disso, sou especialista em integração de APIs, garantindo que meus aplicativos possam se conectar perfeitamente a serviços e recursos externos para fornecer funcionalidades avançadas.

O gerenciamento de bancos de dados também faz parte do meu conjunto de habilidades. Com a capacidade de projetar e administrar bancos de dados eficazes, posso garantir que os aplicativos que desenvolvo armazenem e recuperem dados de maneira eficiente e segura.

Meu compromisso com a excelência e a aprendizagem contínua me impulsiona a enfrentar desafios complexos de desenvolvimento com determinação e criatividade. Estou sempre aberto a novas oportunidades de aprendizado e colaboração, e estou ansioso para contribuir para projetos inovadores que explorem os limites da tecnologia.
            <br />
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
