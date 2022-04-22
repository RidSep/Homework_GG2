import { useEffect } from "react";
import { useHistory } from "react-router";

// Authorization
import { authSpotify, getUserInfo } from "../../components/Auth/index";
import { getToken } from "../../components/functions";

// Components
import Login from "../../components/login";
import logo from "../../spotify.png";

// Redux
import { login, storeUserInfo } from "../../store/authSlice";
import { useTypedDispatch } from "../../components/hooks/ReduxHooks";


const LoginPage = () => {
	const dispatch = useTypedDispatch();
	const history = useHistory();

	useEffect(() => {
		if (window.location.hash) {
			const token = getToken() as string;
			dispatch(login(token));
			getUserInfo(token).then((data) => dispatch(storeUserInfo(data)));
			history.push("/create-playlist");
		}
	}, [dispatch, history]);
	return <Login onClick={authSpotify} logo={logo} />;
};

export default LoginPage;