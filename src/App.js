import "./styles/main.scss";
import logo from "./assets/shared/logo.svg";

function App() {
  return (
    <div className="home">
      <header className="primary-header flex">
        <div>
          <img src={logo} alt="space tourism logo" className="logo" />
        </div>
        <nav>
          <ul className="primary-navigation underline-indicators flex">
            <li className="active">
              <a
                className="ff-sans-cond uppercase text-white letter-spacing-2"
                href="index.html"
              >
                <span>01</span>Home
              </a>
            </li>
            <li>
              <a
                className="ff-sans-cond uppercase text-white letter-spacing-2"
                href="destination.html"
              >
                <span>02</span>Destination
              </a>
            </li>
            <li>
              <a
                className="ff-sans-cond uppercase text-white letter-spacing-2"
                href="technology.html"
              >
                <span>03</span>Technology
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="grid-container">
        <div>
          <h1 className="text-accent fs-500 ff-sans-cond uppercase">
            So, you want to travel to
            <span className="fs-900 ff-serif text-white letter-spacing-1">
              {" "}
              Space
            </span>
          </h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div>
          <a
            href="destination.html"
            className="large-button uppercase ff-serif fs-600 text-dark bg-white"
          >
            Explore
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
