import React, { useEffect, useState } from 'react';
import { TbPhotoEdit } from 'react-icons/tb';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { Link, useParams } from 'react-router-dom';
import Menu from '../Menu/Menu';
import axios from 'axios';

function Single() {
  const [post, setPost] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://blog-backend-two.vercel.app/posts/${id}`);
        setPost(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  const handleDelete=()=>{
    fetch(`https://blog-backend-two.vercel.app/posts/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        alert('Post deltee succesfully') // Message from the server
        // Additional client-side logic as needed
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle error scenarios
      });

  }

  return (
    <div className="single container">
      <div key={post._id} className="content mt-16">
        <img src={post.img} alt="" />
        <div className="user mt-2">
          <img src={post.img} alt="" />
          <div className="info">
            <div className="font-bold">John</div>
            <div>Post 2 days ago</div>
          </div>
          <div className="edit">
            <Link to={`/write?edit=${post._id}`}>
              <TbPhotoEdit className="h-8 w-8 text-green-500" />
            </Link>
          </div>
          <div onClick={handleDelete} className="delete">
            <RiDeleteBin6Line className="h-8 w-8 text-red-700" />
          </div>
        </div>
        <div className="text-2xl mt-10 font-bold">{post.title}</div>
        <div className="text-justify mt-3">{post.desc}</div>
      </div>
      <Menu />
    </div>
  );
}

export default Single;
