// File: src/App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Toastify from 'toastify-js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'toastify-js/src/toastify.css';
import './App.css';

import Patient from './components/Patient';
import Templates from './components/Templates';
import Schedules from './components/Schedules';
import Runs from './components/Runs';
import Logs from './components/Logs';
import NDAForm from './components/NDAForm';

function App() {
  const [clinics, setClinics] = useState([]);
  const [selectedClinicId, setSelectedClinicId] = useState('');
  const [notificationType, setNotificationType] = useState('Text');
  const [activeTab, setActiveTab] = useState('Patients');
  const [showNDA, setShowNDA] = useState(false);

  useEffect(() => {
    fetchClinics();
  }, []);

  const fetchClinics = async () => {
    try {
      const response = await axios.get('/api/clinics');
      setClinics(response.data.clinics || []);
    } catch (err) {
      showPopup('Failed to fetch clinics: ' + err.message);
    }
  };

  const assignClinic = async (clinicId) => {
    if (!clinicId) return;
    setSelectedClinicId(clinicId);
    try {
      await axios.post('/api/assign-clinic', { clinicId });
      showPopup('Clinic assigned successfully');
    } catch (err) {
      showPopup('Failed to assign clinic: ' + err.message);
    }
  };

  const showPopup = (message) => {
    Toastify({
      text: message,
      duration: 4000,
      gravity: 'top',
      position: 'right',
      style: {
        background: '#006d77',
        borderRadius: '10px',
        color: 'white',
        fontSize: '0.95rem'
      },
    }).showToast();
  };

  const NDAFormHandler = () => {
    setShowNDA(true);
  };

  return (
    <div className="container py-4">
   <button
  className="btn btn-teal mb-3"
  onClick={() => window.open('/nda-form', '_blank')}
>
  Submit Form
</button>

      {showNDA && <NDAForm />}

      <nav className="d-flex justify-content-between align-items-center bg-white rounded shadow p-3 mb-4">
        <select
          className="form-select w-auto"
          value={selectedClinicId}
          onChange={(e) => assignClinic(e.target.value)}
        >
          <option value="">Select Clinic</option>
          {clinics.map((clinic) => (
            <option key={clinic.id} value={clinic.id}>{clinic.name}</option>
          ))}
        </select>

        <select
          className="form-select w-auto"
          value={notificationType}
          onChange={(e) => setNotificationType(e.target.value)}
        >
          <option value="Text">Text</option>
          <option value="Email">Email</option>
        </select>
      </nav>

      <h2 className="fw-bold mb-4" style={{ color: 'black' }}>
        Notification Center
      </h2>

      <ul className="nav nav-tabs mb-3">
        {['Patients', 'Templates', 'Schedules', 'Runs', 'Logs'].map((tab) => (
          <li className="nav-item" key={tab}>
            <button
              className={`nav-link ${activeTab === tab ? 'active' : ''}`}
              type="button"
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>

      {activeTab === 'Patients' && <Patient />}
      {activeTab === 'Templates' && <Templates />}
      {activeTab === 'Schedules' && <Schedules />}
      {activeTab === 'Runs' && <Runs />}
      {activeTab === 'Logs' && <Logs />}
    </div>
  );
}

export default App;
