import { AxiosHttp, IHttp } from "./HttpClient";

class BaseHTTPService{
    private baseUrl: string | undefined;
    private http: IHttp;
    constructor(baseUrl: string | undefined)
    {
        this.baseUrl = baseUrl;
        this.http = new AxiosHttp();
    }  
    
    async httpGet(relativeUrl: string, headers? :any){
        const url = this.baseUrl + relativeUrl;
        try{
            return this.http.get(url,headers)
            .then(async (res) => {
                return res;
            })
        }catch(ex:any){
            debugger
            console.log(ex)
        }
    }

    async httpDelete(relativeUrl: string, headers? :any){
        const url = this.baseUrl + relativeUrl;
        try{
            debugger;
            return this.http.del(url,undefined,headers)
            .then(async (res) => {
                debugger
                return res;
            })
        }catch(ex:any){
            debugger
            console.log(ex)
        }
    }

    async httpPost(relativeUrl: string,body?: object,headers? :any){
        const url = this.baseUrl + relativeUrl;
        try{
            return await this.http.post(url,body,headers)
            .then(async (res) => {
                return res;
            })
        }catch(ex:any){
            debugger
            console.log(ex)
        }
    }

    protected getTokenAsHeader(token: String) {
		return {
			Authorization: `Bearer ${token}`
		};
	}
}

export default BaseHTTPService;