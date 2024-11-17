import { Link } from "react-router-dom";
import CardModule from "cardmodule";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="header">
        <ul>
          <li>
            <Link to="/">How it works</Link>
          </li>
          <li>
            <Link to="/">Gifts</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li className="headerLogo">
            <img src={`./logo.png`} alt="" />
          </li>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/">Members</Link>
          </li>
          <li>
            <Link to="/">Contracts</Link>
          </li>
        </ul>
      </div>
      <div className="mainPicture"></div>
      <div className="iconTitle">
        "WHAT'S FOR DINNER"
        <br />
        <span>
          FINALLY HAS AN
          <br />
          EASY ANWSER
        </span>
      </div>
      <CardModule />
      <div className="chefs">
        <div>
          <p>
            <span>Title</span>
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <img src={`./chef.png`} alt="" />
        </div>
      </div>
    </>
  );
};

export default Home;
