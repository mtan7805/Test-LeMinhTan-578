export interface Video {
  id: string;
  videoURL: string;
  authorName: string;
  description: string;
  likesCount: number;
  commentsCount: number;
  sharesCount: number;
  musicName?: string;
}
