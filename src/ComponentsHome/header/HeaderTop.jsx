import React from 'react';
import exat from './Header.svg/Exat.svg';
import { useState } from 'react';
import Login from '../../Login/Login';
import Reg from '../../Registration/Reg';


const HeaderTop = () => {
    const [isLoginOpen, setIsLoginOpen, ] = useState(false);
    const [isRegOpen, setIsRegOpen ] = useState(false);

  const openLogin = () => {
    setIsLoginOpen(true);
  };

  const closeLogin = () => {
    setIsLoginOpen(false);
  };
   const openReg = () => {
    setIsRegOpen(true);
  };

  const closeReg = () => {
    setIsRegOpen(false);
  };
    return (
        <div>
            <div className='headerTop'>
                <p className='headerTop-P'>8 (812) 123-45-67    |    Работаем 7 дней в неделю    |    9:00 — 18:00</p>
                <div className='headerTopBtn'>
                    <img className='exat' src={exat} alt="Логотип" />
                    <button className='Login2' onClick={openLogin} >Войти</button>
                    <span className='span'>/</span>
                    <button className='Login2' onClick={openReg} >Регистрация</button>
                </div>
            </div>
            <div>
          <Login isOpen={isLoginOpen} onClose={closeLogin} />
          <Reg className="Reg-Conteiner" isOpen={isRegOpen} onClose={closeReg}  />
        </div>
        </div>
    );
}

export default HeaderTop;
