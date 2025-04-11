"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const TicketForm = () => {
  const router = useRouter();
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const startingTicketData = {
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "not started",
    category: "Bug",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/Tickets", {
      method: "POST",
      body: JSON.stringify({ formData }),
      "content-type": "application/json",
    });

    if (!res.ok) {
      throw new Error("Error creating ticket");
    }
    router.refresh();
    router.push("/");
  };

  const [formData, setFormData] = useState(startingTicketData);
  return (
    <div className="flex justify-center">
      <form
        action=""
        className="flex flex-col gap-3 w-1/2"
        method="POST"
        onSubmit={handleSubmit}
      >
        <h3>Create Your Ticket</h3>
        <label>Title</label>
        <input
          id="title"
          type="text"
          name="title"
          onChange={handleChange}
          required={true}
          value={formData.title}
        />
        <label>Description</label>
        <textarea
          id="description"
          name="description"
          onChange={handleChange}
          required={true}
          value={formData.description}
          rows="5"
        />

        <label htmlFor="">Category</label>
        <select
          name="category"
          id=""
          value={formData.category}
          onChange={handleChange}
        >
          <option value="Bug">Bug</option>
          <option value="Feature">Feature</option>
          <option value="Task">Task</option>
        </select>

        <label htmlFor="">Priority</label>
        <div>
          <input
            type="radio"
            id="priority-1"
            name="priority"
            onChange={handleChange}
            value={1}
            checked={formData.priority == 1}
          />
          <label htmlFor="">1</label>
          <input
            type="radio"
            id="priority-2"
            name="priority"
            onChange={handleChange}
            value={2}
            checked={formData.priority == 2}
          />
          <label htmlFor="">2</label>
          <input
            type="radio"
            id="priority-1"
            name="priority"
            onChange={handleChange}
            value={3}
            checked={formData.priority == 3}
          />
          <label htmlFor="">3</label>
          <input
            type="radio"
            id="priority-1"
            name="priority"
            onChange={handleChange}
            value={4}
            checked={formData.priority == 4}
          />
          <label htmlFor="">4</label>
          <input
            type="radio"
            id="priority-1"
            name="priority"
            onChange={handleChange}
            value={5}
            checked={formData.priority == 5}
          />
          <label htmlFor="">5</label>
        </div>
        <label htmlFor="">Progress</label>
        <input
          type="range"
          id="progress"
          name="progress"
          value={formData.progress}
          min={0}
          max={100}
          onChange={handleChange}
        />
        <label htmlFor="">Status</label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          id=""
        >
          <option value="not started">Not Started</option>
          <option value="in progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
        <input type="submit" className="btn max-w-xs" value="Create Ticket" />
      </form>
    </div>
  );
};

export default TicketForm;
