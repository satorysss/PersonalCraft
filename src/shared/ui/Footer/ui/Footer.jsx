import {Link} from "react-router-dom";
export default function Footer(){
    return (
        <footer className="footer text-light mt-5">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>PersonalCraft</h1>
                        <p>PersonalCraft is a platform for creating and selling digital art</p>
                    </div>
                    <div className="col text-center">

                        <h2>Company</h2>
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
                    <div className="col text-center">
                        <h2>Follow us</h2>
                        <p>Instagram</p>
                        <p>Facebook</p>
                        <p>Twitter</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}