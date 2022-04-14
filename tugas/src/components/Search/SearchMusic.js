import React from "react";
import "./SearchMusic.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const SearchMusic = ({ onSubmit, onChange }) => {
	return (
		<div className='search-container'>
			<form action='#' onSubmit={onSubmit}>
				
				<TextField id="outlined-basic" label="Search" size="small" variant="outlined" onChange={onChange}/>
				<Button variant="outlined" size="medium">Search</Button>
			</form>
		</div>
	);
};

export default SearchMusic;