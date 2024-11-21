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
                
            </div>
            <div className="absolute top-2 right-2 mt-4 mr-4">
                <CloseButton onClick={closeBoxRegistrar} />
            </div>
        </div>
    );
};

export default BoxRegistrar;
