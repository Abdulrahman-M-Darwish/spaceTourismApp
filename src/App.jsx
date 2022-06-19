import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Destination, Crew, Technology } from "./containers";
import { MobileNavbar, Navbar } from "./components";

function App() {
  const [bg, setBg] = useState("home");
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className={`app flex flex-column ${bg}`}>
      <Navbar setShowMenu={setShowMenu} setBg={setBg} />
      <MobileNavbar
        setShowMenu={setShowMenu}
        showMenu={showMenu}
        setBg={setBg}
      />
      <Routes>
        <Route path="/" element={<Home setBg={setBg} />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </div>
  );
}

export default App;
