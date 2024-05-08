import React from "react";
import { useState, useEffect} from "react";

export default function AllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const response = await fetch("http://localhost:8080/posts");
    const data = await response.json();
    setPosts(data);
  };

  return (
    <div className="table-container">
      <h2>All Posts</h2>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Location</th>
            <th>Actor</th>
            <th>Show</th>
            <th>Post</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.username}</td>
              <td>{post.location}</td>
              <td>{post.actor}</td>
              <td>{post.show}</td>
              <td>{post.post}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
