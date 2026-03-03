import { Outlet, Link } from "react-router";

const WorkMain = () => {
  return (
    <div>
      <nav className="work-nav">
        <ul>
          <li>
            <Link to="Marketing">
              <button>Marketing</button>
            </Link>
          </li>
          <li>
            <Link to="Branding">
              <button>Branding</button>
            </Link>
          </li>
          <li>
            <Link to="Web Development">
              <button>Web Development</button>
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default WorkMain;
