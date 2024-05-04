import React from "react";
import { Google, Atlassian, Slack, Shopify, Dropbox } from "../../assets/index";
import "./Brand.scss";

const Brand = () => {
  return (
    <div className="gpt3__brand ">
      <img src={Google} alt="google-img"></img>
      <img src={Atlassian} alt="atlassian-img"></img>
      <img src={Slack} alt="slack-img"></img>
      <img src={Shopify} alt="shopify-img"></img>
      <img src={Dropbox} alt="dropbox-img"></img>
    </div>
  );
};

export default Brand;
