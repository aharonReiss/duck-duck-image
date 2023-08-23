import DuckDuckStorage from "../utils/DuckDuckStorage";
import BaseHTTPService from "./BaseHTTPService";

class AuthService extends BaseHTTPService{
    loginWithUserNameAndPassword(username:string,password:string){
        const body = {
            email: username,
            password: password
        }

        return this.httpPost('/auth/login',body,{'Access-Control-Allow-Origin':'*'}).then((responce) => {
            return responce.data;
        })
    }
    isLoggedIn()
    {
        const user = DuckDuckStorage.getUser();
        if(user){
            const userToObj = JSON.parse(user);
            console.log(userToObj)
            return true;
        }
        return false;
    }
}
const authService = new AuthService(process.env['REACT_APP_BACK_URL'])
export default authService;