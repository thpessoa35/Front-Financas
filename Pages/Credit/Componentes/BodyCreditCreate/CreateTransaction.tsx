import React, { useState } from "react";
import { ContainerEntrada } from "./style";
import { ServiceApiCredit } from "../../../../Service/ServiceApiCredit";
import Credit from "../../../../Entities/Credit";

const ContainerEntradaDebit: React.FC = () => {
    const serviceApiDebit = new ServiceApiCredit();
    const [valor, setValor] = useState<number | "">(""); // Inicializado com 0
    const [texto, setTexto] = useState<string>("");
    const [tipo, setTipo] = useState("");

    const handleApply = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (!valor) {
            console.error("Por favor, preencha todos os campos.");
            return;
        }

        const debit: Credit = {
            value: valor,
            descricao: texto,
        }

        try {
            await serviceApiDebit.create(debit);
            setTexto("");
            setTipo("");
        } catch (error) {
            console.error("Erro ao inserir na API:", error);
        }
    };

    return (
        <ContainerEntrada>
            <label>valor: </label>
            <input 
                type="number" 
                value={valor} 
                onChange={(e) => {
                    const newValue = parseFloat(e.target.value);
                    if (!isNaN(newValue)) {
                        setValor(newValue);
                    }
                }} 
            />
            <label>texto:</label>
            <input 
                type="text" 
                value={texto} 
                onChange={(e) => setTexto(e.target.value)} 
            />
            <label>tipo:</label>
            <select 
                id="tipoSelecionado" 
                value={tipo} 
                onChange={(e) => setTipo(e.target.value)}
            >
                
                <option value="Saida">Saida</option>
            </select>
            <button type="submit" className='button-Inserir' onClick={handleApply}>Aplicar</button>
        </ContainerEntrada>
    );
};

export default ContainerEntradaDebit;
