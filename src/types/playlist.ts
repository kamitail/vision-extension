import { Song } from './song';
import { User } from './user';

export type Playlist = {
  users?: User[];
  songs?: Song[];
  img?: string;
};
