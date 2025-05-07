import React from "react";

interface CustomProgressProps {
  value: number; // Example: "50%"
}

const CustomProgress = ({ value }: CustomProgressProps) => {
  return (
    <div className="progress_box">
      <div className="progress_label">
        <h2>
          Pending Amount <span>{value}%</span>
        </h2>
      </div>
      <div className="progress_box_in">
        <div className="inner_value" style={{ width:`${value}%` }}></div>
      </div>
    </div>
  );
};

export default CustomProgress;
