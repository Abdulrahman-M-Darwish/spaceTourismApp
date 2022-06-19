import { Link } from "react-router-dom";

const Home = ({ setBg }) => {
  return (
    <div className="home-page flex">
      <div className="container">
        <div className="content flex flex-column">
          <div className="script tac">
            <h1 className="flex flex-column tt">
              <span className="sub-heading h28l cp">
                so, you want to travel to
              </span>
              <span className="heading h150">space</span>
            </h1>
            <p className="cp body-text">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <Link
            to="/destination"
            onClick={() => setBg("destination")}
            className="circle cb flex tt"
          >
            explore
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
