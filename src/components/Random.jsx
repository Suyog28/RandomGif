// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
import Spinner from "./Spinner"
import useGif from '../hooks/useGif';

// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {
  // const [gif, setGif] = useState("");
  // const [loading, setLoading] = useState("false");
  const { gif, loading, fetchData } = useGif();

  // async function fetchData() {
  //   setLoading(true);
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  //   const { data } = await axios.get(url);
  //   const imageSource = data.data.images.downsized_medium.url;
  //   setGif(imageSource);
  //   setLoading(false);
  // }
  // useEffect(() => {
  //   fetchData();
  // }, [])


  return (
    <div className=' flex flex-col  items-center w-[780px] mt-[40px] bg-green-400 text-center rounded-[16px] border border-black'>
      <h1 className='text-3xl underline pt-4 mb-[20px]'> A RANDOM GIF</h1>
      {loading ? (<Spinner />) : (<img src={gif} width="450" alt="gif" />)}

      <button className='w-10/12 bg-white rounded-md text-lg py-2 mb-[20px] mt-[20px]'
        onClick={() => fetchData()}
      >Generate</button>
    </div>
  )
}

export default Random