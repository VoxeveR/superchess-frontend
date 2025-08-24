import axios from "axios";

export async function login(email: string, password: string) {
    try {
        const response = await axios.post("http://localhost:8080/api/auth/login",
            {
            "email" : email,
            "password" : password,
            });
        console.log(response);
        return response.data;
    } catch (error) {
        console.log("ERROR: Login failed.");
        throw error;
    }
}

export async function logout() {
    const refreshToken = sessionStorage.getItem("refreshToken");
    try {
        const response = await axios.post("http://localhost:8080/api/auth/logout",
            {
                "refreshToken" : refreshToken,
            });

        console.log(response);

        sessionStorage.clear();

        return response.data;
    } catch (error) {
        console.log("ERROR: Logout failed.");
        throw error;
    }
}

export async function register(email: string, username: string, password: string) {
    try {
        const response = await axios.post("http://localhost:8080/api/auth/register",
            {
                "email" : email,
                "username" : username,
                "password" : password,
            })
        console.log(response);
        return response.data;
    }
    catch (error) {
        console.log("ERROR: Register failed.");
        throw error;
    }
}