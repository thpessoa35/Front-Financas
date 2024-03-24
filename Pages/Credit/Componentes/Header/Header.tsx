import React, { useState } from 'react';
import { Header } from './style';
import { useNavigate } from 'react-router-dom';

export const HeaderComponent: React.FC = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const navigate = useNavigate()
    const handleMouseEnter = () => {
      setTimeout(() => {
          setIsMenuOpen(true);
      }, 100);
    };
  
    const handleMouseLeave = () => {
        setTimeout(() => {
            setIsMenuOpen(false);
        }, 100);
    };
  
    const handleDebitClick = () => {
        navigate('/debit    ')
    };
    const handleLogout = () => {
      
      
    };
    return (
      <Header>
        <h1 className='h1-header'>Business Financas</h1>
        <div>
          <span
            className='Perfil-Handle'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Account
           
            {isMenuOpen && (
              <div className="menu">
                <button onClick={handleLogout}>Sair</button>
              </div>
            )}
          </span>
        </div>
        <span className='debit' onClick={handleDebitClick}>Debit</span>
      </Header>
    );
};
