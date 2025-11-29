import React from "react";

const Chart = ({ data }) => {
  return (
    <div className="chart">
      {data.map((item, index) => (
        <div key={index} className="bar" style={{ height: `${item.value}px` }}>
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Chart;
