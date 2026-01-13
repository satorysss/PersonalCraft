import {Link} from "react-router-dom";
export default function NotFound() {
    return (
        <div className="col-12 col-md-10 text-center m-auto min-vh-100">
            <div className="blobtwo p-5 block">
                <h2 className="fs-1">Упс, кажется вы попали на несуществующую страницу</h2>
                <h3 className="mt-4">вернитесь на основную страницу</h3>
                <div className="mt-4">
                        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                        <button className="getbutton3">
                            go home
                        </button>
                        </Link>
                </div>
            </div>
        </div>
    );
}
