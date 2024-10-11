import React, { useState } from 'react';
import axios from 'axios';
import host from '../../store/host';

const UploadImage = (props) => {
  const [image, setImage] = useState(null);

  const imageChangeHandler = (e) => {
    setImage(e.target.files[0]);  
  };

  const uploadHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData(); 
    formData.append('file', image);

    try {
      const token = localStorage.getItem('token')
      const response = await axios.post(`${host}/user/api/data/photo`, formData, {
        headers: {'Authorization':token,
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data); 
      const url = response.data.imageUrl
      props.onUpload(url);
    } catch (error) {
      console.error('Error uploading image', error);
    }
  };

  return (
    <form onSubmit={uploadHandler}>
        <input type="file" accept="image/*" onChange={imageChangeHandler}/>
        <button type="submit">+</button>
    </form>
  );
};

export default UploadImage;