import "./login.css";
import Button from '@mui/material/Button';

const Login = ({ onClick, logo }) => {
	return (
		<div className='container-welcome'>
			<div className='welcome'>
				<img src={logo} alt='Spotify Logo' />
				<h1>&#x1F44B; Hy welcome to Spotify</h1>
				<Button variant="contained" onClick={onClick}>
					Login
				</Button>
			</div>
		</div>
	);
};

export default Login;