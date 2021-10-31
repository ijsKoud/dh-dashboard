import React, { useState, useContext, createContext, useEffect } from "react";
import { fetch } from "../fetch";
import type { User } from "../types";

interface UseAuth {
	user: User | null;
	loading: boolean;
	update: (data: User | null) => void;
}

const authContext = createContext<UseAuth>({ user: null, loading: true, update: () => void 0 });

export const ProvideAuth: React.FC = ({ children }) => {
	const auth = useProvideAuth();
	return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export const useAuth = () => {
	return useContext(authContext);
};

const useProvideAuth = (): UseAuth => {
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState<true | false>(true);

	useEffect(() => {
		fetch<User>("/user/", { method: "GET", withCredentials: true })
			.then((res) => {
				setUser(res.data);
				setLoading(false);
			})
			.catch(() => setLoading(false));
	}, []);

	const update = (data: User | null) => setUser(data);

	return {
		user,
		loading,
		update,
	};
};
