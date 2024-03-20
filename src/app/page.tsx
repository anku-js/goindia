import Sidebar from "./Components/Sidebar/Sidebar";
import Posts from "./Components/Posts/Posts";
import BlogPosts from "./Components/BlogPosts/BlogPosts";

export default function Home() {
  return (
    <div className="flex gap-5 bg-slate-100">
      <Sidebar />
      <section className="flex">
        <Posts />
        <BlogPosts />
      </section>
    </div>
  );
}
