import React from "react";
import Arrow from "../src/assets/arrow-left.png";
import Arrow2 from "../src/assets/arrow/arrow-right.png";
import Left from "./components/left-row";
import Right from "./components/right-row";
import UntickCircle1 from "./assets/untick-circle.png";
import UntickCircle2 from "./assets/untick-circle(1).png";
function App() {
  return (
    <section className=" relative ">
      <div className=" flex p-[24px] items-center h-[80px] w-[1320px] bg-white absolute top-5 left-6 rounded-full justify-between shadow-xl">
        <button className="flex gap-2">
          <img src={Arrow} alt=""></img> <span className="text-[18px] font-medium">Back</span></button>
        <h1 className=" font-semibold    text-[#1E1E1E] text-[28px] tracking-wide capitalize leading-6 ml-40 font-[SpaceGrotesk] ">Add new Internship</h1>
        <button
          className="flex gap-2 items-center 
 bg-[#E2E6EB] py-[12px] px-[16px] rounded-2xl"
        >
        <span className="text-[14px] capitalize text-center font-medium leading-6 text-[#828282] tracking-wide">continue to next step </span><img src={Arrow2} alt=""></img>
        </button>
      </div>

    <div className="flex flex-row justify-between items-center p-[24px] gap-[20px] absolute w-[1320px] h-[60px] left-[23px] top-[118px] border border-solid border-[#D0D4DA] rounded-full ">
      <div className="flex flex-row items-center p-0 gap-[8px] w-[210px] h-[24px] ">
      <img src={UntickCircle2} /> <p className="text-[#1E1E1E] w-[178px] h-[24px] font-sans font-normal text-[16px] leading-[24px] flex items-center tracking-wide">Internship Description</p>
      </div>

      <div className="flex flex-row items-center p-0 gap-[8px] w-[164px] h-[24px] opacity-30 ">
      <img src={UntickCircle2} /> <p className="text-[#1E1E1E] w-[178px] h-[24px] font-sans font-normal text-[16px] leading-[24px] flex items-center tracking-wide">Internship Guide</p>
      </div>

      <div className="flex flex-row items-center p-0 gap-[8px] w-[96px] h-[24px] opacity-30 ">
      <img src={UntickCircle2} /> <p className="text-[#1E1E1E] w-[178px] h-[24px] font-sans font-normal text-[16px] leading-[24px] flex items-center tracking-wide">Surveys</p>
      </div>

      <div className="flex flex-row items-center p-0 gap-[8px] w-[99px] h-[24px] opacity-30 ">
      <img src={UntickCircle2}  /> <p className="text-[#1E1E1E] w-[178px] h-[24px] font-sans font-normal text-[16px] leading-[24px] flex items-center tracking-wide">Settings</p>
      </div>
    </div>

    <div className="absolute flex flex-row">
    <Left/>
    <Right/>
    </div>
    </section>
  );
}

export default App;
