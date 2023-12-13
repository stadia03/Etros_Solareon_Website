import React from "react";
import { Navbar, Footer } from "./components";
import styles from "./style";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import teams from "./pages/teams";
import Home from "./pages/home";
import Projects from "./pages/projects";
import Contact from "./pages/contact";

const App = () => {
  return (
    <Router>
      <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/teams" Component={teams} />
          <Route path="/projects" Component={Projects} />
          <Route path="/contact" Component={Contact} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
