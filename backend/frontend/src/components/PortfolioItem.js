import React from "react";

import PYTHON from "../constants/icons/python.svg";
import DJANGO from "../constants/icons/django.svg";

function PortfolioItem({
  src,
  title,
  commercial,
  description,
  viewLink,
  moreLink,

  python,
  django,
  js,
  react,
  css,
  html,
  bootstrap,
}) {
  return (
    <div className="portfolioItem">
      <div className="imgContainer">
        {commercial ? (
          <span
            style={{
              transform: "rotate(-45deg)",
              fontColor: "red",
              position: "absolute",
              left: "-30px",
              top: "30px",
              fontSize: "13px",
              width: "150px",
              textAlign: "center",
              backgroundColor: "rgba(255,0,0,0.5)",
            }}
          >
            Commercial
          </span>
        ) : (
          ""
        )}

        <img className="itemImage" src={src} alt={title} />
      </div>
      <div className="itemDescription">
        <h3>{title}</h3>
        <div className="stackList">
          {python ? <img src={PYTHON} id="pythonIcon" /> : ""}
          {django ? <img src={DJANGO} id="djangoIcon" /> : ""}
          {js ? <i class="fab fa-js fa-3x amber-text"></i> : ""}
          {react ? <i class="fab fa-react blue-text fa-3x" /> : ""}
          {css ? <i class="fab fa-css3 fa-3x orange-text" /> : ""}
          {html ? <i class="fab fa-html5 fa-3x deep-orange-text" /> : ""}
          {bootstrap ? (
            <i class="fab fa-bootstrap fa-3x deep-purple-text" />
          ) : (
            ""
          )}
        </div>
        <p>{description}</p>
        <div className="linksSet">
          {moreLink ? (
            <a
              className="btn winter-neva-gradient"
              href={moreLink}
              target="blank"
            >
              More
            </a>
          ) : (
            ""
          )}
          {viewLink ? (
            <a
              href={viewLink}
              target="blank"
              className="btn winter-neva-gradient"
            >
              View
            </a>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default PortfolioItem;
