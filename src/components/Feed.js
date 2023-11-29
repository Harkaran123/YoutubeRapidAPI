import React from 'react'
import { Box, Stack, Typography } from "@mui/material";
import { Sidebar, Videos } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { useState } from 'react';
import { useEffect } from 'react';

const Feed = () => {

  const [selectedCat, SetSelectedCat] = useState('New');
  const [videos, SetVideos] = useState([])

  useEffect(() => {

    fetchFromAPI(`search?part=snippet&q=${selectedCat}`)
      .then((data) => SetVideos(data.items))
  }, [selectedCat]);

  

  return (
    

    <Stack sx={{ flexDirection: {sx: "column", md: "row"}, background:"#000"}}>
      <Box sx={{height: {sx: 'auto', md: '92vh'}, borderRight: "1px solid #3d3d3d", px:{ sx: 0, md: 2}}}>
          <Sidebar selectedCat={selectedCat} SetSelectedCat={SetSelectedCat}/>

        <Typography sx={{color: "#fff"}}>Copyright Harkaran</Typography>
      </Box>
      
      <Box sx={{height: "90vh", overflowY: "auto"}}>
        <Typography sx={{color: '#fff', pl: 2, fontSize: "20px"}}>
          {selectedCat} <span className='text-[red]'>Videos</span>
        </Typography>

        <Videos videos={videos} />
        
      </Box>
    </Stack>
  )
}

export default Feed
