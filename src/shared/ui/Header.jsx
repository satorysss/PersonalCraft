import { Link } from "react-router-dom";
import ModalReg from "../../features/auth/ui/ModalReg";

function Header() {
  return (
    <header >
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
