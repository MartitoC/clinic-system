import React from 'react';
import CloseButton from './closebutton.jsx';

const BoxCitas = ({ closeBoxCitas }) => {
    return (
        <div className="flex bg-[#C8F8E5] w-full h-full rounded-2xl relative">
            <div className="flex flex-col mx-auto my-auto bg-[#C8F8E5] w-11/12 h-5/6 rounded-lg p-6">
                <div className="flex justify-center text-[#217D58] font-normal text-2xl mb-4">
                    <h2>Citas Agendadas</h2>
                    </div>
                        <table className="table-auto font-thin text-sm w-full bg-[#217D58]">
                            <thead>
                                <tr className="text-white font-thin text-sm">
                                    <th className="">codigo</th>
                                    <th className="">nombre_paciente</th>
                                    <th className="">cedula_paciente</th>
                                    <th className="">nombre_doctor</th>
                                    <th className="">nombre_personal</th>
                                    <th className="">fecha</th>
                                    <th className="">hora</th>
                                </tr>
                                <tr className='bg-white'>
                                    <th>""</th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                </tr>
                                <tr className='bg-white'>
                                    <th>""</th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                </tr>
                                <tr className='bg-white'>
                                    <th>""</th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                </tr>
                                <tr className='bg-white'>
                                    <th>""</th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                </tr>
                                <tr className='bg-white'>
                                    <th>""</th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Aquí puedes agregar filas con datos en el futuro */}
                            </tbody>
                        </table>
                    <div>
                </div>
                
            </div>
            <div className="absolute top-2 right-2 z-50">
                <CloseButton onClick={closeBoxCitas} />
            </div>
        </div>
    );
};

export default BoxCitas;
