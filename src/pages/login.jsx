import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const navigate = useNavigate(); 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos enviados:', formData);
    

    navigate('/home');  
  };

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className="bg-[#84E1BC] p-16 rounded-xl w-96 mx-auto">
        <div className='mx-auto w-52'>
          <h2 className="text-center text-2xl font-bold mb-4 text-[#217D58]">Sistema de Clínica</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                id="username"
                placeholder="Nombre de usuario"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                required
                className="w-full pl-4 p-2 border border-gray-300 rounded mt-5 text-sm"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Contraseña"
                value={formData.password}
                onChange={handleInputChange}
                required
                className="w-full pl-4 p-2 border border-gray-300 rounded mt-4 text-sm"
              />
            </div>
            <button type="submit" className="flex w-28 justify-center mx-auto mt-10 bg-[#67AA8F] text-white p-2 rounded hover:bg-[#52816E]">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
