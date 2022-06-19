import { useState } from "react";
import planets from "./../assets/destination";

const Destination = () => {
  const [index, setIndex] = useState(0);
  const setActiveClass = (e) => {
    const elements = document.querySelectorAll(".tabs li");
    elements.forEach((ele) => ele.classList.remove("active"));
    e.target.classList.add("active");
    setIndex(e.target.getAttribute("data-index"));
  };
  return (
    <div className="destination-page">
      <h2 className="page-title h28l tt">
        <span>01</span> pick your destination
      </h2>
      <div className="container">
        <div className="content tac flex flex-column">
          <div className="planets">
            <img src={planets[index].img} alt={planets[index].name} />
          </div>
          <div className="script">
            <ul className="tabs h16 tt flex cp">
              <li data-index="0" onClick={setActiveClass} className="active">
                moon
              </li>
              <li data-index="1" onClick={setActiveClass}>
                mars
              </li>
              <li data-index="2" onClick={setActiveClass}>
                europa
              </li>
              <li data-index="3" onClick={setActiveClass}>
                titan
              </li>
            </ul>
            <>
              <h1 className="heading h100 tt">{planets[index].name}</h1>
              <p className="body-text cp">{planets[index].description}</p>
              <div className="the-way flex flex-column">
                <div className="distance">
                  <div className="sub tt cp h14">avg. distance</div>
                  <div className="head h28 tt">{planets[index].distance}</div>
                </div>
                <div className="travel">
                  <div className="sub tt cp h14">est. travel time</div>
                  <div className="head h28 tt">{planets[index].travel}</div>
                </div>
              </div>
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
