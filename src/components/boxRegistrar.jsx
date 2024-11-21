import React, { useState } from 'react';
import CloseButton from './closebutton.jsx';
import FormPaciente from './forms/formPaciente.jsx';
import FormDoctor from './forms/formDoctor.jsx';
import FormPersonal from './forms/formPersonal.jsx';

const BoxRegistrar = ({ closeBoxRegistrar }) => {
    const [activeForm, setActiveForm] = useState('paciente'); 

    return (
        <div className="flex bg-[#C8F8E5] w-full h-full rounded-2xl">
            <div className="mx-auto my-auto bg-[#C8F8E5] w-11/12 h-5/6 rounded-lg">
                <div className="flex justify-center w-full text-[#217D58] font-normal text-2xl mb-4">
                    <h2>Registrar</h2>
                </div>
                <div className="flex justify-center mb-4">
                    <button
                        className={`w-32 p-2 rounded-l-lg transition duration-200 ${
                            activeForm === 'paciente' ? 'bg-[#457D67] text-white' : 'bg-[#67AA8F] text-white hover:bg-[#457D67]'
                        }`}
                        onClick={() => setActiveForm('paciente')}
                    >
                        Paciente
                    </button>
                    <button
                        className={`w-32 p-2 transition duration-200 ${
                            activeForm === 'doctor' ? 'bg-[#457D67] text-white' : 'bg-[#67AA8F] text-white hover:bg-[#457D67]'
                        }`}
                        onClick={() => setActiveForm('doctor')}
                    >
                        Doctor/a
                    </button>
                    <button
                        className={`w-32 p-2 rounded-r-lg transition duration-200 ${
                            activeForm === 'personal' ? 'bg-[#457D67] text-white' : 'bg-[#67AA8F] text-white hover:bg-[#457D67]'
                        }`}
                        onClick={() => setActiveForm('personal')}
                    >
                        Personal
                    </button>
                </div>
                <div id="form" className="p-4">
                    {activeForm === 'paciente' && <FormPaciente />}
                    {activeForm === 'doctor' && <FormDoctor />}
                    {activeForm === 'personal' && <FormPersonal />}
                </div>
            </div>
            <div className="absolute top-2 right-2 mt-4 mr-4">
                <CloseButton onClick={closeBoxRegistrar} />
            </div>
        </div>
    );
};

export default BoxRegistrar;
