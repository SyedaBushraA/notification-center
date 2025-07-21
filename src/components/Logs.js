// File: src/components/Logs.js
import React, { useState } from 'react';

const Logs = () => {
  const [search, setSearch] = useState('');

  return (
    <div className="card p-4">
      <h5 className="fw-semibold mb-3">Logs</h5>

      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search logs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th>
                <input type="checkbox" /> Select All
              </th>
              <th>Log Type</th>
              <th>Entity</th>
              <th>Status</th>
              <th>Summary</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="6" className="text-center text-muted py-4">
                No log entries found.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Logs;
