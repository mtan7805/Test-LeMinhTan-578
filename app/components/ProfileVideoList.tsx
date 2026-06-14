"use client";

import React from "react";
import { Video } from "../types/video";
import { ProfileVideoCard } from "./ProfileVideoCard";

interface ProfileVideoListProps {
  videos: Video[];
}

export const ProfileVideoList: React.FC<ProfileVideoListProps> = ({
  videos,
}) => {
  if (videos.length === 0) {
    return (
      <div className="text-center py-12 text-zinc-500 text-xs w-full">
        Không có video nào để hiển thị.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
      {videos.map((video) => (
        <ProfileVideoCard key={video.id} video={video} />
      ))}
    </div>
  );
};
export default ProfileVideoList;
