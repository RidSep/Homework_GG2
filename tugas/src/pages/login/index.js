// Authorization
import { authSpotify } from "../../components/API/api";

// Components
import Login from "../../components/login";
import logo from "../../spotify.png";

const LoginPage = () => {
	return <Login onClick={authSpotify} logo={logo} />;
};

export default LoginPage;