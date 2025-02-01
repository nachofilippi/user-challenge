import { Post } from '../../../models/post.model';
import { Address, Company, User } from '../../../models/user.model';
import { Table, TableTypes } from './table.model';

export function formatUserTable(users: User[]): Table {
  return {
    headers: Object.keys(users[0]),
    body: users.map((user: { address: Address; company: Company }) => {
      const { address, company, ...rest } = user;
      const userFormatted = [
        ...Object.values(rest),
        `${address.street}, ${address.suite}, ${address.city}`,
        company.name,
      ];

      return userFormatted;
    }),
    type: TableTypes.users,
  };
}

export function formatPostTable(posts: Post[]): Table {
  return {
    headers: Object.keys(posts[0]),
    body: posts.map((post) => Object.values(post)),
    type: TableTypes.posts,
  };
}
