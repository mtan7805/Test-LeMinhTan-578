"use client";

import { useEffect, useRef, useState } from "react";
import { Video } from "../types/video";
import {
  MusicIcon,
  VolumeMuteIcon,
  VolumeUpIcon,
  PlayIcon,
  PauseIcon,
} from "./Icons";
import { VideoActions } from "./VideoActions";
import TextExpander from "./TextExpander";
export const VideoCard: React.FC<{
  video: Video;
  isActive: boolean;
  isMuted: boolean;
  setIsMuted: (muted: boolean) => void;
}> = ({ video, isActive, isMuted, setIsMuted }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(video.likesCount);
  const [isLoading, setIsLoading] = useState(isActive);
  const [playFlashKey, setPlayFlashKey] = useState<number | null>(null);

  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    if (isActive) {
      setIsLoading(true);
      videoEl
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.log("Autoplay bị chặn do có tiếng", err);
          setIsPlaying(false);
          setIsLoading(false);
        });
    } else {
      videoEl.pause();
      videoEl.currentTime = 0;
      setIsPlaying(false);
      setIsLoading(false);
    }
  }, [isActive]);

  //  Xử lý click Play/Pause
  const handlePlayPause = () => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    if (isPlaying) {
      videoEl.pause();
      setIsPlaying(false);
      setPlayFlashKey(null);
    } else {
      videoEl
        .play()
        .then(() => {
          setIsPlaying(true);
          setPlayFlashKey(Date.now());
        })
        .catch((err) => {
          console.log(err);
        });
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
    <div className="relative w-full h-full max-w-[450px] bg-black rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center">
      <video
        ref={videoRef}
        src={video.videoUrl}
        className="w-full h-full object-cover cursor-pointer"
        loop
        playsInline
        muted={isMuted}
        onClick={handlePlayPause}
        preload={isActive ? "auto" : "metadata"}
        onWaiting={() => setIsLoading(true)}
        onPlaying={() => setIsLoading(false)}
      />

      {/* Loading Spinner */}
      {isLoading && (
        <div className="video-loading-overlay">
          <div className="video-spinner"></div>
        </div>
      )}

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

      <div className="absolute bottom-0 left-0 right-0 p-5 pb-24 sm:pb-5 text-white bg-gradient-to-t from-black/80 via-black/40 to-transparent">
        <h3 className="font-bold mb-1">@{video.authorName}</h3>
        <p className="text-sm text-text-secondary mb-2">
          <TextExpander>{video.description}</TextExpander>
        </p>
        {video.musicName && (
          <div className="flex items-center gap-2 text-xs text-text-muted">
            <MusicIcon size={14} />
            <span>{video.musicName}</span>
          </div>
        )}
      </div>

      {playFlashKey !== null && (
        <div
          key={playFlashKey}
          className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none"
          onAnimationEnd={() => setPlayFlashKey(null)}
        >
          <div className="w-16 h-16 rounded-full bg-black/50 flex items-center justify-center text-white backdrop-blur-sm animate-fade-out">
            <PlayIcon size={30} />
          </div>
        </div>
      )}

      {isActive && !isPlaying && !isLoading && playFlashKey === null && (
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <div className="w-16 h-16 rounded-full bg-black/50 flex items-center justify-center text-white backdrop-blur-sm shadow-xl">
            <PauseIcon size={30} className="translate-x-[2px]" />
          </div>
        </div>
      )}

      <VideoActions
        likesCount={likes}
        commentsCount={video.commentsCount}
        sharesCount={video.sharesCount}
        isLiked={isLiked}
        onLike={handleLike}
      />
    </div>
  );
};
