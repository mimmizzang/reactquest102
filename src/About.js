import PrivateModule from "privatemodule";
import "./About.css";

const About = () => {
  return (
    <div className="aboutBody">
      <div className="top">
        <div className="topLeft">
          <PrivateModule type="box" data="top" />
        </div>
        <div className="topRight">
          <PrivateModule type="image" data="./right1.png" alt="" />
          <PrivateModule type="image" data="./right2.png" alt="" />
        </div>
      </div>
      <div className="boxAll">
        <PrivateModule type="box" data="middle" />
        <div className="boxRight">7</div>
      </div>
      <div className="footer">
        <div className="footerLeft">
          <ul>
            <li>법적고지</li>
            <li>|</li>
            <li>이메일무단수집거부</li>
            <li>|</li>
            <li>이용약관</li>
            <li>|</li>
            <li>개인정보취급방침</li>
            <li>|</li>
            <li>고객센터</li>
            <li>|</li>
            <li>입찰공고</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
