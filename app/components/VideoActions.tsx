"use client";

import React from "react";
import { CommentIcon, HeartIcon, ShareIcon } from "./Icons";
import { VideoActions } from "../types/videoAction";

const formatNumber = (num: number) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

export const VideoActionsProps: React.FC<VideoActions> = ({
  likesCount,
  commentsCount,
  sharesCount,
  isLiked,
  onLike,
}) => {
  return (
    <div className="absolute right-4 bottom-20 flex flex-col gap-4 items-center z-30">
      {/* Nút Thả Tim */}
      <div className="flex flex-col items-center">
        <button
          onClick={onLike}
          className="w-12 h-12 rounded-full flex items-center bg-black/40 hover:bg-black/60 justify-center text-white transition-all hover:scale-105"
        >
          <HeartIcon active={isLiked} />
        </button>
        <span className="text-xs text-white mt-1 font-semibold">
          {formatNumber(likesCount)}
        </span>
      </div>

      {/* Nút Bình Luận */}
      <div className="flex flex-col items-center">
        <button className="w-12 h-12 rounded-full flex items-center bg-black/40 hover:bg-black/60 justify-center text-white transition-all hover:scale-105">
          <CommentIcon />
        </button>
        <span className="text-xs text-white mt-1 font-semibold">
          {formatNumber(commentsCount)}
        </span>
      </div>

      {/* Nút Chia Sẻ */}
      <div className="flex flex-col items-center">
        <button className="w-12 h-12 rounded-full flex items-center bg-black/40 hover:bg-black/60 justify-center text-white transition-all hover:scale-105">
          <ShareIcon />
        </button>
        <span className="text-xs text-white mt-1 font-semibold">
          {formatNumber(sharesCount)}
        </span>
      </div>
    </div>
  );
};
