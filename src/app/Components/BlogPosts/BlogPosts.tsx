interface Props {
  blogPosts: {
    id: number,
    title: string,
    blog: string,
    blogImage: string
  }[]
}
export default function BlogPosts({ blogPosts }: Props) {
  return (
    <div className="bg-white">
      {blogPosts?.map(({ id, title, blog, blogImage }) => {
        return (
          <div className="px-10 py-6 lg:px-5 lg:py-6 max-w-96" key={id}>
            <div className="">
              <img
                src={blogImage}
                alt="blogPost image"
                className="rounded-tl-[3px] rounded-tr-[3px] block max-w-full"
              />
            </div>
            <div className="px-3 py-3 border-x-2 border-slate-100">
              <h2 className="text-xs lg:text-[18px] text-[#28303d] font-semibold">
                {title}
              </h2>
              <p className="text-[10px] lg:text-[16px] text-[#374151] mt-2 leading-relaxed">
                {blog}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
