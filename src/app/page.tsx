import Sidebar from "./Components/Sidebar/Sidebar";
import Blogs from "./Components/Blogs/Blogs";
export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <Blogs />
    </div>
  );
}
