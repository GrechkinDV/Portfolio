import React, { useEffect, useState } from "react";

function Navigation() {
  const [navTheme, setNavTheme] = useState("light");
  const [change, setChange] = useState("");
  const [visible, setVisible] = useState("");

  const height = window.innerHeight;

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY / height > 0.95) {
        setNavTheme("dark");
      } else {
        setNavTheme("light");
      }
    });
  }, [height]);

  const handleNavBar = () => {
    if (change === "change") {
      setChange("");
      setVisible("");
    } else {
      setChange("change");
      setVisible("visible");
    }
  };

  const handleNavigation = (id) => {
    setChange("");
    setVisible("");
    document.getElementById(id).scrollIntoView();
  };

  return (
    <div>
      <nav onClick={handleNavBar} className={`${navTheme} ${change}`}>
        <div className="bar1" />
        <div className="bar2" />
        <div className="bar3" />
      </nav>

      <div id="navigationPanel" className={`${visible}`}>
        <span onClick={() => handleNavigation("TopImage")}>Home</span>
        <span onClick={() => handleNavigation("servicesSection")}>
          Work Preferences
        </span>
        <span onClick={() => handleNavigation("upworkSection")}>
          Upwork Feedback
        </span>
        <span onClick={() => handleNavigation("portfolioSection")}>
          Portfolio
        </span>
        <span onClick={() => handleNavigation("contacts")}>Contact</span>
      </div>
    </div>
  );
}

export default Navigation;
