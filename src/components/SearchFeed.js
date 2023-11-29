import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { Videos } from './';

const SearchFeed = () => {

    const [videos, setVideos] = useState([]);

    const { searchTerm } = useParams();

    const fetchvideos = async () => {
        const data = await fetchFromAPI(`search?part=snippet&q=${searchTerm}`);
        setVideos(data.items);
    }

    useEffect(() => {
        fetchvideos();
    }, [searchTerm])

  return (
    <div className='bg-black px-2 py-2'>
        <Videos videos={videos}/>
    </div>
  )
}

export default SearchFeed
