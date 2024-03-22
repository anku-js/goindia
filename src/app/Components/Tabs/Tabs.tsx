interface Props {
  selectedTab: string;
  setSelectedTab: any;
}

export default function Tabs({ selectedTab, setSelectedTab }: Props) {
  return (
    <div className="relative w-full left-0 border-x-4 border-black bg-slate-100 lg:hidden text-white">
      <div className="flex justify-between my-1">
        <div
          className={`text-center py-2.5 border-b-2  w-1/2 ${
            selectedTab === "Discussion"
              ? "bg-[#142742] border-pink-700"
              : "bg-[#1f3a61] border-transparent"
          }`}
          onClick={() => setSelectedTab("Discussion")}
        >
          Discussion Forum
        </div>
        <div
          className={`text-center py-2.5 border-b-2 w-1/2 ${
            selectedTab === "Market"
              ? "bg-[#142742] border-pink-700"
              : "bg-[#1f3a61] border-transparent"
          }`}
          onClick={() => setSelectedTab("Market")}
        >
          Market Stories
        </div>
      </div>
    </div>
  );
}
