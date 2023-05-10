import main from "../src/assets/images/main.svg";
import { Link } from "react-router-dom";
import Wrapper from "../src/assets/wrappers/Testing";
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore,
            repellat quis. Fugit cum eaque dolorum autem, exercitationem tempora
            ex accusantium eum ipsa nobis? Exercitationem in numquam odit id
            neque aut.
          </p>
          <Link to="/register">
            <button className="btn btn-hero">login/register</button>
          </Link>
        </div>

        <img src={main} alt="jobify main image" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
