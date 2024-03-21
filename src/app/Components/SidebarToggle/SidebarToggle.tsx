import { AiOutlineCaretRight, AiOutlineCaretLeft } from "react-icons/ai";

interface Props {
  handleClick: any;
  isSidebarOpened: boolean;
}

export default function SidebarToggle({ handleClick, isSidebarOpened }: Props) {
  return (
    <button
      className={`fixed z-10 flex items-center h-screen bg-slate-100 button open lg:relative lg:left-[0] ${
        isSidebarOpened ? "left-[50%] " : "left-[0]"
      }`}
    >
      <div
        className="flex items-center h-[100px] bg-[#1f3a61]"
        onClick={handleClick}
      >
        {isSidebarOpened ? (
          <AiOutlineCaretLeft className="text-white text-[20px]" />
        ) : (
          <AiOutlineCaretRight className="text-white text-[20px]" />
        )}
      </div>
    </button>
  );
}
