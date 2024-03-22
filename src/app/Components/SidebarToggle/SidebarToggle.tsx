import { AiOutlineCaretRight, AiOutlineCaretLeft } from "react-icons/ai";

interface Props {
  handleClick: any;
  isSidebarOpened: boolean;
}

export default function SidebarToggle({ handleClick, isSidebarOpened }: Props) {
  return (
    <button
      className={`fixed h-screen flex items-center bg-slate-100 button open lg:relative lg:left-[0] ${
        isSidebarOpened ? "left-[50%] z-10" : "left-[0] h-[100px] z-0"
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
