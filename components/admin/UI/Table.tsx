import React from "react";

interface TableProps {
  data: Array<Record<string, React.ReactNode>>;
}

const Table: React.FC<TableProps> = ({ data }) => {
  // Get the headers from the first item in data
  const headers = Object.keys(data[0] || {});

  return (
    <table className="w-full font-gilroy-semi-bold border-separate border-spacing-0">
      <thead className="rounded-corners">
        <tr className="text-left">
          {headers.map((header, index) => (
            <th
              key={index}
              className={`border border-[#dadada] p-2 px-5 uppercase font-normal font-gilroy-semi-bold text-head-15 ${
                index === 0
                  ? "rounded-l-[9px] border-r-0 border-t"
                  : "border-x-0"
              } ${
                index === headers.length - 1 ? "rounded-r-[9px] border-r" : ""
              }`}
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="space-y-2 font-gilroy-semi-bold text-head-14 text-[#787878] font-normal">
        {data.map((item, index) => (
          <tr key={index}>
            {headers.map((header, idx) => (
              <td key={idx} className={`${index === 0 ? "pt-8" : ""} p-3`}>
                {item[header]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
