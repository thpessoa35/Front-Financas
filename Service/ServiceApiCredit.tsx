import axios, { AxiosInstance } from "axios";
import Credit from "../Entities/Credit";
import Data from "../Entities/Date";


export class ServiceApiCredit {

    private axiosInstance: AxiosInstance;
    constructor() {
        this.axiosInstance = axios.create({
            baseURL: "http://localhost:8080"
        })
    }

    public async create(credit: Credit) {
        try {

            const token = localStorage.getItem("token");
            if (!token) {
                throw new Error("Token JWT não encontrado no localStorage");
            }
            const decodedToken = this.decodeJWT(token);
            const iduser = decodedToken.sub;
            const response = await this.axiosInstance.post(`/credit/${iduser}`,
                {
                    value: credit.value,
                    description: credit.descricao,

                },

                { headers: { 'Authorization': `Bearer ${token}` } }
            )

            return response.data
        }
        catch (error: any) {
            throw error;
        }
    }
    public async GetSaida(data: Data) {
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                throw new Error("Token JWT não encontrado no localStorage");
            }
    
            const decodedToken = this.decodeJWT(token);
            const iduser = decodedToken.sub;
    
            const response = await this.axiosInstance.get(`/credit/${iduser}`, {
                params: {
                    StartDate: data.StartDate,
                    EndDate: data.EndDate
                },
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            console.log(response.data)
            return response.data;
        } catch (error) {
            console.error('Erro ao fazer a requisição:', error);
            throw error;
        }
    }
    private decodeJWT(token: string): any {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(atob(base64));
        return JSON.parse(jsonPayload);
    }
}