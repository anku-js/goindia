"use client";
import { useState, useEffect } from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import Posts from "./Components/Posts/Posts";
import BlogPosts from "./Components/BlogPosts/BlogPosts";
import SidebarToggle from "./Components/SidebarToggle/SidebarToggle";
import Tabs from "./Components/Tabs/Tabs";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import "./globals.css";

export default function Home() {
  const [isSidebarOpened, setIsSidebarOpened] = useState(false);
  const [selectedTab, setSelectedTab] = useState("Discussion");
  const [dataFromApi, setDataFromApi] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setuserInfo] = useState({
    name: "",
    userImg: ""
  });
  function handleClick() {
    setIsSidebarOpened(!isSidebarOpened);
  }
  const tabs: Record<string, string> = {
    Discussion: "posts",
    Market: "blogPosts",
  };

  useEffect(() => {
    setIsLoading(true);
    async function geData() {
      const response = await fetch(
        `https://my-json-server.typicode.com/anku-js/goindia/${tabs[selectedTab]}`
      );
      const responsJson = await response.json();

      setDataFromApi(responsJson);
      setIsLoading(false);
    }
    async function geUserData() {
      const response = await fetch(
        `https://my-json-server.typicode.com/anku-js/goindia/userInfo`
      );
      const responsJson = await response.json();
      setuserInfo(responsJson);
    }
    geData();
    geUserData();
  }, [selectedTab]);

  return (
    <div className="flex">
      {isSidebarOpened && (
        <Sidebar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          userInfo={userInfo}
        />
      )}
      <SidebarToggle
        isSidebarOpened={isSidebarOpened}
        handleClick={handleClick}
      />
      <section
        className={`h-screen w-[100%] lg:${
          isSidebarOpened ? "w-[70%]" : "w-[100%]"
        }`}
      >
        <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        {!isLoading ? (
          <div className="flex h-screen mx-auto">
            {selectedTab === "Discussion" && <Posts posts={dataFromApi} />}
            {selectedTab === "Market" && <BlogPosts blogPosts={dataFromApi} />}
          </div>
        ) : (
          <div className="flex justify-center items-center h-screen text-[#1f3a61] text-4xl animate-spin">
            <AiOutlineLoading3Quarters />
          </div>
        )}
      </section>
    </div>
  );
}
