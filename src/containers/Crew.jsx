import { useRef, useState } from "react";
import crew from "../assets/crew";
import useTaps from "../hooks/useTabs";

const Crew = () => {
  const [i, setI] = useState(0);
  const list = useRef(null);
  useTaps(list.current);
  const handelClick = (e) => {
    setI(e.target.getAttribute("data-index"));
  };
  console.log(crew);
  return (
    <div className="crew-page tac flex flex-column">
      <h2 className="page-title h28l tt">
        <span>02</span> meet your crew
      </h2>
      <div className="container flex">
        <div className="content flex flex-column">
          <div className="img flex">
            <img src={crew[i].img} alt={crew[i].name} />
          </div>
          <div className="script-controler flex flex-column">
            <div className="controlers">
              <ul ref={list} className="flex">
                {[0, 1, 2, 3].map((i) => (
                  <li
                    className={`circle ${i === 0 ? "active" : ""}`}
                    onClick={handelClick}
                    key={"circle" + i}
                    data-index={i}
                  ></li>
                ))}
              </ul>
            </div>
            <div className="script">
              <h3 className="flex flex-column">
                <span className="role h32 tt role">{crew[i].role}</span>
                <span className="name h56 tt">{crew[i].name}</span>
              </h3>
              <p className="body-text cp">{crew[i].bio}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crew;
