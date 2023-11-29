import React from 'react'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import ReactPlayer from 'react-player';
import { useState } from 'react';
import { Videos } from './';


const VideoDetail = () => {

  const [video, setVideo] = useState({});
  const [sidevideos, setSidevideos] = useState([]);

  const { id } = useParams();

  const { snippet, statistics } = video;

  const fetchvideo = async () => {
    const data = await fetchFromAPI(`videos?part=snippets&&id=${id}`);
    setVideo(data.items[0]);

  }

  useEffect(() => {
    fetchvideo();

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
    .then(data => setSidevideos(data.items));

  }, [id])

  if (!snippet) {
    return "Loading"
  }
  

  return (
    <div className='w-full min-h-screen bg-black px-10 py-5 text-white flex flex-row justify-between gap-[155px]'>
      <div className='w-[65%] flex- flex-col justify-between items-center gap-4 '>
        <ReactPlayer controls={true} width="70%" height="90%" url={`https://www.youtube.com/watch?v=${id}`} />
        <h1>{snippet.title}</h1>

        <div className='flex flex-row w-[100%] justify-between items-center '>
          <h1>{snippet.channelTitle}</h1>
          <div className='flex flex-row gap-2'>
            <h2>{parseInt(statistics.viewCount).toLocaleString()} Views</h2>
            <h2>{parseInt(statistics.likeCount).toLocaleString()} Likes</h2>
          </div>
        </div>
      </div>

      
      <Videos videos={sidevideos}/>
  
    </div>
  )
}

export default VideoDetail
