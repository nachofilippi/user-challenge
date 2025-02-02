import { User } from './user.model';

export interface Post {
  id: string;
  title: string;
  body: string;
  userId: string;
  user?: User;
}
