import React from 'react';
import CloseButton from './closebutton.jsx';
import FormFactura from './forms/formFactura.jsx'; 

const BoxFactura = ({ closeBoxFactura }) => {
    return (
        <div className="flex bg-[#C8F8E5] w-full h-full rounded-2xl">
            <div className="mx-auto my-auto bg-[#C8F8E5] w-11/12 h-5/6 rounded-lg p-4">
                <FormFactura />
            </div>
            <div className="absolute top-2 right-2 mt-4 mr-4">
                <CloseButton onClick={closeBoxFactura} />
            </div>
        </div>
    );
};

export default BoxFactura;
