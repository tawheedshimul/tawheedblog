import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import axios to use it

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://blog-backend-two.vercel.app/posts');
        setPosts(response.data); // Fix variable name
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='home container'>
      <div className="posts">
        {posts.map(post => (
          <div className='post' key={post._id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
              <Link to={`/post/${post._id}`}>
                <div className='text-2xl mb-3 '>
                  {post.title}
                </div>
                <div className='text-justify mb-3'>{post.desc}</div>
                <button className='text-justify pt-2 bg-red-600 items-center p-2 rounded hover:bg-black text-white duration-500'>Read More...</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
