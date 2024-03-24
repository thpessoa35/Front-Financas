import React, { useEffect, useState } from 'react';
import { Header } from './style';
import { useNavigate } from 'react-router-dom';


const HeaderComponentFunction: React.FC = () => {
    const [isMenuOpenAccount, setIsMenuOpenAccount] = useState(false);
    const [isMenuOpenDebit, setIsMenuOpenDebit] = useState(false);
    const navigate = useNavigate();


    const handleMouseEnterAccount = () => {
        setTimeout(() => {
            setIsMenuOpenAccount(true);
        }, 100);
    };

    const handleMouseLeaveAccount = () => {
        setTimeout(() => {
            setIsMenuOpenAccount(false);
        }, 100);
    };

    const handleMouseEnterDebit = () => {
        setTimeout(() => {
            setIsMenuOpenDebit(true);
        }, 100);
    };

    const handleMouseLeaveDebit = () => {
        setTimeout(() => {
            setIsMenuOpenDebit(false);
        }, 100);
    };

    const creditNavigate = () => {
        navigate('/credit');
    };
    const funçoesNavigate = () => {
        navigate('/debit')
    }

    const handleLogout = () => {
        console.log('Usuário desconectado');
    };

    return (
        <Header>
            <h1 className='h1-header'>Business Financas</h1>
            <div>
                <span
                    className='Perfil-Handle'
                    onMouseEnter={handleMouseEnterAccount}
                    onMouseLeave={handleMouseLeaveAccount}
                >
                    Account
                    {isMenuOpenAccount && (
                        <div className="menu">
                            <button onClick={handleLogout}>Sair</button>
                        </div>
                    )}
                </span>
            </div>
            <div>
                <span className='credit' onClick={creditNavigate}>Credit</span>
                <span className='funções' onClick={funçoesNavigate}>Debit</span>
            </div>
        </Header>
    );
};

export default HeaderComponentFunction;
