import React from "react";

const StatusDisplay = ({ status }) => {
  const getColor = (status) => {
    let color = "bg-slate-700";
    switch (status.toLowerCase()) {
      case "not started":
        color = "bg-red-400";
        break;
      case "in progress":
        color = "bg-yellow-400";
        break;
      case "completed":
        color = "bg-green-400";
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
