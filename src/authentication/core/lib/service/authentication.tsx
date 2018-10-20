import { log } from "util";

export namespace Authentication {
    export const login = async (username: string, password: string) => {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password })
        };
    
        return await fetch(`http://localhost:7002/auth/login`, requestOptions)
            .then(res => res.json())
            .then((res: any) => {
                log(JSON.stringify(res, null, 4));
                localStorage.setItem("token", res as string);
            });
    };
    
    export const logout = () => {
        localStorage.removeItem("token");
    };
}


//  const userService = {
//     login,
//     logout,
// };
