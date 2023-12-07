export interface Video {
  id: string;
  url: string;
  volume: number;
  seekto?: number;
  name?: string;
  playing?: boolean;
}

export interface VideoContextState {
  videos: Video[];
  setVideos: React.Dispatch<React.SetStateAction<Video[]>>;
  updateVideo: (key: keyof Video, value: any, idx: number) => void;
  changeVolume: (num: number, idx: number) => void;
  removeVideo: (index: number) => void;
  addVideo: (video: Video) => void;
  getVideoInfo: (videoUrl: string) => Promise<VideoInfo>;
  isFullScreen: boolean;
  toggleFullScreen: () => void;
  volumes: number[];
}

export interface VideoInfo {
  kind: string;
  etag: string;
  id: string;
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: {
        url: string;
        width: number;
        height: number;
      };
      medium: {
        url: string;
        width: number;
        height: number;
      };
      high: {
        url: string;
        width: number;
        height: number;
      };
    };
    channelTitle: string;
    tags: string[];
    categoryId: string;
    liveBroadcastContent: string;
    localized: {
      title: string;
      description: string;
    };
  };
  contentDetails: {
    duration: string;
    dimension: string;
    definition: string;
    caption: string;
    licensedContent: boolean;
    contentRating: {
      mpaaRating: string;
      tvpgRating: string;
    };
    projection: string;
  };
  statistics: {
    viewCount: string;
    likeCount: string;
    dislikeCount: string;
    favoriteCount: string;
    commentCount: string;
  };
}
