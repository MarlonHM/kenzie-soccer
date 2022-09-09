import { Container } from "./style";

import GitHubIcon from "../../assets/github-icon.png";
import LinkedinIcon from "../../assets/linkedin-icon.png";

import MarlonImg from "../../assets/marlon.png";
import JaquelineImg from "../../assets/jaqueline.png";
import JonathanImg from "../../assets/jonathan.png";
import EdsonImg from "../../assets/edson.png";
import MicaelaImg from "../../assets/micaela.png";

const Dev = ({ dev }) => {
  const { id, name, role, github, linkedin } = dev;
  let image = "";

  switch (id) {
    case 1:
      image = MarlonImg;
      break;
    case 2:
      image = JaquelineImg;
      break;
    case 3:
      image = JonathanImg;
      break;
    case 4:
      image = EdsonImg;
      break;
    case 5:
      image = MicaelaImg;
      break;
    default:
      break;
  }

  return (
    <Container>
      <img src={image} alt={name} className="avatar" />

      <h4>{name}</h4>
      <span>{role}</span>

      <div className="social-medias">
        <a href={github} target="_blank" rel="noreferrer">
          <img src={GitHubIcon} alt="GitHub" />
        </a>
        <a href={linkedin} target="_blank" rel="noreferrer">
          <img src={LinkedinIcon} alt="Linkedin" />
        </a>
      </div>
    </Container>
  );
};

export default Dev;
