import React from "react";
import "./Header.scss";
import Illustration from "../../assets/Illustration.png";
import Group from "../../assets/Group.png";

const Header = () => {
  return (
    <div className="gpt3__header" id="#home">
      <div className="gpt3__header-left_container">
        <div className="heading-text gradient__text">
          Let’s Build Something amazing with GPT-3 OpenAI
        </div>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <form>
          <input placeholder="Your Email Address" />
          <button className="button-text">get started</button>
        </form>
        <div className="info-text">
          <img src={Group} alt="group-img" />
          <div className="desc">
            1,600 people requested access a visit in last 24 hours
          </div>
        </div>
      </div>
      <div className="gpt3__header-right_container">
        <img src={Illustration} alt="illustration img" />
      </div>
    </div>
  );
};

export default Header;
