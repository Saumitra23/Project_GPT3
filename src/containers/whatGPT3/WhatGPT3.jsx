import React from "react";
import "./WhatGPT3.scss";

const BottomContent = ({ title, para }) => {
  return (
    <article>
      <div />
      <h1>{title}</h1>
      <p>{para}</p>
    </article>
  );
};
const WhatGPT3 = () => {
  return (
    <section>
      <article className="gpt3__top-content" id="wgpt">
        <h1>What is GPT-3</h1>
        <p>
          We so opinion friends me message as delight. Whole front do of plate
          heard oh ought. His defective nor convinced residence own. Connection
          has put impossible own apartments boisterous. At jointure ladyship an
          insisted so humanity he. Friendly bachelor entrance to on by.
        </p>
      </article>
      <article className="gpt3__mid-content">
        <h1>The possibilities are beyond your imagination</h1>
        <h2>Explore The Library</h2>
      </article>
      <article className="gpt3__bottom-content">
        <BottomContent
          title="ChatBots"
          para="We so opinion friends me message as delight. Whole front do of plate heard oh ought. "
        />
        <BottomContent
          title="Knowledgebase"
          para="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        />
        <BottomContent
          title="Education"
          para="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        />
      </article>
    </section>
  );
};

export default WhatGPT3;
