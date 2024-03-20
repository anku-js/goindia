import { BiHeart, BiShareAlt } from "react-icons/bi";
import { CgEye } from "react-icons/cg";
import { FiMessageSquare } from "react-icons/fi";

export default function Posts() {
  return (
    <section className="bg-white w-full">
      <div className="pt-[2px] pr-[6px] pb-[5px] mx-4 my-7 bg-slate-200">
        <div className="flex rounded bg-white shadow-md">
          <div className="rounded-full w-[60px]  ml-6">
            <img src="/favicon.png" className="rounded-full w-full" />
          </div>
          <div className="w-full px-4 py-3">
            <div className="flex gap-[20px]">
              <p className="text-[18px]">Lorem Ipsum</p>
              <span className="bg-[#2757a2] text-white text-[10px] rounded-[14px] px-4 py-1 flex items-center">
                Sector 2
              </span>
            </div>
            <p className="mt-2 text-[#374151] leading-tight tracking-wide text-[18px]">
              Lorem ipsum is simply a dummy text of the printing and typesetting
              industry. Loreum ipsum is.
            </p>
            <div className="flex justify-between mt-4">
              <p className="flex gap-2 items-center text-sm font-medium">
                <BiHeart className="w-[26px] h-[26px]" />
                2k
              </p>
              <p className="flex gap-2 items-center text-sm font-medium">
                <CgEye className="w-[26px] h-[26px]" />
                2k
              </p>
              <p className="flex gap-2 items-center text-sm font-medium">
                <FiMessageSquare className="w-[26px] h-[26px]" />
                2k Comments
              </p>
              <p className="flex gap-2 items-center text-sm font-medium">
                <BiShareAlt className="w-[26px] h-[26px]" />
                Share
              </p>
            </div>
          </div>
          <p className="text-[#2757a2] text-sm w-[100px] mt-3 mr-4 font-bold">
            2 min ago
          </p>
        </div>
      </div>
    </section>
  );
}
