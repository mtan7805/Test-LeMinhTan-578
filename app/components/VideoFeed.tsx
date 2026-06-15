"use client";

import { useEffect, useRef, useState } from "react";
import { mockVideos } from "../data/mockData";
import { VideoCard } from "./VideoCard";

export const VideoFeed: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeVideoId, setActiveVideoId] = useState<string | null>(
    mockVideos[0]?.id || null,
  );
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observerOptions = {
      root: container,
      threshold: 0.6,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("data-video-id");
          if (id) setActiveVideoId(id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );
    const cardElements = container.querySelectorAll("[data-video-id]");
    cardElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-screen overflow-y-scroll snap-y snap-mandatory scrollbar-none scroll-smooth bg-bg-dark"
    >
      {mockVideos.map((video) => (
        <section
          key={video.id}
          data-video-id={video.id}
          className="w-full h-screen snap-start flex justify-center items-center shrink-0"
        >
          <VideoCard
            video={video}
            isActive={video.id === activeVideoId}
            isMuted={isMuted}
            setIsMuted={setIsMuted}
          />
        </section>
      ))}
    </div>
  );
};
