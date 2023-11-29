import React from 'react';
import { Stack } from '@mui/material';
import { categories } from '../utils/constants';

const Sidebar = ({ selectedCat, SetSelectedCat }) => {


    return (

        <Stack direction="row" sx={{flexDirection: { sx: "row", md: "column" }, height: { md: '95%', sx: 'auto' }, overflowY: 'auto' }}>
            {categories.map(category => {
                return (<button onClick={() => SetSelectedCat(category.name)} key={category.name} className='category-btn' style={{
                    backgroundColor:
                        category.name === selectedCat && '#FC1503'
                }}>
                    <span className='pr-4' style={{
                        color:
                            category.name === selectedCat ? "White" : "#FC1503"
                    }}>
                        {category.icon}</span>
                    <span>{category.name}</span>
                </button>)
            })}
        </Stack>

    )
}

export default Sidebar
