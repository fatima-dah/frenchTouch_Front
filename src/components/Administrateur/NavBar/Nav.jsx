import "./Nav.css";
import LogoSVG from "../../../assets/entier noir.svg";
import { Link } from "react-router-dom";


const Nav = () => {
  const handleSubmit = () => {
    localStorage.removeItem("TOKEN");
    alert("Disconnected successfully");
  };
  return (
    <section>
      <div className="navbarAdmin">
        <Link
          to="/"
          onClick={handleSubmit}
          className="home-link"
        >
          <img src={LogoSVG} alt="home" className="img-home" />
        </Link>
      </div>
    </section>
  );
};

export default Nav;
