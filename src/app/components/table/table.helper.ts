import { Post } from '../../../models/post.model';
import { User } from '../../../models/user.model';
import { Table, TableBody, TableTypes } from './table.model';

export function formatUsersTable(users: User[]): Table {
  const usersBody: TableBody[] = [];

  return {
    headers: Object.keys(users[0]),
    body: users
      .map((user: User) => {
        const { address, company } = user;
        const userFormatted: TableBody[] = Object.entries(user).map(
          ([key, value]) => ({
            value:
              key === 'address'
                ? `${address.street}, ${address.suite}, ${address.city}`
                : key === 'company'
                ? company.name
                : String(value),
            type: key as keyof typeof TableTypes,
          })
        );

        usersBody.push(...userFormatted);
        return [userFormatted];
      })
      .flat(),
    type: TableTypes.users,
  };
}

export function formatPostTable(posts: Post[]): Table {
  return {
    headers: Object.keys(posts[0]),
    body: posts.map((post) => {
      const entries = Object.entries(post);
      const idEntry = entries.find(([key]) => key === 'id');
      const otherEntries = entries.filter(([key]) => key !== 'id');
      if (idEntry) {
        otherEntries.unshift(idEntry);
      }
      return otherEntries.map(([key, value]) => ({
        value: String(value),
        type: key as keyof typeof TableTypes,
      }));
    }),
    type: TableTypes.posts,
  };
}
