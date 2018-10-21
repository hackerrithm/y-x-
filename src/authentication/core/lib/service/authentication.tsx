import { log } from "util";

export namespace Authentication {
    export const login = async (username: string, password: string) => {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password })
        };
    
        return await fetch(`http://localhost:7003/auth/login`, requestOptions)
            .then(res => res.json())
            .then((res: any) => {
                log(JSON.stringify(res, null, 4) + ' ------------------------ RES');
                localStorage.setItem("token", res);
            }).catch((e) => {
                log(e + " incorrect stuff")
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
