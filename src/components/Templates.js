import React, { useState } from 'react';

function Templates() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectAll, setSelectAll] = useState(false);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
  };

  const handleNewTemplate = () => {
    alert('New Template clicked');
  };

  const handleDeleteSelected = () => {
    alert('Delete Selected clicked');
  };

  return (
    <div className="card p-4">
      <h5 className="fw-semibold mb-3">Templates</h5>

      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search templates..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      <div className="d-flex gap-3 mb-3">
        <button className="btn btn-teal" onClick={handleNewTemplate}>
          New Template
        </button>
        <button className="btn btn-danger" onClick={handleDeleteSelected}>
          Delete Selected
        </button>
      </div>

      <div className="table-responsive">
        <table className="table table-bordered">
          <thead className="bg-dark text-white">
            <tr>
              <th>
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={handleSelectAll}
                />{' '}
                Select All
              </th>
              <th>Template Name</th>
              <th>Type</th>
              <th>Template</th>
              <th>Modified At</th>
              <th>Modified By</th>
            </tr>
          </thead>
          <tbody>
            {/* Dynamic rows can go here */}
            <tr>
              <td colSpan="6" className="text-center text-muted">
                No templates found
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Templates;
