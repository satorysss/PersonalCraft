import ScrollText from "@/features/SlideText";
import {Link} from "react-router-dom";

function Header() {
  return (
    <div className=" d-flex flex-column align-items-center">
        <div className="col-12 col-md-6 text-center mt-5">
            <div className="blob p-4 align-items-center">
                <h1>PersonalCraft</h1>
                <p>personal AI avatar generator</p>
            </div>
        </div>
        <div className="col-12 col-md-10 text-center mt-5">
            <div className="blobtwo p-5 block">
                <h1 className="fs-1">Unleash Your Imagination with AI-Powered Art!</h1>
                <p className="mt-4">Dive into a world where your wildest dreams come to life, one click at a time, and let your creativity run riot!</p>
                <div className="mt-4">
                    <button className="getbutton2 me-3">Take are free</button>
                        <Link to="/Gallery" style={{ textDecoration: "none", color: "inherit" }}>
                        <button className="getbutton3">
                            gallery
                        </button>
                        </Link>
                </div>
            </div>
        </div>
        <ScrollText/>
        <button className="getbutton3 mt-5">Gallery</button>
    </div>
  );
}

export default Header;