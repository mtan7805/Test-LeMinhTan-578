export interface VideoActions {
  likesCount: number;
  commentsCount: number;
  sharesCount: number;
  isLiked: boolean;
  onLike: () => void;
}
