import axios from "axios";

export namespace Authentication {
    export const login = async (username: string, password: string) => {
        const data = {
            username,
            password
        };

        return await axios
            .post(`http://localhost:7003/auth/login`, JSON.stringify(data))
    };

    export const logout = () => {
        localStorage.removeItem("token");
    };
}
