import React from "react";

const JobCard = ({ job, onClick }) => {
  return (
    <div
      className="bg-white shadow-md rounded-md p-4 cursor-pointer hover:shadow-lg transition"
      onClick={onClick}
    >
      <h2 className="text-xl font-bold mb-2">{job.title}</h2>
      <p className="text-gray-600">{job.company}</p>
      <p className="text-gray-500">{job.location}</p>
      <p className="text-gray-800 font-semibold">{job.salary}</p>
      <p className="text-gray-400 text-sm">{job.posted}</p>
    </div>
  );
};

export default JobCard;
