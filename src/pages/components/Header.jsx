import { Link } from "react-router-dom";
import ModalReg from "./ModalReg";

function Header() {
  return (
    <header className='container'>
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <h1>PersonalCraft</h1>
      </Link>
      <Link to="/Gallery" style={{ textDecoration: "none", color: "inherit" }}>
        gallery
      </Link>


      <ModalReg />
    </header>
  );
}

export default Header;
