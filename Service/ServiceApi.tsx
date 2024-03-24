import axios, { AxiosInstance, AxiosResponse } from 'axios';
import User from "../Entities/User";





export default class ServiceApi {
    private axiosInstance: AxiosInstance;

    constructor() {
        this.axiosInstance = axios.create({
            baseURL: "http://localhost:8080",
        });
    }

    public async createUser(user: User): Promise<User> {
        try {
            const response = await this.axiosInstance.post("/user/create",
                {
                    name: user.name,
                    email: user.email
                },
                { headers: { 'Content-Type': 'application/json' } }
            );

            return response.data

        } catch (error: any) {
            throw error;
        }
    }


    public async SendEmail(email: string): Promise<AxiosResponse> {
        console.log('Chamando SendEmail');
        try {
            const response: AxiosResponse = await this.axiosInstance.post(
                "/user/send",
                { to: email },
                { headers: { 'Content-Type': 'application/json' } }
            );
            return response.data;
        } catch (error: any) {
            console.error('Erro no envio do e-mail:');
            if (error.response) {
                console.log('Detalhes da resposta de erro:', error.response.data);
            }
            throw error;
        }
    }
    public async HandleCodigo(email: string, codigo: string): Promise<AxiosResponse> {
        try {
            const response: AxiosResponse = await this.axiosInstance.post("user/email/validate", {
                email: email,
                codigo: codigo
            }, {
                headers: { 'Content-Type': 'application/json' }
            });

            const token = response.data.token;
            localStorage.setItem("token", token);
            return response;
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    public SetLocalStore() {
        const token = localStorage.getItem("token");
        return token !== null && token !== undefined;
    }

    public UserExit() {
        localStorage.removeItem("token")
    }
}


