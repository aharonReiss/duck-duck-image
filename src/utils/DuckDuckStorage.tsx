class DuckDuckStorage{
    saveUser(user:string){
        localStorage.setItem('user',user);
    }
    getUser(){
        return localStorage.getItem('user');
    }
    deleteUser(){
        localStorage.removeItem('user');
    }
    getToken(){
        const user = localStorage.getItem('user');
        if(user){
            const userToObj = JSON.parse(user);
            console.log(userToObj)
            return userToObj.token;
        }
        return '';
    }
}
export default new DuckDuckStorage();