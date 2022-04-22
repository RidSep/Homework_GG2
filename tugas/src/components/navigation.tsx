import { useTypedSelector } from "./hooks/ReduxHooks";

import "./navigation.css";

type NavigationProps = {
	logo: string;
	modalShow: () => void;
	isDisplayed: boolean;
	logout: () => void;
};

const Navigation = ({
	logo,
	modalShow,
	logout,
	isDisplayed,
}: NavigationProps) => {
	// User Informations
	const userName = useTypedSelector(
		(state) => state.auth.userInfo?.display_name
	);

	return (
		<nav>
			<div className='nav-container'>
				<div className='nav-brand'>
					<img src={logo} alt='Spotify Logo' />
				</div>
				<div className='nav-list'>
					<div className='user-info'>
						<p>Hello, {userName}!</p>
					</div>
					<button
						className='btn-primary btn-create'
						style={isDisplayed ? { display: "block" } : { display: "none" }}
						onClick={modalShow}>
						Create Playlist
					</button>
					<button className='btn-primary btn-logout' onClick={logout}>
						Logout
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Navigation;