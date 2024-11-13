import React from 'react';
import Button from '../components/button.jsx';

const Home = () => {
    const handleClick = () => {
        console.log('Botón clicado');
    };
    return (
        <div className='flex h-screen bg-transparent'>
            <div className='bg-[#9ac9b6] h-full w-40'>
                <div className='flex justify-center mt-20'>
                    <Button onClick={handleClick} className="w-[100px]">Agendar</Button>
                </div>
                <div className='flex justify-center mt-8'>
                    <Button onClick={handleClick} className="w-[100px]">Citas</Button>
                </div>
                <div className='flex justify-center mt-8'>
                    <Button onClick={handleClick} className="w-[100px]">Registrar</Button>
                </div>
                <div className='flex justify-center mt-8'>
                    <Button onClick={handleClick} className="w-[100px]">Facturacion</Button>
                </div>
            </div>
            <h2 className='flex text-black text-xl text-opacity-30 mx-auto m-auto'>Nada por hacer</h2> 
        </div>
    );
}

export default Home;
