import React, { useState, useEffect } from "react";
import {SlClose} from "react-icons/sl"

const Modal = ({ isOpen, onClose, obj }) => {
  const modalClasses = isOpen
    ? "fixed inset-0 flex items-center justify-center z-50"
    : "hidden";

  // Utiliza useState para crear una copia editable del objeto
  const [info, setInfo] = useState({ ...obj });

  // Este efecto se ejecutará cuando obj cambie para actualizar la copia
  useEffect(() => {
    setInfo({ ...obj });
  }, [obj]);

  // Maneja cambios en la copia del objeto
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInfo({
      ...info,
      [name]: value,
    });
  };

  return (
    <div className={modalClasses}>
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="modal absolute bg-white p-8 rounded-lg shadow-lg h-3/4 w-1/2">
        <h2 className="text-2xl mb-4">Formulario</h2>
        <form>
          {/* Agrega tus campos de formulario aquí */}
          <div>
            <h3>Contenido editable:</h3>
            <ul className="p-4">
              {Object.keys(info).map((key) => (
                <li
                  key={key}
                  className="p-1 flex"
                >
                  <div className="font-semibold flex-[0.3]">{key}:</div>
                  <div className="flex-[0.7] w-full">
                    <input
                    className="w-full"
                      type="text"
                      name={key}
                      value={info[key]}
                      onChange={handleInputChange}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Enviar
          </button>
        </form>
        <button
          className="close-button absolute top-2 right-2 text-gray-600 hover:text-gray-900"
          onClick={onClose}
        >
          <SlClose size="1.5em" color="red"/>
        </button>
      </div>
    </div>
  );
};

export default Modal;
