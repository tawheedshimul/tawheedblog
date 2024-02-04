import React, { useState } from 'react';
import { BsCheckCircleFill } from "react-icons/bs";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';

function Write() {
  const [value, setValue] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('art');
  const [message, setMessage] = useState({
    text: '',
    type: '', // 'success' or 'error'
  });

  const showMessage = (text, type) => {
    setMessage({ text, type });

    // Clear message after 5 seconds
    setTimeout(() => {
      setMessage({ text: '', type: '' });
    }, 5000);
  };

  const handlePost = async () => {
    // const sanitizedDesc = value.replace(/<\/?p>/g, '');
    try {
      const postData = {
        title: title,
        desc: value,
        category: category,
      };

      const response = await axios.post('https://blog-backend-two.vercel.app/posts', postData);

      console.log('Post created:', response.data);
      showMessage('Successfully posted!', 'success');

      // Clear input fields after successful post
      setTitle('');
      setValue('');
      setCategory('art');
    } catch (error) {
      console.error('Error creating post:', error);
      showMessage('Failed to post. Please try again.', 'error');
    }
  };

  return (
    <form>
      <div className='fixed left-1/2 '>
        {message.text && (
          <div className={`flex items-center space-x-2 ${message.type === 'success' ? 'text-green-700' : 'text-red-600'}`}>
            <span className="text-3x">{message.type === 'success' ? <BsCheckCircleFill /> : <i className="bx bx-error"></i>}</span>
            <p>{message.text}</p>
          </div>
        )}
      </div>
      <div className='add px-5 mx-auto'>
        <div className="content">
          <input
            type="text"
            placeholder='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="editorContainer">
            <ReactQuill
              className='editor'
              theme="snow"
              value={value}
              onChange={setValue}
            />
          </div>
        </div>
        <div className="menu">
          <div className="item">
            <div className="category text-xl"> Category</div>
            <div className="cat">
              <input
                type="radio"
                name='cat'
                value="art"
                id='art'
                checked={category === 'art'}
                onChange={() => setCategory('art')}
              />
              <label htmlFor="art">Art</label>
            </div>

            <div className="cat">
              <input
                type="radio"
                name='cat'
                value="science"
                id='science'
                checked={category === 'science'}
                onChange={() => setCategory('science')}
              />
              <label htmlFor="science">Science</label>
            </div>

            <div className="cat">
              <input
                type="radio"
                name='cat'
                value="cinema"
                id='cinema'
                checked={category === 'cinema'}
                onChange={() => setCategory('cinema')}
              />
              <label htmlFor="cinema">Cinema</label>
            </div>
          </div>
        </div>
      </div>
      <div
        className='text-center text-2xl text-white cursor-pointer bg-red-600 p-2 container mx-auto mt-10'
        onClick={handlePost}
      >
        Post
      </div>
    </form>
  );
}

export default Write;
