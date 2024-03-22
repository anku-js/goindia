import { FaUser } from "react-icons/fa";
import {
  BiSolidBell,
  BiSolidMessageAltDetail,
  BiSolidDollarCircle,
  BiCaretDown,
} from "react-icons/bi";

interface Props {
  setSelectedTab: any;
  selectedTab: string;
}
export default function Sidebar({
  setSelectedTab,
  selectedTab,
}: Props) {
  return (
    <section className="fixed bg-[#1f3a61] text-white min-h-screen w-1/2 z-10 lg:relative lg:w-[40%] text-[14px] lg:text-[20px]">
      <div className="px-5 py-4 lg:px-7 lg:py-6 flex justify-between items-center">
        <div className="flex items-center gap-3 lg:gap-4">
          <FaUser className="flex w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] rounded-full" />
          <p>Hello</p>
        </div>
        <BiSolidBell className="w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] mr-4" />
      </div>
      <div className="py-4 border-t-2 border-slate-500 ">
        <ul>
          <li
            className={`flex items-center justify-between px-4 py-2.5 lg:px-6 lg:py-2.5 hover:bg-[#142742] ${
              selectedTab === "Discussion" && "bg-[#142742]"
            }`}
            onClick={() => setSelectedTab("Discussion")}
          >
            <div className="flex gap-3 items-center">
              <BiSolidMessageAltDetail className="w-[20px] h-[20px] lg:w-[30px] lg:h-[30px]" />
              <p>Discussion Forum</p>
            </div>
            <BiCaretDown />
          </li>
          <li
            className={`flex gap-3 px-4 py-2.5 lg:px-6 lg:py-2.5 hover:bg-[#142742] items-center ${
              selectedTab === "Market" && "bg-[#142742]"
            }`}
            onClick={() => setSelectedTab("Market")}
          >
            <BiSolidDollarCircle className="w-[20px] h-[20px] lg:w-[30px] lg:h-[30px]" />
            <p>Market Stories</p>
          </li>
          <li className="flex gap-3 px-4 py-2.5 lg:px-6 lg:py-2.5 hover:bg-[#142742]">
            <span className="w-[20px] h-[20px] lg:w-[30px] lg:h-[30px]"></span>
            <p>Sentiment</p>
          </li>
          <li className="flex gap-3 px-4 py-2.5 lg:px-6 lg:py-2.5 hover:bg-[#142742]">
            <span className="w-[20px] h-[20px] lg:w-[30px] lg:h-[30px]"></span>
            <p>Market</p>
          </li>
          <li className="flex gap-3 px-4 py-2.5 lg:px-6 lg:py-2.5 hover:bg-[#142742]">
            <span className="w-[20px] h-[20px] lg:w-[30px] lg:h-[30px]"></span>
            <p>Sector</p>
          </li>
          <li className="flex gap-3 px-4 py-2.5 lg:px-6 lg:py-2.5 hover:bg-[#142742]">
            <span className="w-[20px] h-[20px] lg:w-[30px] lg:h-[30px]"></span>
            <p>Watchlist</p>
          </li>
          <li className="flex gap-3 px-4 py-2.5 lg:px-6 lg:py-2.5 hover:bg-[#142742]">
            <span className="w-[20px] h-[20px] lg:w-[30px] lg:h-[30px]"></span>
            <p>Events</p>
          </li>
          <li className="flex gap-3 px-4 py-2.5 lg:px-6 lg:py-2.5 hover:bg-[#142742]">
            <span className="w-[20px] h-[20px] lg:w-[30px] lg:h-[30px]"></span>
            <p>News/Interview</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
