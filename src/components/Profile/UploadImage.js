import React, { useState } from 'react';
import useApi from '../../service/api';

const UploadImage = (props) => {
  const api = useApi()
  const [image, setImage] = useState(null);

  const imageChangeHandler = (e) => {
    setImage(e.target.files[0]);  
  };

  const uploadHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData(); 
    formData.append('file', image);

    try {
      const response = await api.post('/api/user/data/photo', formData, {
        headers: {
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