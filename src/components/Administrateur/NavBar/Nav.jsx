import "./Nav.css";
import LogoSVG from './../../../assets/entier blanc.svg';
import Link from "react"

const Nav = () => {



  const handleSubmit = () => {
    localStorage.removeItem("TOKEN");
    alert("Disconnected successfully");
  };
  return (
    <section>
      <Link to="/" onClick={handleSubmit} className="home-link">
        <img src={LogoSVG} alt="home" className="img-home" />
      </Link>
     
    </section>
  );
};

export default Nav;

