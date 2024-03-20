import { BiHeart, BiShareAlt } from "react-icons/bi";
import { CgEye } from "react-icons/cg";
import { FiMessageSquare } from "react-icons/fi";

export default function Blogs() {
  return (
    <section className="bg-white w-full">
      <div className="pt-[2px] pr-[6px] pb-[5px] mx-4 my-7 bg-slate-200">
        <div className="flex rounded bg-white shadow-md">
          <div className="rounded-full w-[60px]  ml-6">
            <img src="/favicon.png" className="rounded-full w-full" />
          </div>
          <div className="w-full px-4 py-3">
            <div className="">
              <p className="flex gap-[20px]">
                Lorem Ipsum
                <span className="bg-[#2757a2] text-white text-[10px] rounded-[14px] px-4 py-1">
                  Sector 2
                </span>
              </p>
            </div>
            <p className="mt-2 text-[#374151]">
              Lorem ipsum is simply a dummy text of the printing and typesetting
              industry. Loreum ipsum is.
            </p>
            <div className="flex justify-between mt-2">
              <p className="flex gap-2 items-center text-sm font-bold">
                <BiHeart className="w-[30px] h-[30px]" />
                2k
              </p>
              <p className="flex gap-2 items-center text-sm font-bold">
                <CgEye className="w-[30px] h-[30px]" />
                2k
              </p>
              <p className="flex gap-2 items-center text-sm font-bold">
                <FiMessageSquare className="w-[30px] h-[30px]" />
                2k Comments
              </p>
              <p className="flex gap-2 items-center text-sm font-bold">
                <BiShareAlt className="w-[30px] h-[30px]" />
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
