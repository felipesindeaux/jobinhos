import Header from "../../components/Header";
import { Container, Card, Img, Info, List, Body } from "./styled";
import { RiLinkedinFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const InfoTeam = () => {
  return (
    <>
      <Body>
        <Header page="pendings" />
        <Container>
          <Card className="card">
            <Img>
              <img src="https://i.imgur.com/RkpFf9b.png"></img>
            </Img>
            <Info>
              <h3>Felipe Sindeaux</h3>
              <h4>Tech Leader</h4>
            </Info>
            <List>
              <li className="linkedinIcon">
                <a
                  href="https://www.linkedin.com/in/felipesindeaux/"
                  target="_blank"
                >
                  <RiLinkedinFill />
                </a>
              </li>
            </List>
          </Card>

          <Card>
            <Img>
              <img src="https://i.imgur.com/fHMYe9Y.png"></img>
            </Img>
            <Info>
              <h3>Diego Berselli</h3>
              <h4>Scrum Master</h4>
            </Info>
            <List>
              <li>
                <a
                  href="https://www.linkedin.com/in/diegoberselli/"
                  target="_blank"
                >
                  <RiLinkedinFill />
                </a>
              </li>
            </List>
          </Card>

          <Card>
            <Img>
              <img src="https://i.imgur.com/nLv6fSb.png"></img>
            </Img>
            <Info>
              <h3>Jeferson Bruno</h3>
              <h4>Quality Assurance</h4>
            </Info>
            <List>
              <li>
                <a
                  href="https://www.linkedin.com/in/jeferson-bruno-2831248b/"
                  target="_blank"
                >
                  <RiLinkedinFill />
                </a>
              </li>
            </List>
          </Card>

          <Card>
            <Img>
              <img src="https://i.imgur.com/OFQOskE.png"></img>
            </Img>
            <Info>
              <h3>Ágnes Rosa</h3>
              <h4>Quality Assurance</h4>
            </Info>
            <List>
              <li>
                <a
                  href="https://www.linkedin.com/in/%C3%A1gnes-silva-872a15224/"
                  target="_blank"
                >
                  <RiLinkedinFill />
                </a>
              </li>
            </List>
          </Card>

          <Card>
            <Img>
              <img src="https://i.imgur.com/5ejAAHC.png"></img>
            </Img>
            <Info>
              <h3>Lorenzo Marques</h3>
              <h4>Product Owner</h4>
            </Info>
            <List>
              <li>
                <a
                  href="https://www.linkedin.com/in/lorenzo-marques-16861b226/"
                  target="_blank"
                >
                  <RiLinkedinFill />
                </a>
              </li>
            </List>
          </Card>
        </Container>
      </Body>
    </>
  );
};

export default InfoTeam;
