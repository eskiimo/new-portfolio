import React from "react";
import "./nav.css";

export default function Nav(props) {
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 200;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);
  const links = [
    { link: "/", index: 0 },
    { link: "Blog", index: 1 },
    { link: "Projects", index: 2 },
    { link: "Contact", index: 3 },
  ];
  return (
    <div className="navbar">
      <div className="free">
        {" "}
        <img alt="free palestine" src="/assets/palestine.png" />
        <p>Free Palestine</p>
        <img alt="free palestine" src="/assets/palestine.png" />
      </div>
      <nav>
        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.index}>
              <button
                className={
                  link.index === props.activeLink ? "active-link " : ""
                }
                onClick={() => {
                  props.swipe(link.index);
                }}
              >
                {link.link}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
