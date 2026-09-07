export interface Friend {
  name: string;
  online: boolean;
  watching: string | null;
  status: string;
}

export interface Activity {
  id: number;
  user: string;
  action: string;
  movie: string;
  target?: string;
  time: string;
  rating?: number;
  review?: string;
  description?: string;
  likes?: number;
  comments?: number;
  replyable?: boolean;
  image: string;
}