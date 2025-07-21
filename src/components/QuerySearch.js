import React, { useState } from 'react';

function QuerySearch() {
  const [template, setTemplate] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      template,
      description,
    });
  };

  return (
    <form className="row g-3" onSubmit={handleSubmit}>
      <div className="col-md-6">
        <label className="form-label fw-semibold">Query Template</label>
        <input
          type="text"
          className="form-control"
          placeholder="Select a template"
          value={template}
          onChange={(e) => setTemplate(e.target.value)}
        />
      </div>

      <div className="col-md-6">
        <label className="form-label fw-semibold">Description</label>
        <textarea
          className="form-control"
          placeholder="Select a query template to populate content"
          rows="3"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="col-12 mt-3">
        <button type="submit" className="btn btn-primary px-4 py-2">
          Search
        </button>
      </div>
    </form>
  );
}

export default QuerySearch;
