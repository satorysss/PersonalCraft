import { Link } from "react-router-dom";
import ModalReg from "@/features/auth";

function Header() {
  return (
    <header className="col-10 row m-auto">
      <div className="col-sm-5  col-xl-8 ">
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <h1>PersonalCraft</h1>
        </Link>
      </div>
      <div className="col">
        <Link to="/Gallery" style={{ textDecoration: "none", color: "inherit" }}>
          Gallery
        </Link>
          <Link to="/profile" style={{ textDecoration: "none", color: "inherit" }}>
              profile
          </Link>
        
      </div>

      <div className="col">
        <ModalReg />
      </div>

    </header>
  );
}

export default Header;
