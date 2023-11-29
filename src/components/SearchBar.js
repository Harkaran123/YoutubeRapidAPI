import React from 'react';
import { Paper, IconButton} from '@mui/material';
import { Search } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const SearchBar = () => {

  const navigate = useNavigate();
  const [searchterm, setSearchterm] = useState("");

  const handlesubmit = (e) => {
      e.preventDefault();
   

    if (searchterm){
      navigate(`/search/${searchterm}`)
      setSearchterm("");
    }
  }

  return (
    <div>
      <form className='px-1 bg-white rounded-[50px]' onSubmit={handlesubmit} >
        <input onChange={(e) =>  setSearchterm(e.target.value)} value={searchterm} placeholder='Search for...' className='search-bar'/>
        <IconButton sx={{color:"red", p:"10px"}} onClick={handlesubmit}>
            <Search></Search>
        </IconButton>
        
    </form>

</div>
  )
}

export default SearchBar
