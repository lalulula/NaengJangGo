import React from "react";
import { useNavigate } from "react-router-dom";
import "./navbar.css";
import Ani1 from "../../assets/Lottie/Ani1.json";
import Ani2 from "../../assets/Lottie/Ani2.json";
import Ani3 from "../../assets/Lottie/Ani3.json";
import Ani4 from "../../assets/Lottie/Ani4.json";
import Ani5 from "../../assets/Lottie/Ani5.json";
import Ani6 from "../../assets/Lottie/Ani6.json";
import Ani7 from "../../assets/Lottie/Ani7.json";
import Ani8 from "../../assets/Lottie/Ani8.json";
import Ani9 from "../../assets/Lottie/Ani9.json";
const DropDownMenu = () => {
  const navigate = useNavigate();

  return (
    <label className="popup">
      <input type="checkbox" />
      <div className="burger" tabIndex="0">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className="popup-window">
        <legend>Actions</legend>
        <ul>
          <li>
            <button>
              <svg
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                height="14"
                width="14"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle r="4" cy="7" cx="9"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              <span>Colloborators</span>
            </button>
          </li>
          <li>
            <button>
              <svg
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                height="14"
                width="14"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
              </svg>
              <span>Magic Link</span>
            </button>
          </li>
          <hr />
          <li>
            <button>
              <svg
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                height="14"
                width="14"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect ry="2" rx="2" height="13" width="13" y="9" x="9"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
              <span>Clone</span>
            </button>
          </li>
          <li>
            <button>
              <svg
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                height="14"
                width="14"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon points="16 3 21 8 8 21 3 21 3 16 16 3"></polygon>
              </svg>
              <span>Edit</span>
            </button>
          </li>
          <hr />
          <li>
            <button onClick={() => navigate("/main")}>
              <svg
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                height="14"
                width="14"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line y2="18" x2="6" y1="6" x1="18"></line>
                <line y2="18" x2="18" y1="6" x1="6"></line>
              </svg>
              <span>Sign Out</span>
            </button>
          </li>
        </ul>
      </nav>
    </label>
  );
};

const Logo = () => {
  return (
    <div className="logo-container">
      <img
        src={`${process.env.PUBLIC_URL}/logo.png`}
        alt="Logo"
        style={{ maxWidth: "100px" }}
      />
    </div>
  );
};

const TopBar = () => {
  return (
    <div className="top-bar">
      <Logo />
      <DropDownMenu />
    </div>
  );
};

export default TopBar;
