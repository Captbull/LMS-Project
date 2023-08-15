import React, { Component } from "react";

import taiye from "./images/teewhy.jpg";

export default class Main extends Component {
  render() {
    return (
      <div className="w-full h-[100%] md:h-auto grid md:grid-cols-2">
        <div className="bg-white pt-8 md:pt-[2rem] ">
          <div className="text-3xl md:text-5xl leading-[4rem] uppercase font-bold p-10 md:p-[5rem]">
            <h1 className="text-black tracking-[5px] text-[black]">
              Microlearning{" "}
            </h1>
            <h1 className="text-black tracking-[5px] text-[black]">
              made easy
            </h1>
            <div className="text-sm md:text-lg font-normal text-2xl  md:text-[24px] leading-[150%] text-black mt-8 md:mt-[3rem]">
              Create mobile-first courses, summaries, follow-ups in 15 minutes.
              Slingshot complements your existing eLearning ecosystem and
              communication toolkit
            </div>
            <div>
              <button className="text-xl md:text-2xl bg-[#59beba] rounded-[2rem] w-[13rem] text-[#333983] mt-8 md:mt-[3rem]">
                
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white px-10 md:px-[10rem] pt-4 md:pt-[4rem]">
          <img
            src={taiye}
            alt=""
            className="rounded-full w-[30rem] md:w-auto"
          />
        </div>
      </div>
    );
  }
}
