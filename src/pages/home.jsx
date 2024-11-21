import React, { useState } from 'react';
import Button from '../components/button.jsx';
import Box from '../components/box.jsx';
import BoxCitas from '../components/boxCitas.jsx';
import BoxRegistrar from '../components/boxRegistrar.jsx';
import BoxFactura from '../components/boxFactura.jsx';

const Home = () => {
    const [isBoxVisible, setBoxVisible] = useState(false);
    const [isBoxCitasVisible, setBoxCitasVisible] = useState(false);
    const [isBoxRegistrarVisible, setBoxRegistrarVisible] = useState(false);
    const [isBoxFacturaVisible, setBoxFacturaVisible] = useState(false);

    const OpenBoxAgendar = () => {
        setBoxCitasVisible(false);
        setBoxRegistrarVisible(false);
        setBoxVisible(true);
    };
    const OpenBoxCitas = () => {
        setBoxCitasVisible(true);
        setBoxRegistrarVisible(false);
        setBoxVisible(false);
    };
    const OpenBoxRegistrar = () => {
        setBoxRegistrarVisible(true);
        setBoxCitasVisible(false);
        setBoxVisible(false)
    }
    const OpenBoxFactura = () => {
        setBoxFacturaVisible(true);
        setBoxRegistrarVisible(false);
        setBoxCitasVisible(false);
        setBoxVisible(false)
    }

    const closeBox = () => {
        setBoxVisible(false);
        
    };
    const closeBoxCitas = () => {
        setBoxCitasVisible(false);
    };
    const closeBoxRegistrar = () => {
        setBoxRegistrarVisible(false);
    };
    const closeBoxFactura = () => {
        setBoxFacturaVisible(false);
    }

    return (
        <div className='flex h-screen bg-transparent relative'>
            <div className='bg-[#84E1BC] h-full w-40 z-10'>
                <div className='flex justify-center mt-20'>
                    <Button onClick={OpenBoxAgendar} className="w-[100px]">Agendar</Button>
                </div>
                <div className='flex justify-center mt-8'>
                    <Button onClick={OpenBoxCitas} className="w-[100px]">Citas</Button>
                </div>
                <div className='flex justify-center mt-8'>
                    <Button onClick={OpenBoxRegistrar} className="w-[100px]">Registrar</Button>
                </div>
                <div className='flex justify-center mt-8'>
                    <Button onClick={OpenBoxFactura} className="w-[100px]">Facturacion</Button>
                </div>
            </div>

            <div className='w-full h-screen p-4'>
            {isBoxVisible && <Box closeBox={closeBox} />}
            {isBoxCitasVisible && <BoxCitas closeBoxCitas={closeBoxCitas} />}
            {isBoxRegistrarVisible && <BoxRegistrar closeBoxRegistrar={closeBoxRegistrar} />}
            {isBoxFacturaVisible && <BoxFactura closeBoxFactura={closeBoxFactura} />}


            </div>


            {!isBoxVisible && !isBoxCitasVisible && !isBoxRegistrarVisible && !isBoxFacturaVisible &&(
                <div className="flex items-center justify-center w-full h-full absolute top-0 left-0 z-0">
                    <h2 className="text-black text-xl text-opacity-30">Nada por hacer</h2>
                </div>
            )}
        </div>
    );
}

export default Home;
