import { Link } from "react-router";
import { Outlet } from "react-router";
import "./App.css";

function App() {
  return (
    <>
      <div className="header-nav">
        <header className="hello">
          <h1>Hello. My name is Ryan Skeels. </h1>
          <p className="career-title">
            Operations & Systems thinker and leader.
          </p>
        </header>
        <nav className="nav">
          <ul>
            <li>
              <Link to="workMain">
                <button className="main-nav-button">My Work</button>
              </Link>
            </li>
            <li>
              <Link to="">
                <button className="main-nav-button">My Resume</button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default App;
