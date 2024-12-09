import toppic from "../../../../assets/top.png";
import Leftpic from "../../../../assets/left.png";
import rightpic from "../../../../assets/right.png";

export default function Main_photo() {
  return (
    <>
      <div className="bg-background space-y-[79px]">
        <div className="flex justify-center ">
          <img src={toppic} className="mt-[167px] border-1  border-black shadow-[8px_23px_1px_rgba(0,0,0,1)]  rounded-2xl"/>
        </div>
        <div className="flex justify-center gap-[62px]">
          <img src={Leftpic} className="border-1  border-black shadow-[8px_19px_1px_rgba(0,0,0,1)]  rounded-2xl" />
          <img src={rightpic} className="border-1  border-black shadow-[8px_19px_1px_rgba(0,0,0,1)]  rounded-2xl"/>
        </div>
      </div>
    </>
  );
}
