"use client";
import { useState, useEffect } from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import Posts from "./Components/Posts/Posts";
import BlogPosts from "./Components/BlogPosts/BlogPosts";
import SidebarToggle from "./Components/SidebarToggle/SidebarToggle";
import Tabs from "./Components/Tabs/Tabs";
import "./globals.css";

export default function Home() {
  const [isSidebarOpened, setIsSidebarOpened] = useState(true);
  const [selectedTab, setSelectedTab] = useState("Discussion");
  const [dataFromApi, setDataFromApi] = useState([]);
  function handleClick() {
    setIsSidebarOpened(!isSidebarOpened);
  }
  const tabs = {
    Discussion: "posts",
    Market: "blogPosts",
  };

  useEffect(() => {
    async function geData() {
      const response = await fetch(
        `https://my-json-server.typicode.com/anku-js/goindia/${tabs[selectedTab]}`
      );
      const responsJson = await response.json();
      setDataFromApi(responsJson);
    }
    geData();
  }, [selectedTab]);
  console.log(tabs[selectedTab]);
  return (
    <div className="flex">
      {isSidebarOpened && (
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
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
        <div className="flex h-screen mx-4 my-4 mx-auto">
          {selectedTab === "Discussion" && <Posts dataFromApi={dataFromApi}/>}
          {selectedTab === "Market" && <BlogPosts dataFromApi={dataFromApi}/>}
        </div>
      </section>
    </div>
  );
}
