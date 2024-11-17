import React from 'react';
import CloseButton from '../components/closebutton.jsx';

const Paciente = ({ closePaciente }) => {
    return (
        <div className="flex bg-[#C8F8E5] w-full h-full rounded-2xl">
            <div className="flex mx-auto my-auto bg-red-300 w-11/12 h-5/6 rounded-lg">

            </div>
            <div className="absolute top-2 right-2 mt-4 mr-4">
                <CloseButton onClick={closePaciente} />
            </div>
        </div>
    );
};

export default Paciente;
