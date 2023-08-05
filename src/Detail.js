import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams();
  const { posts } = useSelector((state) => state);
  const post = posts.find((p) => p.id.toString() === id);

  return (
    <div>
      <h1>Detail Page</h1>
      {post && (
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <p>User ID: {post.userId}</p>
        </div>
      )}
    </div>
  );
};

export default Detail;
