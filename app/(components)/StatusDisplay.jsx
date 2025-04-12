import React from "react";

const StatusDisplay = ({ status }) => {
  const getColor = (status) => {
    let color = "bg-slate-700";
    switch (status.toLowerCase()) {
      case "not started":
        color = "bg-red-accent";
        break;
      case "in progress":
        color = "bg-yellow-accent";
        break;
      case "completed":
        color = "bg-green-accent";
        break;
      default:
        color = "bg-slate-700";
    }
    return color;
  };

  return (
    <span
      className={`inline-block rounded-full px-2 py-1 text-xs font-semibold text-gray-700 ${getColor(
        status
      )}`}
    >
      {status}
    </span>
  );
};

export default StatusDisplay;
