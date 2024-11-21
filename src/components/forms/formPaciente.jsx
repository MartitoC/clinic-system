import React from 'react';

const FormPaciente = () => {
    return (
        <form className="grid grid-cols-2 gap-4">
            <div>
                <label className="block text-[#217D58] font-medium mb-1" htmlFor="nombre">Nombre</label>
                <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    className="w-full p-2 border border-[#67AA8F] rounded"
                    placeholder="Ingrese el nombre"
                />
            </div>
            <div>
                <label className="block text-[#217D58] font-medium mb-1" htmlFor="apellido">Apellido</label>
                <input
                    type="text"
                    id="apellido"
                    name="apellido"
                    className="w-full p-2 border border-[#67AA8F] rounded"
                    placeholder="Ingrese el apellido"
                />
            </div>
            <div>
                <label className="block text-[#217D58] font-medium mb-1" htmlFor="cedula">Cédula</label>
                <input
                    type="text"
                    id="cedula"
                    name="cedula"
                    className="w-full p-2 border border-[#67AA8F] rounded"
                    placeholder="Ingrese la cédula"
                />
            </div>
            <div>
                <label className="block text-[#217D58] font-medium mb-1" htmlFor="fechaNacimiento">Fecha de Nacimiento</label>
                <input
                    type="date"
                    id="fechaNacimiento"
                    name="fechaNacimiento"
                    className="w-full text-gray-400 p-2 border border-[#67AA8F] rounded"
                />
            </div>
            <div>
                <label className="block text-[#217D58] font-medium mb-1" htmlFor="direccion">Dirección</label>
                <input
                    type="text"
                    id="direccion"
                    name="direccion"
                    className="w-full p-2 border border-[#67AA8F] rounded"
                    placeholder="Ingrese la dirección"
                />
            </div>
            <div>
                <label className="block text-[#217D58] font-medium mb-1" htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-2 border border-[#67AA8F] rounded"
                    placeholder="Ingrese el email"
                />
            </div>
            <div>
                <label className="block text-[#217D58] font-medium mb-1" htmlFor="telefono">Teléfono</label>
                <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    className="w-full p-2 border border-[#67AA8F] rounded"
                    placeholder="Ingrese el teléfono"
                />
            </div>
            <div className="col-span-2 flex justify-end">
                <button
                    type="submit"
                    className="bg-[#217D58] text-white px-4 py-2 rounded hover:bg-[#186548] transition duration-200"
                >
                    Registrar
                </button>
            </div>
        </form>
    );
};

export default FormPaciente;
