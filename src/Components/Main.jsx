import React, { Component } from "react";

import taiye from "./images/teewhy.jpg";

export default class Main extends Component {
  render() {
    return (
      <div className="w-full h-[100%] md:h-auto grid md:grid-cols-2">
        <div className="bg-white pt-8 md:pt-[2rem] ">
          <div className="text-3xl mt-[5rem] md:text-5xl leading-[4rem] uppercase font-bold p-10 md:p-[5rem]">
            <h1 className=" tracking-[5px] text-[#08538c]">
              Microlearning{" "}
            </h1>
            <h1 className=" tracking-[5px] text-[#08538c]">
              made easy
            </h1>
            <div className="text-sm md:text-lg font-normal   md:text-[24px] leading-[150%] text-[#08538c] mt-8 md:mt-[3rem]">
              Create mobile-first courses, summaries,<br /> follow-ups in 15 minutes.
              Slingshot complements <br /> your existing eLearning ecosystem and
              communication toolkit
            </div>
            <div>
              <button className="text-xl md:text-2xl bg-[#333983] shadow-md py-3 rounded-[2rem] w-[13rem] text-[#ffffff] mt-8 md:mt-[3rem]">
                GIVE IT A TRY
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
