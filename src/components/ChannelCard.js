import React from 'react';
import { Link } from 'react-router-dom';

const ChannelCard = ({video}) => {

  return (

        <div className='w-[60%] md:w-[150px] h-[200px] text-center'>
            <Link to={`/channel/${video?.id?.channelId}`}>
                <img className='rounded-[50%]' src={video.snippet?.thumbnails?.medium.url} alt="" />
                <Link to={`/channel/${video?.id?.channelId}`}>
                 <h1 className='text-white'>JavaScript Mastery</h1>
                 <h3 className='text-white'>subscribers-{video?.statistics?.subscriberCount}</h3>
                </Link>
            </Link>
        </div>
    
  )
}

export default ChannelCard
