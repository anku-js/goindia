"use client";
import { useState } from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import Posts from "./Components/Posts/Posts";
import BlogPosts from "./Components/BlogPosts/BlogPosts";
import SidebarToggle from "./Components/SidebarToggle/SidebarToggle";
import Tabs from "./Components/Tabs/Tabs";
import "./globals.css";

export default function Home() {
  const [isSidebarOpened, setIsSidebarOpened] = useState(false);
  const [selectedTab, setSelectedTab] = useState("Discussion");
  function handleClick() {
    setIsSidebarOpened(!isSidebarOpened);
  }
  return (
    <div className="flex">
      {isSidebarOpened && (
        <Sidebar
          isSidebarOpened={isSidebarOpened}
          handleClick={handleClick}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
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
        <div className="flex h-screen mx-4 my-4">
          {selectedTab === "Discussion" && <Posts />}
          {selectedTab === "Market" && <BlogPosts />}
        </div>
      </section>
    </div>
  );
}
