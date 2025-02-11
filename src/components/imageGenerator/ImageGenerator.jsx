import React, { useRef, useState } from 'react'
import defaultImage from '../assests/default_image.svg';
import './ImageGenerator.css';
import axios from 'axios';

const ImageGenerator = () => {
    const [imageUrl, setImageUrl] = useState('/');
    const [loading, setLoading] = useState(false); 
    const inputRef = useRef(null);

    const imageGenerator = async () => {
        const prompt = inputRef.current.value;

        if(!prompt){
            alert('Please enter a prompt!');
            return;
        }

        setLoading(true);

        try{
            const response = await axios.post(
                `${process.env.REACT_APP_HUGGING_FACE_URl}`,
                { inputs: prompt },
                {
                    headers: {
                        Authorization: `Bearer ${process.env.REACT_APP_HUGGING_FACE_API_KEY}`, 
                    },
                    responseType: 'blob',
                }
            );
            const imageBlob = new Blob([response.data], { type: 'image/png' });
            const imageObjectURL = URL.createObjectURL(imageBlob);
            setImageUrl(imageObjectURL);

        } catch(error){

            console.error('Error generating image:', error);
            alert('Failed to generate image. Try again!');

        } finally {

            setLoading(false); 

        }
    
    }

  return (
    <div className='ai-image-generator'>
      <div className="header">AI Image <span>Generator</span></div>
      <div className="img-loading">
        <div className="image"><img src={imageUrl==='/'?defaultImage:imageUrl} alt="image" /></div>
        {loading && <div className="loading">Generating Image...</div>} 
      </div>
      <div className="search-box">
        <input type="text" ref={inputRef} className='searchInput' placeholder='Describe what you want to see' />
        <div className="generate-btn" onClick={imageGenerator}>
            {loading ? 'Loading...' : 'Generate'}
        </div>
      </div>
    </div>
  )
}

export default ImageGenerator;
