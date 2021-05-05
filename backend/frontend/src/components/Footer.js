import React from "react";
import UPWORK from "../constants/icons/upwork1.svg";

function Footer() {
  return (
    <footer
      id="contacts"
      style={{
        backgroundColor: "#111",
        minHeight: "20vh",
        scrollSnapAlign: "end",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 5vw",
      }}
    >
      <div>
        <span style={{ color: "#fff", textAlign: "center", display: "block" }}>
          ©2021 Dmitriy Grechkin{" "}
          <a style={{ color: "#fff" }} href="mailto:dmitrygrechkin04@gmail.com">
            (dmitrygrechkin04@gmail.com)
          </a>
        </span>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <a href="https://www.linkedin.com/in/dmitriy-grechkin/" target="blank">
          <i className="fab fa-linkedin fa-3x white-color" />
        </a>
        <a
          href="https://www.upwork.com/freelancers/~01d5c3976414600ebf"
          target="blank"
        >
          <img className="white-color" src={UPWORK} />
        </a>
        <a href="mailto:dmitrygrechkin04@gmail.com">
          <i className="fa fa-envelope fa-3x white-color" />
        </a>
        <a href="https://wa.me/994559304921" target="blank">
          <i
            className="fab fa-whatsapp fa-3x white-color"
            style={{ marginRight: 0 }}
          ></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
