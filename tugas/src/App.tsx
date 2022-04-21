import React, { useEffect } from "react";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from "react-router-dom";
import { getUserInfo } from "./components/Auth/index";
import { getToken } from "./components/functions";

// Redux
import { useTypedDispatch, useTypedSelector } from "./components/hooks/ReduxHooks";
import { login, storeUserInfo } from "./store/authSlice";

// Pages
import Home from "./pages/home/index";
import LoginPage from "./pages/login/index";

const App = () => {
	const dispatch = useTypedDispatch();
	const isLogin = useTypedSelector((state) => state.auth.isAuthenticated);

	// Check if the token is available
	useEffect(() => {
		if (localStorage.getItem("token")) {
			const accessToken: string = getToken() as string;
			dispatch(login(accessToken));
			getUserInfo(accessToken).then((data) => dispatch(storeUserInfo(data)));
		}
	}, [dispatch, isLogin]);

	return (
		<Router>
			<Switch>
				<Route path='/create-playlist'>
					{!isLogin ? (
						<Redirect exact from='/create-playlist' to='/' />
					) : (
						<Home />
					)}
				</Route>
				<Route path='/'>
					{isLogin ? (
						<Redirect exact from='/' to='/create-playlist' />
					) : (
						<LoginPage />
					)}
				</Route>
			</Switch>
		</Router>
	);
};

export default App;