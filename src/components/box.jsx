import React from 'react';
import CloseButton from './closebutton.jsx';

const Box = ({ closeBox }) => {
    return (
        <div className="flex bg-[#C8F8E5] w-full h-full rounded-2xl text-[#217D58]">
            <div className="flex mx-auto my-auto bg-[#C8F8E5] w-11/12 h-5/6 rounded-lg p-6">
                <form className="w-full">
                    <h2 className="flex justify-center text-2xl font-normal mb-4">Agendar Cita</h2>
                    
                    <div className="mb-4">
                        <label htmlFor="nombreCompleto" className="block font-medium">Nombre Completo del Paciente</label>
                        <input
                            type="text"
                            id="nombreCompleto"
                            className="w-full p-2 border border-gray-300 rounded-lg"
                            placeholder="Ingrese su nombre completo"
                        />
                    </div>
                    
                    <div className="mb-4">
                        <label htmlFor="ci" className="block font-medium">Cédula de Identidad(CI o RUC)</label>
                        <input
                            type="text"
                            id="ci"
                            className="w-full p-2 border border-gray-300 rounded-lg"
                            placeholder="Ingrese su cédula"
                        />
                    </div>
                    
                    <div className="mb-4">
                        <label htmlFor="especialidad" className="block font-medium">Especialidad</label>
                        <input
                            type="text"
                            id="especialidad"
                            className="w-full p-2 border border-gray-300 rounded-lg"
                            placeholder="Ingrese la especialidad"
                        />
                    </div>
                    
                    <div className="mb-4">
                        <label htmlFor="doctor" className="block font-medium">Doctor/a</label>
                        <input
                            type="text"
                            id="doctor"
                            className="w-full p-2 border border-gray-300 rounded-lg"
                            placeholder="Ingrese el nombre del doctor/a"
                        />
                    </div>
                    
                    <div className="mb-4">
                        <label htmlFor="fecha" className="block font-medium">Fecha de Turno</label>
                        <input
                            type="date"
                            id="fecha"
                            className="w-full p-2 border border-gray-300 rounded-lg"
                        />
                    </div>
                    
                    <div className="mb-4">
                        <label htmlFor="hora" className="block font-medium">Hora del Turno</label>
                        <input
                            type="time"
                            id="hora"
                            className="w-full p-2 border border-gray-300 rounded-lg"
                        />
                    </div>
                    <div className='flex justify-center items-center'>
                        <button
                            type="submit"
                            className="w-32 bg-[#67AA8F] text-white p-2 rounded-lg hover:bg-[#457D67] transition duration-200"
                        >
                            Agendar Turno
                        </button>
                    </div>
                    
                </form>
            </div>
            <div className="absolute top-2 right-2 mt-4 mr-4">
                <CloseButton onClick={closeBox} />
            </div>
        </div>
    );
};

export default Box;
