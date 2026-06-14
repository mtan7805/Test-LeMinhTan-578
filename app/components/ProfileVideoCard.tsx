"use client";

import React from "react";
import { Video } from "../types/video";
import { HeartIcon } from "./Icons";

interface ProfileVideoCardProps {
  video: Video;
}

export const ProfileVideoCard: React.FC<ProfileVideoCardProps> = ({
  video,
}) => {
  return (
    <div className="relative aspect-9/16 bg-black rounded-2xl overflow-hidden group border-border-dark/30 cursor-pointer transition-all duration-300 ">
      <video
        src={video.videoUrl}
        muted
        playsInline
        loop
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />

      <div className="absolute inset-0 flex flex-col justify-end p-3 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 ">
        <p className="text-[10px] text-text-secondary leading-tight">
          {video.description}
        </p>
        <div className="flex items-center justify-between mt-1.5">
          <span className="text-[9px] text-text-muted">
            @{video.authorName}
          </span>
          <div className="flex items-center gap-1 text-[8px] text-primary font-bold">
            <HeartIcon size={8} active={true} />
            <span>{video.likesCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
