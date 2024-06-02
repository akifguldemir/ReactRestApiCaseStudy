import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/posts', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setPosts(response.data);
      } catch (error) {
        console.error('Fetch posts error:', error);
      }
    };

    fetchPosts();
  }, []);



  return (
    <div className="centered-content">
      <div className="container">
      <h1 className="mt-5 mb-4">Posts</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Username</th>
            <th>Title</th>
            <th>Body</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.username}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
              <td>
                <button type="button" className="btn btn-danger" >Sil</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default Dashboard;
