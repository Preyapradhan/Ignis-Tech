import React, { useState } from "react";
import JobCard from "./JobCard";
import JobDetailsModal from "./JobDetailsModal";

const JobList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("");
  const [filterLocation, setFilterLocation] = useState("");
  const [selectedJob, setSelectedJob] = useState(null);

  // Demo job data
  const demoJobs = [
    {
      id: 1,
      title: "Software Engineer",
      company: "TechCorp",
      location: "Remote",
      type: "Full-time",
      salary: "$100,000 - $120,000",
      posted: "2 days ago",
      description: "Develop scalable web applications using modern frameworks.",
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "Designify",
      location: "Remote",
      type: "Part-time",
      salary: "$40/hour",
      posted: "1 week ago",
      description: "Create user-friendly designs and implement them using React.",
    },
    {
      id: 3,
      title: "Project Manager",
      company: "BuildMaster Inc.",
      location: "On-site",
      type: "Contract",
      salary: "$70/hour",
      posted: "3 days ago",
      description: "Coordinate projects and manage team deliverables effectively.",
    },
    {
      id: 4,
      title: "Data Scientist",
      company: "DataPros",
      location: "Remote",
      type: "Full-time",
      salary: "$110,000 - $140,000",
      posted: "4 days ago",
      description: "Analyze large datasets and provide actionable insights.",
    },
    {
      id: 5,
      title: "UI/UX Designer",
      company: "CreativeWorks",
      location: "On-site",
      type: "Part-time",
      salary: "$50/hour",
      posted: "1 day ago",
      description: "Design intuitive interfaces for mobile and web applications.",
    },
  ];

  // Filter jobs dynamically
  const filteredJobs = demoJobs.filter((job) => {
    return (
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (filterType ? job.type === filterType : true) &&
      (filterLocation ? job.location === filterLocation : true)
    );
  });

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Job Listings</h1>

      {/* Filters */}
      <div className="bg-white shadow-md rounded-md p-4 mb-6 flex flex-wrap gap-4 justify-between items-center">
        <input
          type="text"
          placeholder="Search Jobs"
          className="border border-gray-300 rounded-md p-2 w-full md:w-1/4"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select
          className="border border-gray-300 rounded-md p-2 w-full md:w-1/4"
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option value="">All Job Types</option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Contract">Contract</option>
        </select>
        <select
          className="border border-gray-300 rounded-md p-2 w-full md:w-1/4"
          value={filterLocation}
          onChange={(e) => setFilterLocation(e.target.value)}
        >
          <option value="">All Locations</option>
          <option value="Remote">Remote</option>
          <option value="On-site">On-site</option>
        </select>
      </div>

      {/* Job Cards */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} onClick={() => setSelectedJob(job)} />
          ))
        ) : (
          <p className="text-gray-600 col-span-full text-center">
            No jobs found. Try adjusting your filters.
          </p>
        )}
      </div>

      {/* Job Details Modal */}
      {selectedJob && (
        <JobDetailsModal job={selectedJob} onClose={() => setSelectedJob(null)} />
      )}
    </div>
  );
};

export default JobList;
