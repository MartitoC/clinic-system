import React, { useState } from 'react';
import Button from '../components/button.jsx';
import Box from '../components/box.jsx';


const Home = () => {
    const [isBoxVisible, setBoxVisible] = useState(false);

    const handleClick = () => {
        setBoxVisible(true);
    };

    const closeBox = () => {
        setBoxVisible(false);  
    };

    return (
        <div className='flex h-screen bg-transparent relative'>
            <div className='bg-[#84E1BC] h-full w-40 z-10'> 
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
            
            <div className='w-full h-screen p-4'>
            {isBoxVisible && <Box closeBox={closeBox} />}

            </div>

           
            {!isBoxVisible && (
                <div className="flex items-center justify-center w-full h-full absolute top-0 left-0 z-0">
                    <h2 className="text-black text-xl text-opacity-30">Nada por hacer</h2>
                </div>
            )}
        </div>
    );
}

export default Home;
