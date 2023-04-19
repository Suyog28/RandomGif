// import axios from 'axios';
import React, { useState } from 'react'
import Spinner from "./Spinner"
import useGif from '../hooks/useGif';

// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {
  // const [gif, setGif] = useState("");
  // const [loading, setLoading] = useState("false");
  const [tag, setTag] = useState('car');
  const { gif, loading, fetchData } = useGif(tag);

  // async function fetchData() {
  //   setLoading(true);
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
  //   const { data } = await axios.get(url);
  //   console.log(data)
  //   const imageSource = data.data.images.downsized_medium.url;
  //   setGif(imageSource);
  //   setLoading(false);
  // }
  // useEffect(() => {
  //   fetchData();
  // }, [])

  // function changeHandler() {
  //   fetchData();
  // }

  function changeTagHandler(event) {
    setTag(event.target.value);
  }

  return (
    <div className=' flex flex-col  mb-[40px] items-center w-[780px] mt-[40px] bg-blue-300 text-center rounded-[16px] border border-black'>
      <h1 className='text-3xl underline pt-4 mb-[20px] uppercase'> RANDOM {tag} GIF</h1>
      {loading ? (<Spinner />) : (<img src={gif} width="450" alt="gif" />)}
      <input
        type='text'
        placeholder='Gif Name'
        className='w-10/12 bg-white rounded-md text-lg py-2 mb-[20px] mt-[20px] text-center'
        onChange={changeTagHandler}
        value={tag}
      />
      <button className='w-10/12 bg-white rounded-md text-lg py-2 mb-[20px] mt-[20px] hover:bg-green-400'
        onClick={() => fetchData(tag)}
      >Generate</button>
    </div>
  )
}

export default Tag