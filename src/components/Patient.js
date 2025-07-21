// File: src/components/Patient.js
import React, { useState } from 'react';
import AppointmentSearch from './AppointmentSearch';
import QuerySearch from './QuerySearch';

const Patient = () => {
  const [activeSearch, setActiveSearch] = useState('patient');

  return (
    <div className="card p-4">
      <h5 className="fw-semibold mb-3">Send Notifications</h5>
      <div className="btn-group mb-4 patient-btn-group" role="group">
        <button
          className={`btn patient-btn ${activeSearch === 'patient' ? 'active' : ''}`}
          onClick={() => setActiveSearch('patient')}
        >
          Patient Search
        </button>
        <button
          className={`btn patient-btn ${activeSearch === 'appointment' ? 'active' : ''}`}
          onClick={() => setActiveSearch('appointment')}
        >
          Appointment Search
        </button>
        <button
          className={`btn patient-btn ${activeSearch === 'query' ? 'active' : ''}`}
          onClick={() => setActiveSearch('query')}
        >
          Query Search
        </button>
      </div>

      {activeSearch === 'patient' && (
        <form className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Search Field</label>
            <input type="text" className="form-control" placeholder="Last Name" />
          </div>
          <div className="col-md-6">
            <label className="form-label">Enter search value</label>
            <input type="text" className="form-control" placeholder="Enter search value" />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">Search</button>
          </div>
        </form>
      )}

      {activeSearch === 'appointment' && <AppointmentSearch />}
      {activeSearch === 'query' && <QuerySearch />}
    </div>
  );
};

export default Patient;