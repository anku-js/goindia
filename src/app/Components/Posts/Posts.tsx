import { BiHeart, BiShareAlt } from "react-icons/bi";
import { CgEye } from "react-icons/cg";
import { FiMessageSquare } from "react-icons/fi";

interface Props {
  posts: {
    id: number;
    comments: string;
    label: string;
    likes: string;
    post: string;
    timeElapsed: string;
    userAvatar: string;
    userName: string;
    views: string;
  }[];
}
export default function Posts({ posts }: Props) {
  return (
    <div className="bg-white w-full">
      <h2 className="hidden lg:block bg-slate-200 w-fit text-red-600 text-4xl ml-5 px-4 py-2">
        Discussion Forum
      </h2>
      {posts?.map(
        ({
          id,
          comments,
          label,
          likes,
          post,
          timeElapsed,
          userAvatar,
          userName,
          views,
        }) => {
          return (
            <div className="pl-6 py-6 lg:px-5 lg:py-7" key={id}>
              <div className="pt-[2px] pr-[6px] pb-[5px] bg-slate-200">
                <div className="flex rounded bg-white shadow-md">
                  <div className="rounded-full w-[30px] h-[30px] lg:w-[60px] lg:h-[60px] mt-2.5 ml-2 lg:ml-6">
                    <img src={userAvatar} className="rounded-full w-full object-cover h-full" />
                  </div>
                  <div className="w-full px-2 py-2 lg:px-4 lg:py-3">
                    <div className="flex gap-[10px] lg:gap-[20px]">
                      <p className="text-[12px] lg:text-[18px]">{userName}</p>
                      <span className="bg-[#2757a2] text-white text-[8px] lg:text-[10px] rounded-[14px] px-2 py-1 lg:px-4 lg:py-1 flex items-center">
                        {label}
                      </span>
                    </div>
                    <p className="mt-2 text-[#374151] leading-tight tracking-wide text-[12px] lg:text-[18px]">
                      {post}
                    </p>
                    <div className="flex justify-between mt-4">
                      <p className="flex gap-1 lg:gap-2 items-center text-[10px] lg:text-sm font-medium">
                        <BiHeart className="w-[18px] h-[20px] lg:w-[26px] lg:h-[26px]" />
                        {likes}
                      </p>
                      <p className="flex gap-1 lg:gap-2 items-center text-[10px] lg:text-sm font-medium">
                        <CgEye className="w-[18px] h-[20px] lg:w-[26px] lg:h-[26px]" />
                        {views}
                      </p>
                      <p className="flex gap-1 lg:gap-2 items-center text-[10px] lg:text-sm font-medium">
                        <FiMessageSquare className="w-[18px] h-[20px] lg:w-[26px] lg:h-[26px]" />
                        {comments} Comments
                      </p>
                      <p className="flex gap-1 lg:gap-2 items-center text-[10px] lg:text-sm font-medium">
                        <BiShareAlt className="w-[18px] h-[20px] lg:w-[26px] lg:h-[26px]" />
                        Share
                      </p>
                    </div>
                  </div>
                  <p className="text-[#2757a2] text-xs lg:text-sm w-[100px] mt-2 mr-2 lg:mt-3 lg:mr-4 font-bold">
                    {timeElapsed}
                  </p>
                </div>
              </div>
            </div>
          );
        }
      )}
      {/* <div className="py-6">
        <div className="pt-[2px] pr-[6px] pb-[5px] bg-slate-200">
          <div className="flex rounded bg-white shadow-md">
            <div className="rounded-full w-[60px] ml-2 lg:ml-6">
              <img src="/favicon.png" className="rounded-full w-full" />
            </div>
            <div className="w-full px-2 py-2 lg:px-4 lg:py-3">
              <div className="flex gap-[10px] lg:gap-[20px]">
                <p className="text-[12px] lg:text-[18px]">Lorem Ipsum</p>
                <span className="bg-[#2757a2] text-white text-[8px] lg:text-[10px] rounded-[14px] px-2 py-1 lg:px-4 lg:py-1 flex items-center">
                  Sector 2
                </span>
              </div>
              <p className="mt-2 text-[#374151] leading-tight tracking-wide text-[12px] lg:text-[18px]">
                Lorem ipsum is simply a dummy text of the printing and
                typesetting industry. Loreum ipsum is.
              </p>
              <div className="flex justify-between mt-4">
                <p className="flex gap-1 lg:gap-2 items-center text-[10px] lg:text-sm font-medium">
                  <BiHeart className="w-[20px] h-[20px] lg:w-[26px] lg:h-[26px]" />
                  2k
                </p>
                <p className="flex gap-1 lg:gap-2 items-center text-[10px] lg:text-sm font-medium">
                  <CgEye className="w-[20px] h-[20px] lg:w-[26px] lg:h-[26px]" />
                  2k
                </p>
                <p className="flex gap-1 lg:gap-2 items-center text-[10px] lg:text-sm font-medium">
                  <FiMessageSquare className="w-[20px] h-[20px] lg:w-[26px] lg:h-[26px]" />
                  2k Comments
                </p>
                <p className="flex gap-1 lg:gap-2 items-center text-[10px] lg:text-sm font-medium">
                  <BiShareAlt className="w-[20px] h-[20px] lg:w-[26px] lg:h-[26px]" />
                  Share
                </p>
              </div>
            </div>
            <p className="text-[#2757a2] text-xs lg:text-sm w-[100px] mt-2 mr-2 lg:mt-3 lg:mr-4 font-bold">
              2 min ago
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
}
