export interface Table {
  headers: string[];
  body: TableBody[][];
  type: TableTypes;
}

export interface TableBody {
  value: string;
  type: keyof typeof TableTypes;
}

export enum TableTypes {
  users = 'users',
  posts = 'posts',
  comments = 'comments',
  albums = 'albums',
  photos = 'photos',
  todos = 'todos',
}
