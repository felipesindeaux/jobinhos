import Header from "../../components/Header";
import { Container } from "./styled";
import { RiLinkedinFill } from "react-icons/ri";
import { Link } from "react-router-dom";



const InfoTeam = () => {
  return (
    
  <>
 
  <Container>
  <Header />
  <div class="row">
    <div>
      <div class="our-team">
        <div class="picture">
          <img class="img-fluid-felipe" src="https://i.imgur.com/RkpFf9b.png"></img>
        </div>
        <div class="team-content">
          <h3 class="name">Felipe Sindeaux</h3>
          <h4 class="title">Tech Leader</h4>
        </div>
        <ul class="social">
        <li><a href="https://www.linkedin.com/in/felipesindeaux/" target="_blank"><RiLinkedinFill/></a></li>
        </ul>
      </div>
    </div>
        <div>
      <div class="our-team">
        <div class="picture">
          <img class="img-fluid" src="https://i.imgur.com/fHMYe9Y.png"></img>
        </div>
        <div class="team-content">
          <h3 class="name">Diego Berselli</h3>
          <h4 class="title">Scrum Master</h4>
        </div>
        <ul class="social">
          <li><a href="https://www.linkedin.com/in/diegoberselli/" target="_blank"><RiLinkedinFill/></a></li>
         
        </ul>
      </div>
    </div>
        <div>
      <div class="our-team">
        <div class="picture">
          <img class="img-fluid" src="https://i.imgur.com/nLv6fSb.png"></img>
        </div>
        <div class="team-content">
          <h3 class="name">Jeferson Bruno</h3>
          <h4 class="title">Quality Assurance</h4>
        </div>
        <ul class="social">
        <li><a href="https://www.linkedin.com/in/jeferson-bruno-2831248b/" target="_blank"><RiLinkedinFill/></a></li>
        </ul>
      </div>
    </div>
        <div>
      <div class="our-team">
        <div class="picture">
          <img class="img-fluid" src="https://i.imgur.com/OFQOskE.png"></img>
        </div>
        <div class="team-content">
          <h3 class="name">Ágnes Rosa</h3>
          <h4 class="title">Quality Assurance</h4>
        </div>
        <ul class="social">
        <li><a href="https://www.linkedin.com/in/%C3%A1gnes-silva-872a15224/" target="_blank"><RiLinkedinFill/></a></li>
        </ul>
      </div>
    </div>
    <div>
      <div class="our-team">
        <div class="picture">
          <img class="img-fluid" src="https://i.imgur.com/5ejAAHC.png"></img>
        </div>
        <div class="team-content">
          <h3 class="name">Lorenzo Marques</h3>
          <h4 class="title">Product Owner</h4>
        </div>
        <ul class="social">
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
