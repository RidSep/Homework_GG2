import React from "react";
import "./SearchMusic.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


type SearchTracksProps = {
	onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
const SearchMusic = ({ onSubmit, onChange }: SearchTracksProps) =>{
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