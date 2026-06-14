"use client";

import { useState } from "react";
import { mockVideos } from "../data/mockData";
import { HeartIcon } from "../components/Icons";
import { ProfileVideoList } from "../components/ProfileVideoList";

export default function Explore() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredVideos = mockVideos.filter((video) => {
    const query = searchQuery.toLowerCase();
    return (
      video.authorName.toLowerCase().includes(query) ||
      video.description.toLowerCase().includes(query) ||
      (video.musicName && video.musicName.toLowerCase().includes(query))
    );
  });

  const trendingTags = [
    "#leminhtan",
    "#react",
    "#nextjs",
    "#trending",
    "#animation",
    "#chill",
  ];

  return (
    <div className="w-full h-full bg-bg-dark text-white p-4 pb-24 overflow-y-auto scrollbar-none flex flex-col items-center">
      <div className="w-full max-w-[800px] flex flex-col gap-6">
        {/* Header */}
        <div>
          <h1 className="text-xl font-extrabold tracking-tight">Khám phá</h1>
          <p className="text-xs text-text-muted mt-0.5">
            Tìm kiếm nội dung thịnh hành
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tìm kiếm tài khoản, nhạc, nội dung..."
            className="w-full bg-zinc-900 border border-zinc-800 text-xs rounded-xl py-3 pl-10 pr-4 text-white placeholder-zinc-500 focus:outline-none focus:border-primary/80 transition-colors"
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
              className="absolute right-3 top-3.5 text-zinc-500 hover:text-white"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
        </div>

        {/* Trending Hashtags */}
        <div className="flex flex-col gap-2.5">
          <h2 className="text-xs font-bold text-text-secondary uppercase tracking-wider">
            Xu hướng hot
          </h2>
          <div className="flex flex-wrap gap-1.5">
            {trendingTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSearchQuery(tag.substring(1))}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-zinc-900 hover:bg-zinc-800 border border-zinc-800/60 transition-colors"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Video Grid */}
        <div className="flex flex-col gap-3">
          <h2 className="text-xs font-bold text-text-secondary uppercase tracking-wider">
            {searchQuery ? "Kết quả tìm kiếm" : "Video thịnh hành"}
          </h2>
          <ProfileVideoList videos={filteredVideos} />
        </div>
      </div>
    </div>
  );
}
