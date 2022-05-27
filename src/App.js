import "./styles/main.scss";
import logo from "./assets/shared/logo.svg";

function App() {
  return (
    <div>
      <header className="primary-header">
        <div>
          <img src={logo} alt="space tourism logo" className="logo" />
        </div>
        <nav>
          <ul className="primary-navigation underline-indicators flex">
            <li className="active">
              <a
                className="uppercase text-white letter-spacing-2"
                href="index.html"
              >
                <span>01</span>Home
              </a>
            </li>
            <li>
              <a
                className="uppercase text-white letter-spacing-2"
                href="destination.html"
              >
                <span>02</span>Destination
              </a>
            </li>
            <li>
              <a
                className="uppercase text-white letter-spacing-2"
                href="technology.html"
              >
                <span>03</span>Technology
              </a>
            </li>
          </ul>
        </nav>
      </header>
      00 Home 01 Destination 02 Crew 03 Technology So, you want to travel to
      Space Let’s face it; if you want to go to space, you might as well
      genuinely go to outer space and not hover kind of on the edge of it. Well
      sit back, and relax because we’ll give you a truly out of this world
      experience! Explore
    </div>
  );
}

export default App;
