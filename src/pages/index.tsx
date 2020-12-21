import { GetStaticProps, NextPage } from "next";
import React from "react";
import { PostItem } from "../components/PostItem";
import { Page } from "../layouts/Page";
import { postIsPublished } from "../lib/blog-helpers";
import getBlogIndex from "../lib/notion/getBlogIndex";
import getNotionUsers from "../lib/notion/getNotionUsers";
import { Post } from "../types";

export interface Props {
  posts: Post[];
}

const Home: NextPage<Props> = ({ posts }) => {
  return (
    <Page>
      <div className="max-w-4xl px-4 mx-auto">
        <header className="py-20">
          <h1 className="text-6xl font-bold text-center">Railway Blog</h1>
        </header>

        {posts.length === 0 ? (
          <div className="text-center text-gray-500">Pretty empty here</div>
        ) : (
          <div className="posts max-w-4xl">
            {posts.map(p => (
              <PostItem key={p.id} post={p} />
            ))}
          </div>
        )}
      </div>
    </Page>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async ({ preview }) => {
  const postsTable = await getBlogIndex();

  const authorsToGet: Set<string> = new Set();
  const notionPosts = Object.keys(postsTable)
    .map(slug => {
      const post = postsTable[slug];

      // remove draft posts in production
      if (!preview && !postIsPublished(post)) {
        return null;
      }
      post.Authors = post.Authors || [];
      for (const author of post.Authors) {
        authorsToGet.add(author);
      }
      return post;
    })
    .filter(Boolean);

  const { users } = await getNotionUsers([...authorsToGet]);

  notionPosts.map(post => {
    post.Authors = post.Authors.map(id => users[id].full_name);
  });

  const posts = notionPosts as Post[];

  return {
    props: { posts },
    revalidate: 10,
  };
};
