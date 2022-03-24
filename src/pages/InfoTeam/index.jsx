import Header from "../../components/Header";
import { Container } from "./styled";
import { RiLinkedinFill } from "react-icons/ri";
import { Link } from "react-router-dom";



const InfoTeam = () => {
  return (
    
  <>
  <Container>
  <Header />
  <div className="row">
    <div>
      <div className="our-team">
        <div className="picture">
          <img className="img-fluid-felipe" src="https://i.imgur.com/RkpFf9b.png"></img>
        </div>
        <div className="team-content">
          <h3 className="name">Felipe Sindeaux</h3>
          <h4 className="title">Tech Leader</h4>
        </div>
        <ul className="social">
        <li className="linkedinIcon"><a href="https://www.linkedin.com/in/felipesindeaux/" target="_blank"><RiLinkedinFill/></a></li>
        </ul>
      </div>
    </div>
        <div>
      <div className="our-team">
        <div className="picture">
          <img className="img-fluid" src="https://i.imgur.com/fHMYe9Y.png"></img>
        </div>
        <div className="team-content">
          <h3 className="name">Diego Berselli</h3>
          <h4 className="title">Scrum Master</h4>
        </div>
        <ul className="social">
          <li><a href="https://www.linkedin.com/in/diegoberselli/" target="_blank"><RiLinkedinFill/></a></li>
         
        </ul>
      </div>
    </div>
        <div>
      <div className="our-team">
        <div className="picture">
          <img className="img-fluid" src="https://i.imgur.com/nLv6fSb.png"></img>
        </div>
        <div className="team-content">
          <h3 className="name">Jeferson Bruno</h3>
          <h4 className="title">Quality Assurance</h4>
        </div>
        <ul className="social">
        <li><a href="https://www.linkedin.com/in/jeferson-bruno-2831248b/" target="_blank"><RiLinkedinFill/></a></li>
        </ul>
      </div>
    </div>
        <div>
      <div className="our-team">
        <div className="picture">
          <img className="img-fluid" src="https://i.imgur.com/OFQOskE.png"></img>
        </div>
        <div className="team-content">
          <h3 className="name">Ágnes Rosa</h3>
          <h4 className="title">Quality Assurance</h4>
        </div>
        <ul className="social">
        <li><a href="https://www.linkedin.com/in/%C3%A1gnes-silva-872a15224/" target="_blank"><RiLinkedinFill/></a></li>
        </ul>
      </div>
    </div>
    <div>
      <div className="our-team">
        <div className="picture">
          <img className="img-fluid" src="https://i.imgur.com/5ejAAHC.png"></img>
        </div>
        <div className="team-content">
          <h3 className="name">Lorenzo Marques</h3>
          <h4 className="title">Product Owner</h4>
        </div>
        <ul className="social">
        <li><a href="https://www.linkedin.com/in/lorenzo-marques-16861b226/" target="_blank"><RiLinkedinFill/></a></li>
        </ul>
      </div>
    </div>
  </div>
</Container>
</>
  );
};

export default InfoTeam;
