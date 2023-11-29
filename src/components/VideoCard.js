import React from 'react';
import { Link } from 'react-router-dom';

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
    
    console.log(snippet);
    return (
        <div>
            <div className='w-[100%] md:w-[300px] h-[270px] bg-[#2b2a2a]'>
                <Link to={`/video/${videoId}`}>
                    <img src={snippet?.thumbnails?.medium?.url} alt="" />
                </Link>
                <div className='text-white'>
                  <h3 className='text-sm'><Link style={{color: "#fff"}}  to={`/video/${videoId}`}>{snippet.title}</Link></h3>
                  <h2 className='text-xl'><Link style={{color: "#fff"}} to={`/channel/${snippet.channelId}`}>{snippet.channelTitle}</Link></h2>
                </div>

            </div>
        </div>
    )
}

export default VideoCard
