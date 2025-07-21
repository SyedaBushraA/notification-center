// File: src/components/Runs.js
import React, { useState } from 'react';
 
const Runs = () => {
  const [search, setSearch] = useState('');

  return (
    <div className="card p-4">
      <h5 className="fw-semibold mb-3">Runs</h5>

      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search runs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <button className="btn btn-teal">Re Run</button>
      </div>

      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th>
                <input type="checkbox" /> Select All
              </th>
              <th>Scheduler Name</th>
              <th>Status</th>
              <th>Runtime (seconds)</th>
              <th>Summary</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="6" className="text-center text-muted py-4">
                No data available.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Runs;
