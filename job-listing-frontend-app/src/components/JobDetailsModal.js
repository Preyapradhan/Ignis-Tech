import React from "react";

const JobDetailsModal = ({ job, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-11/12 md:w-2/3 lg:w-1/2">
        <button
          className="absolute top-2 right-4 text-gray-600 text-lg"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">{job.title}</h2>
        <p className="text-gray-700 mb-2">Company: {job.company}</p>
        <p className="text-gray-700 mb-2">Location: {job.location}</p>
        <p className="text-gray-700 mb-2">Type: {job.type}</p>
        <p className="text-gray-700 mb-2">Salary: {job.salary}</p>
        <p className="text-gray-600">{job.description}</p>
      </div>
    </div>
  );
};

export default JobDetailsModal;
