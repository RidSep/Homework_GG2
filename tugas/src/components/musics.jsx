import React from "react";
import MusicCard from "./music-card";
import "./musics.css";

const Musics = ({ tracks, onSelectTrack, selectedTracks }) => {
	function renderTrackCards() {
		return tracks.map((track) => {
			return (
				<MusicCard
					key={track.id}
					track={track}
					onSelectTrack={onSelectTrack}
					isSelected={selectedTracks.find(
						(selectedTrack) => selectedTrack.id === track.id
					)}
				/>
			);
		});
	}

	return <div className='result'>{renderTrackCards()}</div>;
};

export default Musics;