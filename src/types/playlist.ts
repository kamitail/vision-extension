import { Song } from './song';
import { User } from './user';

export type Playlist = {
  id: string;
  users?: User[];
  songs?: Song[];
  img?: string;
};
