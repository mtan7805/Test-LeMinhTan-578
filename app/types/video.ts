import { VideoStats } from "./videoStats";

export interface Video extends VideoStats {
  id: string;
  videoUrl: string;
  authorName: string;
  description: string;
  musicName?: string;
}

