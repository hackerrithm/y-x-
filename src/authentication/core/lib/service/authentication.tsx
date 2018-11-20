import axios from "axios";

export namespace Authentication {
        export const login = async (username: string, password: string) => {
                const data = {
                        username,
                        password
                };

                return await axios.post(
                        `http://localhost:7003/auth/user/login`,
                        JSON.stringify(data)
                );
        };

        export const signup = async (
                username: string,
                password: string,
                firstname: string,
                lastname: string
        ) => {
                const data = {
                        username,
                        password,
                        firstname,
                        lastname
                };

                return await axios.post(
                        `http://localhost:7003/auth/user/signup`,
                        JSON.stringify(data)
                );
        };

        export const logout = () => {
                localStorage.removeItem("user");
        };
}
