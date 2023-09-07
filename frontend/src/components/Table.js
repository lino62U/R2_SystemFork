import React from "react";

export default function Table({ columns, info }) {
  const colCount = columns.length;

  return (
    <div className="p-10">
      
      <div>
      <div className={`grid grid-cols-${colCount} auto-cols-max`}>
        {columns.map((col) => (
          <div key={col} className="border p-2">
            {col}
          </div>
        ))}
      </div>
        {info.map((row, rowIndex) => (
          <div key={rowIndex} className={`grid grid-cols-${colCount} hover:bg-slate-200`}>
            {columns.map((col, colIndex) => (
              <div key={`${rowIndex}-${colIndex}`} className="border p-2">
                {row[col]}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
