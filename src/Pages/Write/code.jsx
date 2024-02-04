import React, { useState } from 'react';
import { RiEdit2Line } from 'react-icons/ri';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function code() {
  const [value, setValue] = useState('');
  const [title, setTitle] = useState('');


  
  return (
    <div className='add px-5 mx-auto'>
      <div className="content">
        <input type="text" placeholder='title' />
        <div className="editorContainer">
          <ReactQuill className='editor' theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <div className='text-2xl font-bold'>Publish</div>
          <span>
            <b>Status:</b>Draft
          </span>
          <span>
            <b>Visibility:</b>Public
          </span>
          <input style={{ display: "none" }} type="file" id='file' />
          <label className='file flex items-center' htmlFor="file"> <RiEdit2Line className='text-2xl'/> Update Image</label>
          <div className="button">
            <button>Save as a draft</button>
            <button>Update</button>
          </div>
        </div>
        <div className="item">
          <div className="category text-xl"> Category</div>
          <div className="cat">
            <input type="radio" name='cat' value="art" id='art' />
            <label htmlFor="art">Art</label>
          </div>
          <div className="cat">
            <input type="radio" name='cat' value="science" id='science' />
            <label htmlFor="science">Science</label>
          </div>
          <div className="cat">
            <input type="radio" name='cat' value="cinema" id='cinema' />
            <label htmlFor="cinema">Cinema</label>
          </div>
          <div className="cat">
            <input type="radio" name='cat' value="technology" id='technology' />
            <label htmlFor="technology">Technology</label>
          </div>
          <div className='cat'>
            <input type="radio" name='cat' value="design" id='design' />
            <label htmlFor="design">Design</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default code;