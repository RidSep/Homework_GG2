import React from "react";
import MusicsCard from "./music-card";
import "./musics.css";

import data from "./all-sample";

const musics = data.map((track) => (
	<MusicsCard
		song={track.name}
		artist={track.artists[0].name}
		album={track.album.name}
		img={track.album.images[0].url}
		createdAt={track.album.release_date}
	/>
));

const Musics = () => {
	console.log(data);
	return (
		<div id='musics'>
			<div className='section-title'>
				<h2>Musics</h2>
			</div>
			<div id='cards'>{musics}</div>
		</div>
	);
};

export default Musics;