"use client";

import { useEffect, useRef, useState } from "react";
import { Video } from "../types/video";
import {
  CommentIcon,
  HeartIcon,
  MusicIcon,
  ShareIcon,
  VolumeMuteIcon,
  VolumeUpIcon,
} from "./Icons";

const formatNumber = (num: number) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

export const VideoCard: React.FC<{ video: Video; isActive: boolean }> = ({
  video,
  isActive,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(video.likesCount);

  useEffect(() => {
    const videoEl = videoRef.current;
    if (videoEl) {
      videoEl.muted = isMuted;
    }
  }, [isMuted]);

  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    if (isActive) {
      videoEl.muted = isMuted;
      videoEl
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.log(
            "Autoplay bị chặn do có tiếng. Chờ click từ người dùng...",
            err,
          );
          setIsPlaying(false);
        });
    } else {
      videoEl.pause();
      videoEl.currentTime = 0;
      setIsPlaying(false);
    }
  }, [isActive]);

  //  Xử lý click Play/Pause
  const handlePlayPause = () => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    if (isPlaying) {
      videoEl.pause();
      setIsPlaying(false);
    } else {
      videoEl.muted = isMuted;
      videoEl
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log(err));
    }
  };

  const handleLike = () => {
    if (isLiked) {
      setIsLiked(false);
      setLikes((prev) => prev - 1);
    } else {
      setIsLiked(true);
      setLikes((prev) => prev + 1);
    }
  };

  return (
    <div className="relative w-full h-full max-w-[450px] bg-black rounded-2xl overflow-hidden shadow-2xl flex flex-center justify-center">
      <video
        ref={videoRef}
        src={video.videoUrl}
        className="w-full h-full object-cover cursor-pointer"
        loop
        playsInline
        muted={isMuted}
        onClick={handlePlayPause}
      />

      {/* Loa */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsMuted(!isMuted);
        }}
        className="absolute top-4 right-4 z-30 p-5 rounded-full text-white"
      >
        {isMuted ? <VolumeMuteIcon /> : <VolumeUpIcon />}
      </button>

      <div className="absolute bottom-0 left-0 right-0 p-5 pb-24 md:pb-5 text-white bg-gradient-to-t from-black/80 via-black/40 to-transparent">
        <h3 className="font-bold mb-1">@{video.authorName}</h3>
        <p className="text-sm text-zinc-200 mb-2">{video.description}</p>
        {video.musicName && (
          <div className="flex items-center gap-2 text-xs text-zinc-400">
            <MusicIcon size={14} />
            <span>{video.musicName}</span>
          </div>
        )}
      </div>

      <div className="absolute right-4 bottom-20 flex flex-col gap-4 items-center">
        <button
          onClick={handleLike}
          className="w-12 h-12 rounded-full flex items-center bg-black/40 justify-center text-white"
        >
          <HeartIcon active={isLiked} />
        </button>
        <span className="text-xs text-white">{formatNumber(likes)}</span>

        <button className="w-12 h-12 rounded-full flex items-center bg-black/40 justify-center text-white">
          <CommentIcon />
        </button>
        <span className="text-xs text-white">{video.commentsCount}</span>

        <button className="w-12 h-12 rounded-full flex items-center bg-black/40 justify-center text-white">
          <ShareIcon />
        </button>
        <span className="text-xs text-white">{video.sharesCount}</span>
      </div>
    </div>
  );
};
