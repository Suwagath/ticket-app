import React, { cache } from "react";
import TicketCard from "./(components)/TicketCard";

const getTicket = async () => {
  try {
    const res = await fetch("https://localshost:3000/api/Tickets", {
      cache: "no-store",
    });
    return res.json();
  } catch (error) {
    console.log("Failed to get tickets", error);
  }
};

const Dashboard = async () => {
  const { tickets } = await getTicket();

  const uniqueCategories = [
    ...new Set(tickets.map(({ category }) => category)),
  ];

  return (
    <div className="p-5">
      <div>
        {tickets &&
          uniqueCategories?.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex} className="mb-4">
              <h2>{uniqueCategory}</h2>
            </div>
          ))}
      </div>
      <div className="lg:grid grid-cols-2 xl:grid-cols-4"></div>
    </div>
  );
};

export default Dashboard;
