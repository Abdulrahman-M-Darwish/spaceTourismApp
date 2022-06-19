import { useRef, useState } from "react";
import useTaps from "../hooks/useTabs";
import data from "./../assets/technology";
import useScreeWidthLogger from "../hooks/useScreeWidthLogger";

const Technology = () => {
  const [i, setI] = useState(0);
  const list = useRef(null);
  const { width } = useScreeWidthLogger();
  useTaps(list.current);
  return (
    <div className="technology-page tac">
      <h2 className="page-title h28l tt">
        <span>03</span> space launch 101
      </h2>
      <div className="content flex flex-column">
        <div className="img">
          <img
            src={width >= 992 ? data[i].img.portrait : data[i].img.landscape}
            alt="img"
          />
        </div>
        <div className={width >= 992 ? "container-left" : "container"}>
          <div className="text flex flex-column">
            <ul className="tabs flex" ref={list}>
              {[0, 1, 2].map((index) => (
                <li
                  key={"technology" + index}
                  onClick={() => setI(index)}
                  data-index={index}
                  className={`flex h32 ${index === 0 ? "active" : ""}`}
                >
                  {index + 1}
                </li>
              ))}
            </ul>
            <div className="tabs-content flex flex-column">
              <h3 className="title tt flex flex-column">
                <span className="h16 cp">the terminology...</span>
                <span className="h56">{data[i].name}</span>
              </h3>
              <p className="body-text cp">{data[i].description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
