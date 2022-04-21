import { convertDuration } from "./functions";
import Card from "./UI/Card";
import "./music-card.css";
import { Track } from "../components/spotify";

type MusicCardProps = {
	track: Track;
	isSelected: boolean;
	onSelectTrack: any;
};

const MusicCard =({ track, isSelected, onSelectTrack }: MusicCardProps) => {
	return (
		<Card className='track-card'>
			<div className='img'>
				<img src={track.album.images[0].url} alt='Album' />
			</div>
			<div className='track-informations'>
				<div className='song-infos'>
					<div className='song-title'>
						<p>{track.name}</p>
					</div>
					<div className='artist'>
						<p>{track.artists.map((artist) => artist.name).join(", ")}</p>
					</div>
				</div>
				<div className='album-info'>
					<div className='album-title'>
						<p>{track.album.name}</p>
					</div>
				</div>
				<div className='track-duration'>
					<div className='duration'>
						<p>{convertDuration(track.duration_ms)}</p>
					</div>
				</div>
				<div className='option'>
					<div className='select-song'>
						<button
							className={isSelected ? " btn-deselect" : ""}
							onClick={() => onSelectTrack(track)}>
							{!isSelected ? "Select" : "Deselect"}
						</button>
					</div>
				</div>
			</div>
		</Card>
	);
};

export default MusicCard;