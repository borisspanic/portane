import axios from "axios";
axios.defaults.withCredentials = true;

var host = "http://localhost:8080";

export const login = async (data) => {
	try {
		const response = await axios.post(host + "/api/auth/login", data);
		return response.data.result;
	} catch (error) {
		alert(error.response.data.errors[0]);
		throw new Error(error);
	}
};

export const register = async (data) => {
	try {
		const response = await axios.post(host + "/api/users/create", data);

		return response.data.result;
	} catch (error) {
		alert(error.response.data.errors[0]);
		throw new Error(error);
	}
};
