import "./login.css";

const Login = ({ onClick, logo }) => {
	return (
		<div className='container-welcome'>
			<div className='welcome'>
				<img src={logo} alt='Spotify Logo' />
				<h1>&#x1F44B; Hy welcome to Spotify</h1>
				<button onClick={onClick} className='btn-primary'>
					Login
				</button>
			</div>
		</div>
	);
};

export default Login;