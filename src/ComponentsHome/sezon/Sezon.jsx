import React from 'react';
import "./sezon.scss"
import Card from '../Card/Card';
const Sezon = () => {
    return (
        <div className='Sezon'>

            <div className='SezonText'>

                <h1 >СЕЗОН 2020/21</h1>

                <div className="line"></div>
                <div className='Time'>
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
            <div className="SezonImg">
                <div className='imgKatalog'>
                    <h1>Новая коллекция</h1>
                    <div className="line"></div>
                    <button className='Catalogbtn'>Каталог</button>

                </div>
            </div>
        </div>


    );
}

export default Sezon;
