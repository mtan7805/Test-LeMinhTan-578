"use client";

import { useState } from "react";
import { mockVideos } from "../data/mockData";
import { HeartIcon } from "../components/Icons";
import Button from "../components/Button";
import { ProfileVideoList } from "../components/ProfileVideoList";

export default function Profile() {
  const [activeSubTab, setActiveSubTab] = useState<
    "videos" | "liked" | "saved"
  >("videos");

  const userProfile = {
    name: "Lê Minh Tân",
    username: "@le_minh_tan",
    avatar: "	https://avatars.githubusercontent.com/u/140865049?v=4",
    bio: "Lập trình viên Front-end đam mê xây dựng sản phẩm tối ưu & giao diện tuyệt đẹp 💻✨",
    followingCount: 86,
    followersCount: "1.2K",
    likesTotal: "45.2K",
  };

  return (
    <div className="w-full h-full bg-bg-dark text-white p-4 pb-24 overflow-y-auto scrollbar-none flex flex-col items-center">
      <div className="w-full max-w-[800px] flex flex-col gap-6">
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left border-b border-border-dark pb-8">
          <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-border-dark shadow-2xl shrink-0">
            <img
              src={userProfile.avatar}
              alt={userProfile.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* User Detail */}
          <div className="flex flex-col gap-4 flex-1">
            <div className="flex md:justify-start items-center justify-center gap-5">
              <h1 className="text-2xl md:text-3xl font-bold">
                {userProfile.name}
              </h1>
              <span className="text-text-muted mt-0.5">|</span>
              <p className="text-sm text-text-muted mt-0.5">
                {userProfile.username}
              </p>
            </div>

            {/* Interaction Stats */}
            <div className="flex gap-6 justify-center md:justify-start text-sm">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-white text-base">
                  {userProfile.followingCount}
                </span>
                <span className="text-text-muted"> Đang follow</span>
              </div>

              <div className="flex items-center gap-1.5">
                <span className="font-bold text-white text-base">
                  {userProfile.followersCount}
                </span>
                <span className="text-text-muted"> Follow</span>
              </div>

              <div className="flex items-center gap-1.5">
                <span className="font-bold text-white text-base">
                  {userProfile.likesTotal}
                </span>
                <span className="text-text-muted"> Lượt thích</span>
              </div>
            </div>

            {/* Edit profile */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              <Button>Sửa hồ sơ</Button>
              <Button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </Button>

              <Button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="18" cy="5" r="3" />
                  <circle cx="6" cy="12" r="3" />
                  <circle cx="18" cy="19" r="3" />
                  <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
                  <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
                </svg>
              </Button>
            </div>

            {/* bio */}
            <p className="text-sm text-text-secondary max-w-[500px] leading-relaxed">
              {userProfile.bio}
            </p>
          </div>
        </div>

        {/* tab */}
        <div className="flex border-b border-border-dark/60 gap-3 justify-between sm:justify-around w-full">
          <button
            onClick={() => setActiveSubTab("videos")}
            className={`pb-4 px-2 flex items-center gap-2 font-bold text-sm border-b-2 transition-all ${
              activeSubTab === "videos"
                ? "border-primary text-white"
                : "border-transparent text-text-muted hover:text-white"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 5H3" />
              <path d="M10 12H3" />
              <path d="M10 19H3" />
              <path d="M15 12.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997a1 1 0 0 1-1.517-.86z" />
            </svg>
            Video
          </button>

          <button
            onClick={() => setActiveSubTab("liked")}
            className={`pb-4 px-2 flex items-center gap-2 font-bold text-sm border-b-2 transition-all ${
              activeSubTab === "liked"
                ? "border-primary text-white"
                : "border-transparent text-text-muted hover:text-white"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
            </svg>
            Đã thích
          </button>

          <button
            onClick={() => setActiveSubTab("saved")}
            className={`pb-4 px-2 flex items-center gap-2 font-bold text-sm border-b-2 transition-all ${
              activeSubTab === "saved"
                ? "border-primary text-white"
                : "border-transparent text-text-muted hover:text-white"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z" />
            </svg>
            Đã lưu
          </button>
        </div>

        {/* Tab Content */}
        <div className="w-full">
          {activeSubTab === "videos" && (
            <ProfileVideoList videos={mockVideos} />
          )}

          {activeSubTab === "liked" && (
            <div className="flex flex-col items-center justify-center py-20 text-center gap-3 w-full">
              <svg
                className="w-16 h-16 text-text-muted"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              <div>
                <h3 className="font-extrabold text-lg text-white">
                  Video đã thích của người dùng này được ẩn
                </h3>
                <p className="text-sm text-text-muted mt-1 max-w-[300px] mx-auto">
                  Cài đặt quyền riêng tư hiện tại ngăn chặn việc hiển thị danh
                  sách video đã thích.
                </p>
              </div>
            </div>
          )}

          {activeSubTab === "saved" && (
            <div className="flex flex-col items-center justify-center py-20 text-center gap-3 w-full">
              <svg
                className="w-16 h-16 text-text-muted"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              <div>
                <h3 className="font-extrabold text-lg text-white">
                  Danh sách đã lưu được bảo mật
                </h3>
                <p className="text-sm text-text-muted mt-1 max-w-[300px] mx-auto">
                  Chỉ bạn mới có quyền xem các nội dung video và âm thanh đã
                  được lưu trữ trong mục này.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
