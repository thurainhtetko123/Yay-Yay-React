import "./nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <aside className="sidebar">
        <nav>
          <Link to="/" className="linkBlock">
            Home
          </Link>
          <Link to="/" className="linkBlock">
            Photos
          </Link>{" "}
          <Link to="/" className="linkBlock">
            Upload
          </Link>
        </nav>
      </aside>
    </>
  );
}

export default Nav;
