import {Link} from "react-router-dom";
import {offerImages} from "@/shared/ui/images/images";
export default function Footer(){
    return (
        <footer className="footer text-light pt-5 ">
            <div className="container">
                <div className="row">
                    <div className="col">
                            <img src={offerImages.PersonaCraft} alt="" />
                    </div>
                    <div className="col text-center">

                        <h2>Company</h2>
                        <div className="m-4">
                            <p>
                                <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>Home Page</Link>
                            </p>
                            <p>
                                <Link to="/Gallery" style={{ textDecoration: "none", color: "inherit" }}>Gallery</Link>
                            </p>
                            <p>
                                <Link to="/About us" style={{ textDecoration: "none", color: "inherit" }}>About us</Link>
                            </p>
                        </div>

                    </div>
                    <div className="col text-center">
                        <h2>Follow us</h2>
                        <div className="m-4">
                            <p>Instagram</p>
                            <p>Facebook</p>
                            <p>Twitter</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}