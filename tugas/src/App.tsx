import { Provider } from "react-redux";
import store from "./store";

import React, { useEffect, useMemo, useState } from "react";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from "react-router-dom";

// Auth
import { getToken } from "./components/Auth/index";

// Pages
import Home from "./pages/home/index";
import LoginPage from "./pages/login/index";

// Token Context
import TokenContext from "./context/TokenContext";


const App = () => {
	const [token, setToken] = useState("");
	const value = useMemo(() => ({ token, setToken }), [token]);

	// Check if the token is available
	useEffect(() => {
		if (!token) {
			setToken(getToken());
		}
	}, []);
	return (
		<Provider store={store}>
		  <TokenContext.Provider value={value}>
			<Router>
				<Switch>
					<Route path='/create-playlist'>
						{!token ? (
							<Redirect exact from='/create-playlist' to='/' />
						) : (
							<Home />
						)}
					</Route>
					<Route path='/'>
						{token ? (
							<Redirect exact from='/' to='/create-playlist' />
						) : (
							<LoginPage />
						)}
					</Route>
				</Switch>
			</Router>
		</TokenContext.Provider>
		</Provider>
	  );
};
export default App;