"use client";

import { useState, useMemo } from "react";
import ProfileVideoList from "../components/ProfileVideoList";
import Button from "../components/Button";
import { mockVideos } from "../data/mockData";

export default function Explore() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredVideos = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return mockVideos;
    return mockVideos.filter((video) => {
      return (
        video.authorName.toLowerCase().includes(query) ||
        video.description.toLowerCase().includes(query) ||
        (video.musicName && video.musicName.toLowerCase().includes(query))
      );
    });
  }, [searchQuery]);

  const trendingTags = [
    "#leminhtan",
    "#trending",
    "#react",
    "#nextjs",
    "#animation",
    "#chill",
  ];

  return (
    <div className="flex flex-col items-center w-full h-full bg-bg-dark text-white p-4 pb-24 overflow-auto scrollbar-none">
      <div className="w-full max-w-[800px] flex flex-col gap-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Khám phá</h1>
          <p className="text-xs text-text-muted mt-0.5">Tìm kiếm thịnh hành</p>
        </div>

        {/* Search */}
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tìm kiếm tài khoản, nhạc, nội dung"
            className="w-full bg-zinc-900 border border-zinc-800 text-xs rounded-xl py-3 pl-10 pr-4 text-white focus:outline-none focus:border-primary transition-colors"
          />
          <svg
            className="w-4 h-4 absolute left-3.5 top-3.5 text-zinc-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3.5 top-3.5 text-zinc-500 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          )}
        </div>

        {/* Trending */}
        <div className="flex flex-col gap-2.5">
          <h2 className="text-xs font-bold text-text-secondary uppercase">
            Xu hướng
          </h2>

          <div className="flex flex-wrap gap-2">
            {trendingTags.map((tag) => (
              <Button key={tag} tag>
                {tag}
              </Button>
            ))}
          </div>
        </div>

        {/* video  */}
        <div className="flex flex-col gap-3">
          <h2 className="text-xs font-bold text-text-secondary uppercase">
            {searchQuery ? "Kết quả tìm kiếm" : "Video thịnh hành"}
          </h2>
          <ProfileVideoList videos={filteredVideos} />
        </div>
      </div>
    </div>
  );
}
