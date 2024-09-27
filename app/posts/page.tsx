import React from 'react';
import CardList from '../components/Posts/CardList';
import ViewUserButton from '../components/Posts/ViewUserButton';

const base_url = 'https://jsonplaceholder.typicode.com/posts';

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Posts = async () => {
  const response = await fetch(base_url, { cache: 'no-store' });
  const posts: IPost[] = await response.json();

  return (
    <>
      <div className="bg-fuchsia-400">POSTS PAGE</div>
      {posts.map((post) => {
        return (
          <CardList key={post.id}>
            <h3 className="text-2xl">{post.title}</h3>
            <i>{post.body}</i>
            <ViewUserButton userId={post.userId} />
          </CardList>
        );
      })}
    </>
  );
};

export default Posts;
