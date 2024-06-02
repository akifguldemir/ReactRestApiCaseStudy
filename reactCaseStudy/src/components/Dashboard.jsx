import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
        await axios.get('http://localhost:8080/api/posts', {
          // headers: {
          //   Authorization: `Bearer ${localStorage.getItem('token')}`,
          // },
        }).then(function (response) {
          console.log(response);
        setPosts(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    
    };

    fetchPosts();
  }, []);

  const handleDelete = async (postId) => {
      await axios.delete(`http://localhost:8080/api/posts/${postId}`, {
        // headers: {
        //   Authorization: `Bearer ${localStorage.getItem('token')}`,
        // },
      }).then(function (response) {
        setPosts(posts.filter((post) => post.id !== postId));
        toast.success(response.data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const confirmDelete = (postId) => {
    const confirmed = window.confirm('Silmek istiyor musunuz?');
    if (confirmed) {
      handleDelete(postId);
    }
  };

  return (
    <div className="container">
      <h2>Posts</h2>
      <table className="table table-bordered">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Username</th>
          <th scope="col">Title</th>
          <th scope="col">Body</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post) => (
          <tr key={post.id}>
            <td>{post.id}</td>
            <td>{post.username}</td>
            <td>{post.title}</td>
            <td>{post.body}</td>
            <td>
              <button type="button" className="btn btn-danger" onClick={() => confirmDelete(post.id)}>Sil</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
};

export default Dashboard;
