  import React, { useState } from 'react';
  import axios from 'axios';
  import "./Form.css";

  const Form = () => {
    const [data, setData] = useState({
      name: "",
      title: "",
      video: null
    });

    const handleData = (event) => {
      const { name, value, files } = event.target;

      if (name === "video" && files) {
        setData((prev) => ({
          ...prev,
          [name]: files[0]
        }));
      } else {
        setData((prev) => ({
          ...prev,
          [name]: value
        }));
      }
    };

    const postData = async () => {
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('title', data.title);
      formData.append('video', data.video);

      try {
        const response = await axios.post('https://lingesh-server-2-production.up.railway.app/api', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        console.log(response.data);
      } catch (error) {
        console.error("Error posting data", error);
      }
    };

    return (
      <div className="form-container">
        <h2 className="form-title">Submit Your Project</h2>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input 
            type="text" 
            name="name" 
            value={data.name} 
            onChange={handleData} 
            className="form-input"
            placeholder="Enter your name"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <select 
            name="title" 
            value={data.title} 
            onChange={handleData} 
            className="form-select"
          >
            <option value="">Select a title</option>
            <option value="commercial">Commercial</option>
            <option value="shortfilmprompt edit">Short Film Prompt Edit</option>
            <option value="shortfilmtraileredit">Short Film Trailer Edit</option>
            <option value="logo">Logo</option>
            <option value="poster">Poster</option>
            <option value="motiongraphics">Motion Graphics</option>
            <option value="greetings">Greetings</option>
            <option value="reels edit">Reels Edit</option>
            <option value="trending transformation">Trending Transformation</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="video">Upload Video:</label>
          <input 
            type="file" 
            name="video" 
            accept="video/*" 
            onChange={handleData} 
            className="form-input"
          />
        </div>

        <button onClick={postData} className="form-button">
          Submit
        </button>
      </div>
    );
  };

  export default Form;
