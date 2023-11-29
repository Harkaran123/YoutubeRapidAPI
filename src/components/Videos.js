import React from 'react';
import { VideoCard, ChannelCard } from './';

const Videos = ({videos}) => {
  
  
  return (
    <div className='flex flex-column md:flex-row flex-wrap gap-2 justify-between items-center p-4'>
      
      { videos.map((item) => {
        return (
          <div key={item.id.videoId}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard video={item} />}
          </div>
        )
      })}
    </div>
  )
}

export default Videos
