import { UserProfile } from "../components/spotify";

export interface IAuthState {
	isAuthenticated: boolean;
	accessToken: string;
	userInfo: UserProfile | null;
}