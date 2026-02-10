import { Link } from "react-router-dom";
import ModalReg from "@/features/auth";
import {offerImages} from "@/shared/ui/images/images";

function Header() {
  return (
    <header className="col-10 row m-auto">
      <div className="col-sm-5  col-xl-8 ">
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <img src={offerImages.PersonaCraft} alt="" width="30%"/>
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
