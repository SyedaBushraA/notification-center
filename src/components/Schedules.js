// File: src/components/Schedules.js
import React, { useState } from 'react';

const Schedules = () => {
  const [search, setSearch] = useState('');

  return (
    <div className="card p-4">
      <h5 className="fw-semibold mb-3">Schedules</h5>

      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search schedules..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="mb-3 d-flex flex-wrap gap-2">
        <button className="btn btn-teal">New Scheduler</button>
        <button className="btn btn-outline-teal">Run Now</button>
        <button className="btn btn-orange">Delete Selected</button>
      </div>

      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th scope="col">
                <input type="checkbox" /> Select All
              </th>
              <th scope="col">Name</th>
              <th scope="col">Enable</th>
              <th scope="col">Cron Expression</th>
              <th scope="col">Description</th>
              <th scope="col">Modified At</th>
              <th scope="col">Modified By</th>
            </tr>
          </thead>
          <tbody>
            {/* Placeholder Row */}
            <tr>
              <td colSpan="7" className="text-center text-muted py-4">
                No data available.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Schedules;
