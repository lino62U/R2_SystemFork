import React, { useState } from "react";

export default function Table({ columns, info }) {
  const [sortedInfo, setSortedInfo] = useState([...info]);
  const [sortColumn, setSortColumn] = useState(""); // Columna actualmente seleccionada
  const [sortDirection, setSortDirection] = useState("asc"); // Orden por defecto
  const [selectedRow, setSelectedRow] = useState(null); // Fila seleccionada
  const [clientPos, setClientPos] = useState({ x: 0, y: 0, isOpen: false });
  const [searchTerm, setSearchTerm] = useState("");
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
  return (
    <div className="py-10 flex justify-start pl-3 pr-20 flex-col gap-3">
      <div className="flex gap-3">
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
        <div>
          Ver:
          {columns.map((column, index) => (
            <label key={index} className="ml-2">
              <input
                type="checkbox"
                checked={columnVisibility[column]}
                onChange={() => toggleColumnVisibility(column)}
              />
              {column}
            </label>
          ))}
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
              {columns.map(
                (column, columnIndex) =>
                  columnVisibility[column] ? (
                    <td
                      key={columnIndex}
                      className="border-2 text-sm text-left px-2"
                    >
                      {row[column]}
                    </td>
                  ) : null
              )}
            </tr>
          ))}
        </tbody>
      </table>
      {clientPos.isOpen && (
        <ContextMenu
          x={clientPos.x}
          y={clientPos.y}
          setClientPos={setClientPos}
        />
      )}
    </div>
  );
}
function ContextMenu({ x, y, setClientPos }) {
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
            <button className="hover:bg-slate-400 w-full flex-1 text-left">
              {e}
            </button>
          </li>
        ))}
      </ul>
      <button onClick={() => setClientPos({ x: 0, y: 0, isOpen: false })} className="hover:bg-red-500 w-full text-left">
        Close
      </button>
    </div>
  );
}
