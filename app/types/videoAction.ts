import { VideoStats } from "./videoStats";

export interface VideoActionsProps extends VideoStats {
  isLiked: boolean;
  onLike: () => void;
}

