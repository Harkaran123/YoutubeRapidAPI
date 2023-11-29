import React from 'react';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { ChannelCard, Videos } from './';

const ChannelDetail = () => {

  const { id } = useParams();
  const [details, setDetails] = useState([]);
  const [video, setVideo] = useState([]);

  const fetchresults = async () => {

    const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);
    setDetails(data.items[0]);

    const videodata = await fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`);
    console.log(videodata.items)
    setVideo(videodata.items);

  }

  useEffect(() => {
    fetchresults();
  }, [id])


  return (
    <div className='w-full min-h-[100vh] bg-black'>

      <div className='flex flex-col justify-center items-center'>
        <div className='w-[100%] h-[200px] bg-[#00A3FF]'>
        </div>
        <div className='mt-[-18%] md:mt-[-5%] flex items-center justify-center'>
            <ChannelCard video={details}/>
        </div>
          
      </div>

      <div className='md:px-10 md:py-10'>
          <Videos videos={video} />
      </div>




    </div>
  )
}

export default ChannelDetail
