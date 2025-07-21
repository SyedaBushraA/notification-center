import React, { useState } from 'react';

function AppointmentSearch() {
  const [dateRange, setDateRange] = useState('');
  const [appointmentStatus, setAppointmentStatus] = useState('All');
  const [appointmentType, setAppointmentType] = useState('ALL');
  const [patientType, setPatientType] = useState('ALL');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      dateRange,
      appointmentStatus,
      appointmentType,
      patientType,
    });
  };

  return (
    <form className="row g-3" onSubmit={handleSubmit}>
      <div className="col-md-6">
        <label className="form-label fw-semibold">Date Range *</label>
        <input
          type="text"
          className="form-control"
          placeholder="Select date range"
          value={dateRange}
          onChange={(e) => setDateRange(e.target.value)}
          required
        />
      </div>

      <div className="col-md-6">
        <label className="form-label fw-semibold">Appointment Status</label>
        <input
          type="text"
          className="form-control"
          placeholder="All"
          value={appointmentStatus}
          onChange={(e) => setAppointmentStatus(e.target.value)}
        />
      </div>

      <div className="col-md-6">
        <label className="form-label fw-semibold">Appointment Type</label>
        <input
          type="text"
          className="form-control"
          placeholder="ALL"
          value={appointmentType}
          onChange={(e) => setAppointmentType(e.target.value)}
        />
      </div>

      <div className="col-md-6">
        <label className="form-label fw-semibold">Patient Type</label>
        <input
          type="text"
          className="form-control"
          placeholder="ALL"
          value={patientType}
          onChange={(e) => setPatientType(e.target.value)}
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

export default AppointmentSearch;
