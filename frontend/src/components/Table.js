import React, { useState } from "react";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import Modal from "./Modal";
export default function Table({ columns, info }) {
  const [sortedInfo, setSortedInfo] = useState([...info]);
  const [sortColumn, setSortColumn] = useState(""); // Columna actualmente seleccionada
  const [sortDirection, setSortDirection] = useState("asc"); // Orden por defecto
  const [selectedRow, setSelectedRow] = useState(null); // Fila seleccionada
  const [clientPos, setClientPos] = useState({ x: 0, y: 0, isOpen: false });
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [columnsSubmenu, setColumnsSubmenu] = useState(false);
  const [columnVisibility, setColumnVisibility] = useState(
    Object.fromEntries(columns.map((column) => [column, true]))
  );

  const search = (term) => {
    const filteredData = info.filter((row) => {
      for (const column in row) {
        if (row[column].toString().toLowerCase().includes(term.toLowerCase())) {
          return true;
        }
      }
      return false;
    });
    setSortedInfo(filteredData);
  };

  const handleClickSort = (column) => {
    let newSortDirection = "asc"; // Orden ascendente por defecto

    // Si la misma columna se hace clic nuevamente, cambia el orden
    if (column === sortColumn) {
      newSortDirection = sortDirection === "asc" ? "desc" : "asc";
    }

    const sortedData = [...sortedInfo].sort((a, b) => {
      const nombreA = a[column].toUpperCase();
      const nombreB = b[column].toUpperCase();

      if (nombreA < nombreB) {
        return newSortDirection === "asc" ? -1 : 1;
      }
      if (nombreA > nombreB) {
        return newSortDirection === "asc" ? 1 : -1;
      }

      return 0;
    });

    setSortedInfo(sortedData);
    setSortColumn(column);
    setSortDirection(newSortDirection);
  };

  const handleRowClick = (rowIndex, event) => {
    event.preventDefault();
    setSelectedRow(rowIndex);
    event.stopPropagation();
    setClientPos({ x: 0, y: 0, isOpen: false });
  };
  const handleContextMenu = (rowIndex, event) => {
    event.preventDefault(); // Evitar el menú contextual del navegador
    setSelectedRow(rowIndex);
    setClientPos({ x: event.clientX, y: event.clientY, isOpen: true });
  };

  const toggleColumnVisibility = (column) => {
    setColumnVisibility((prevVisibility) => ({
      ...prevVisibility,
      [column]: !prevVisibility[column],
    }));
  };

  const handleClickColumnsSubmenu = () => {
    if (columnsSubmenu) setColumnsSubmenu(false);
    else setColumnsSubmenu(true);
  };
  return (
    <div className="py-10 flex justify-start pl-3 pr-20 flex-col gap-3">
      <div className="flex gap-3">
        <div className="flex justify-center items-center gap-2">
          <span>
            <BsSearch />
          </span>
          <input
            type="text"
            placeholder="Buscar..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              search(e.target.value);
            }}
            className="px-2 py-1 border rounded"
          />
        </div>

        <div
          onClick={handleClickColumnsSubmenu}
          className="flex justify-center items-center bg-slate-300 rounded-md"
        >
          <button className="flex justify-center items-center bg-slate-300 py-1 px-2 rounded-md gap-1">
            <span>Columnas</span>
            <span
              className={`transition-transform duration-150 ${
                columnsSubmenu ? "rotate-0" : "rotate-180"
              }`}
            >
              {<IoIosArrowDropleftCircle size="1.5em" />}
            </span>
          </button>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            {columns.map((column, index) =>
              columnVisibility[column] ? (
                <th
                  key={index}
                  className="resize-x overflow-auto border-2 cursor-pointer"
                  onClick={() => handleClickSort(column)}
                >
                  <button className="text-sm w-full h-full">{column}</button>
                </th>
              ) : null
            )}
          </tr>
        </thead>
        <tbody>
          {sortedInfo.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={`hover:bg-slate-300 ${
                rowIndex === selectedRow ? "bg-blue-200" : ""
              }`}
              onClick={(event) => handleRowClick(rowIndex, event)}
              onContextMenu={(event) => handleContextMenu(rowIndex, event)}
            >
              {columns.map((column, columnIndex) =>
                columnVisibility[column] ? (
                  <td
                    key={columnIndex}
                    className="border-2 text-sm text-left px-2 overflow-ellipsis overflow-hidden whitespace-nowrap max-w-[200px]"
                  >
                    {row[column]}
                  </td>
                ) : null
              )}
            </tr>
          ))}
        </tbody>
      </table>
      {columnsSubmenu && (
        <div className="fixed top-[4.3em] grid grid-cols-5 ml-[21.6em] bg-slate-200 rounded-md">
          {columns.map((column, index) => (
            <label
              key={index}
              className=" bg-slate-200 p-3 hover:bg-slate-100 rounded-md"
            >
              <input
                type="checkbox"
                className=" bg-red-100"
                checked={columnVisibility[column]}
                onChange={() => toggleColumnVisibility(column)}
              />
              {column}
            </label>
          ))}
        </div>
      )}
      {clientPos.isOpen && (
        <ContextMenu
          x={clientPos.x}
          y={clientPos.y}
          setClientPos={setClientPos}
          openModal={openModal}
        />
      )}
      <div>
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          obj={sortedInfo[selectedRow]}
        >
          
        </Modal>
      </div>
    </div>
  );
}
function ContextMenu({ x, y, setClientPos, openModal }) {
  const opciones = ["Editar", "Borrar", "Ver", "Hoja de Calculo"];
  return (
    <div
      style={{
        top: y,
        left: x,
      }}
      className="fixed p-4 bg-slate-100 rounded-md"
    >
      <ul className="">
        {opciones.map((e, index) => (
          <li className="flex" key={index}>
            <button
              className="hover:bg-slate-400 w-full flex-1 text-left"
              onClick={openModal}
            >
              {e}
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={() => setClientPos({ x: 0, y: 0, isOpen: false })}
        className="hover:bg-red-500 w-full text-left"
      >
        Close
      </button>
    </div>
  );
}
