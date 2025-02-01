export interface Table {
  headers: string[];
  body: any[];
  type: TableTypes;
}

export enum TableTypes {
  users = 'users',
  posts = 'posts',
  comments = 'comments',
  albums = 'albums',
  photos = 'photos',
  todos = 'todos',
}
