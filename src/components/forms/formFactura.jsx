import React from 'react';

const FormFactura = () => {
    return (
        <form className="w-full text-[#217D58]">
        <h2 className="flex justify-center text-2xl font-normal mb-4">Facturación</h2>
        <div className="mb-4">
            <label htmlFor="fecha" className="block font-medium">Fecha Factura</label>
            <input
                type="date"
                id="fecha"
                className="w-full p-2 border border-gray-300 rounded-lg text-gray-400"
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
            <label htmlFor="doctor" className="block font-medium">Servicio (Codigo Cita)</label>
            <input
                type="text"
                id="doctor"
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Ingrese el nombre del doctor/a"
            />
        </div>
        <div className="mb-4">
            <label htmlFor="doctor" className="block font-medium">Cantidad</label>
            <input
                type="text"
                id="doctor"
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Ingrese el nombre del doctor/a"
            />
        </div>
        <div className="mb-4">
            <label htmlFor="doctor" className="block font-medium">Total</label>
            <input
                type="text"
                id="doctor"
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Ingrese el nombre del doctor/a"
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
    );
};

export default FormFactura;
