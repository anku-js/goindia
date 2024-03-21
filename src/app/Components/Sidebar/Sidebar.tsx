import { FaUser } from "react-icons/fa";
import {
  BiSolidBell,
  BiSolidMessageAltDetail,
  BiSolidDollarCircle,
  BiCaretDown,
} from "react-icons/bi";
import { AiOutlineCaretRight, AiOutlineCaretLeft } from "react-icons/ai";

export default function Sidebar({
  isSidebarOpened,
  handleClick,
  setSelectedTab,
  selectedTab,
}) {
  return (
    <section className="fixed bg-[#1f3a61] text-white text-xl min-h-screen w-1/2 z-10 lg:relative lg:w-[30%]">
      <div className="px-7 py-6 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <FaUser className="flex w-[30px] h-[30px] rounded-full" />
          <p>Hello</p>
        </div>
        <BiSolidBell className="w-[30px] h-[30px] mr-4" />
      </div>
      <div className="py-4 border-t-2 border-slate-500 ">
        <ul>
          <li
            className={`flex items-center justify-between px-6 py-2.5 hover:bg-[#142742] ${
              selectedTab === "Discussion" && "bg-[#142742]"
            }`}
            onClick={() => setSelectedTab("Discussion")}
          >
            <div className="flex gap-3">
              <BiSolidMessageAltDetail className="w-[30px] h-[30px]" />
              <p>Discussion Forum</p>
            </div>
            <BiCaretDown />
          </li>
          <li
            className={`flex gap-3 px-6 py-2.5 hover:bg-[#142742] ${
              selectedTab === "Market" && "bg-[#142742]"
            }`}
            onClick={() => setSelectedTab("Market")}
          >
            <BiSolidDollarCircle className="w-[30px] h-[30px]" />
            <p>Market Stories</p>
          </li>
          <li className="flex gap-3 px-6 py-2.5 hover:bg-[#142742]">
            <span className="w-[30px] h-[30px]"></span>
            <p>Sentiment</p>
          </li>
          <li className="flex gap-3 px-6 py-2.5 hover:bg-[#142742]">
            <span className="w-[30px] h-[30px]"></span>
            <p>Market</p>
          </li>
          <li className="flex gap-3 px-6 py-2.5 hover:bg-[#142742]">
            <span className="w-[30px] h-[30px]"></span>
            <p>Sector</p>
          </li>
          <li className="flex gap-3 px-6 py-2.5 hover:bg-[#142742]">
            <span className="w-[30px] h-[30px]"></span>
            <p>Watchlist</p>
          </li>
          <li className="flex gap-3 px-6 py-2.5 hover:bg-[#142742]">
            <span className="w-[30px] h-[30px]"></span>
            <p>Events</p>
          </li>
          <li className="flex gap-3 px-6 py-2.5 hover:bg-[#142742]">
            <span className="w-[30px] h-[30px]"></span>
            <p>News/Interview</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
