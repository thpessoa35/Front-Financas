import axios, { AxiosInstance } from "axios";
import Debit from "../Entities/Debit";
import Data from "../Entities/Date";

class ServiceApiDebit {
    private axiosInstancia: AxiosInstance;

    constructor() {
        this.axiosInstancia = axios.create({
            baseURL: "http://localhost:8080"
        })
    }

    public async create(debit: Debit) {
        try {

            const token = localStorage.getItem("token");
            if (!token) {
                throw new Error("Token JWT não encontrado no localStorage");
            }
            const decodedToken = this.decodeJWT(token);
            const iduser = decodedToken.sub;
            const response = await this.axiosInstancia.post(`/debit/${iduser}`,
                {
                    value: debit.value,
                    type: debit.type,
                    description: debit.descricao,
                },

                { headers: { 'Authorization': `Bearer ${token}` } }
            )

            return response.data
        }
        catch (error: any) {
            throw error;
        }
    }
    public async createModule(debit: Debit) {
        try {

            const token = localStorage.getItem("token");
            if (!token) {
                throw new Error("Token JWT não encontrado no localStorage");
            }
            const decodedToken = this.decodeJWT(token);
            const iduser = decodedToken.sub;
            const response = await this.axiosInstancia.post(`/debit/${iduser}`,
                {
                    value: debit.value,
                    type: debit.type,
                    description: debit.descricao,
                    module: debit.module,
                },

                { headers: { 'Authorization': `Bearer ${token}` } }
            )

            return response.data
        }
        catch (error: any) {
            throw error;
        }
    }
    public async GetEntrada(data: Data) {
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                throw new Error("Token JWT não encontrado no localStorage");
            }
    
            const decodedToken = this.decodeJWT(token);
            const iduser = decodedToken.sub;
    
            const Date = {
                StartDate: data.StartDate,
                EndDate: data.EndDate
            }
    
            // Construindo a URL com os parâmetros de consulta
            const url = `http://localhost:8080/debit/entrada/${iduser}?StartDate=${Date.StartDate}&EndDate=${Date.EndDate}`;
    
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json' // Certifique-se de definir o tipo de conteúdo
                }
            });
    
            // Verificando se a solicitação foi bem-sucedida
            if (!response.ok) {
                throw new Error('Erro na solicitação GET');
            }
    
            const responseData = await response.json();
            console.log(responseData);
            return responseData;
        } catch (error) {
            console.error('Erro ao fazer a requisição:', error);
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
    
            const Date = {
                StartDate: data.StartDate,
                EndDate: data.EndDate
            }
    
            // Construindo a URL com os parâmetros de consulta
            const url = `http://localhost:8080/debit/saida/${iduser}?StartDate=${Date.StartDate}&EndDate=${Date.EndDate}`;
    
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json' 
                }
            });
    
            // Verificando se a solicitação foi bem-sucedida
            if (!response.ok) {
                throw new Error('Erro na solicitação GET');
            }
    
            const responseData = await response.json();
            console.log(responseData);
            return responseData;
        } catch (error) {
            console.error('Erro ao fazer a requisição:', error);
            throw error;
        }
    }
    public async GetEntradaFunction(data: Data) {
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                throw new Error("Token JWT não encontrado no localStorage");
            }
    
            const decodedToken = this.decodeJWT(token);
            const iduser = decodedToken.sub;
    
            const Date = {
                StartDate: data.StartDate,
                EndDate: data.EndDate,
                module: data.module
            }
    
           
            const url = `http://localhost:8080/debit/entrada/${iduser}/${Date.module}?StartDate=${Date.StartDate}&EndDate=${Date.EndDate}`;
    
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
    
            // Verificando se a solicitação foi bem-sucedida
            if (!response.ok) {
                throw new Error('Erro na solicitação GET');
            }
    
            const responseData = await response.json();
            console.log(responseData);
            return responseData;
        } catch (error) {
            console.error('Erro ao fazer a requisição:', error);
            throw error;
        }
    }

    public async GetSaidaFunction(data: Data) {
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                throw new Error("Token JWT não encontrado no localStorage");
            }
    
            const decodedToken = this.decodeJWT(token);
            const iduser = decodedToken.sub;
    
            const Date = {
                StartDate: data.StartDate,
                EndDate: data.EndDate,
                module: data.module
            }
            
            
            const url = `http://localhost:8080/debit/saida/${iduser}/${Date.module}?StartDate=${Date.StartDate}&EndDate=${Date.EndDate}`;
            
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
    
            // Verificando se a solicitação foi bem-sucedida
            if (!response.ok) {
                throw new Error('Erro na solicitação GET');
            }
    
            const responseData = await response.json();
            console.log(responseData);
            return responseData;
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
export default ServiceApiDebit;