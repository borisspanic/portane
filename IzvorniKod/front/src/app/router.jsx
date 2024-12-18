import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./routes/app/home";
import UserProfile from "./routes/app/userProfile";
import CreateWardrobe from "./routes/app/createWardrobe";
import Auth from "./routes/auth/auth";
import AppProvider from "./provider";

function Router() {
	return (
		<BrowserRouter>
			<AppProvider>
				<Routes>
					<Route path="/user-profile" element={<UserProfile />} />
					<Route path="/create-wardrobe" element={<CreateWardrobe />} />
					<Route path="/" element={<Home />} />
					<Route path="/auth/:mode" element={<Auth />} />
					<Route path="/auth" element={<Auth />} />
					<Route path="*" element={<Navigate to="/" replace />} />
				</Routes>
			</AppProvider>
		</BrowserRouter>
	);
}

export default Router;
