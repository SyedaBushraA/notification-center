// File: src/components/NDAForm.js
import React, { useRef, useState } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

const NDAForm = () => {
  const sigCanvasRef = useRef();

  // State declarations
  const [salutation, setSalutation] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [degree, setDegree] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [geoPrimary, setGeoPrimary] = useState('');
  const [geoSecondary, setGeoSecondary] = useState('');
  const [geoTertiary, setGeoTertiary] = useState('');
  const [licenseNumber, setLicenseNumber] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [selectedStates, setSelectedStates] = useState([]);

  // Handle checkbox updates
  const handleLicensedStateChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedStates([...selectedStates, value]);
    } else {
      setSelectedStates(selectedStates.filter((s) => s !== value));
    }
  };

  // Submit form and save as Excel
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      Salutation: salutation,
      FirstName: firstName,
      LastName: lastName,
      Degree: degree,
      Email: email,
      Phone: phone,
      City: city,
      State: state,
      Zip: zip,
      LicensedStates: selectedStates.join(', '),
      GeoPrimary: geoPrimary,
      GeoSecondary: geoSecondary,
      GeoTertiary: geoTertiary,
      LicenseNumber: licenseNumber,
      Agreed: agreedToTerms ? 'Yes' : 'No',
      Timestamp: new Date().toLocaleString()
    };

    const worksheet = XLSX.utils.json_to_sheet([data]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'NDA_Submission');
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(blob, `NDA_Form_${Date.now()}.xlsx`);
  };

  return (
    <div className="nda-container">
      <div className="nda-header">
        <h1>Non-Disclosure Agreement Form</h1>
        <p>
          If you would prefer to mail or fax the form below, please{' '}
          <a href="/nda-download.pdf" target="_blank" rel="noopener noreferrer">
            click here
          </a>{' '}
          to download it.
        </p>
      </div>

      <div className="nda-card">
        <img
          src="https://dentalpracticetransitions.henryschein.com/wp-content/uploads/2025/04/dpt-logo.png"
          alt="Henry Schein"
          className="nda-logo"
        />
        <h5 className="nda-subtitle">
          Please read the following Confidentiality Agreement. By completing the form below and
          clicking "Agree and Submit", you agree to the terms and conditions of the Confidentiality Agreement.
        </h5>

        <div className="nda-content">
          <div className="mb-4">
  <h5 className="fw-bold mb-3">
    Please read the following Confidentiality Agreement. By completing the form below and clicking "Agree and Submit", you agree to the terms and conditions of the Confidentiality Agreement.
  </h5>
  <div className="border p-3 bg-white rounded" style={{ lineHeight: "1.7" }}>
    <p>
      This <strong>CONFIDENTIALITY AGREEMENT</strong> ("Agreement") is entered into as of the date of submission set forth below ("Submission Date"), by and between the undersigned (the "Receiving Party") and the Henry Schein Dental Practice Transitions entity set forth immediately below ("HSDPT"). If any one of the practice or associateship opportunities subject of this Agreement is or will be found in (or is reasonably expected to be found in) California, the HSDPT party to this Agreement shall be Henry Schein DPT, Inc., a Wisconsin corporation. Otherwise, the HSDPT party to this Agreement shall be Henry Schein Financial Services, LLC, a Delaware limited liability company.
    </p>
    <ol>
      <li>
        <strong><u>General</u>.</strong> In connection with the evaluation or pursuit of a potential or existing business transaction between the parties regarding practice purchase or sale opportunities (including identities of potential purchasers or sellers), potential associate candidates, and/or associateship opportunities, each as may be presented by HSDPT (each of the foregoing, and collectively, the "Permitted Use"), HSDPT may from time to time disclose to the Receiving Party (either directly or through one or more third parties) certain Confidential Information as defined below.
      </li>
      <li className="mt-2">
        <strong><u>Confidential Information</u>.</strong> "Confidential Information" means information of any type or form (whether visual, written, oral, electronic, photographic, or otherwise) disclosed in connection with the Permitted Use (either intentionally or unintentionally) by HSDPT or one of its affiliates or Representatives (as defined below) or a third party to the Receiving Party or one of its affiliates or Representatives, regardless of whether such information is marked or indicated as being confidential.
        <br />
        <br />
        Confidential Information includes, but is not limited to, all information of a financial, business, marketing, sales, operational, organizational, personnel, patient, or legal nature. Confidential Information shall not, however, include any information that, as shown by competent proof:
        <ul className="mt-2">
          <li>(i) is publicly known or generally available in the public domain prior to the time of disclosure by HSDPT to the Receiving Party,</li>
          <li>(ii) becomes publicly known or generally available in the public domain after disclosure by HSDPT to the Receiving Party through no action or inaction of the Receiving Party,</li>
          <li>(iii) is already in the possession of the Receiving Party at the time of disclosure by HSDPT as shown by the Receiving Party’s written or electronic records existing immediately prior to the time of such disclosure,</li>
          <li>(iv) is obtained by the Receiving Party from a third party that may lawfully disclose such information without breaching any obligation of confidentiality applicable to such third party or</li>
          <li>(v) is independently developed by the Receiving Party without use of or reference to HSDPT’s Confidential Information (as shown by the Receiving Party’s independent contemporaneous written records).</li>
        </ul>
        
      </li>
      <ol start={3}>
  <li className="mt-2">
    <strong><u>Non-disclosure; Non-use</u>.</strong> Except as expressly permitted by this Agreement otherwise, the Receiving Party agrees to and shall not disclose or use any Confidential Information for any purpose other than in connection with the Permitted Use. Notwithstanding the foregoing, the Receiving Party may disclose Confidential Information to its employees, officers, directors, agents, and advisors (including attorneys, accountants, consultants, and financial advisors) (collectively, "Representatives") to whom such disclosure is reasonably necessary in furtherance of the Permitted Use. The Receiving Party shall take all appropriate action to ensure that its Representatives comply with all obligations under this Agreement as if such persons or entities had been parties to this Agreement.
  </li>
  <li className="mt-2">
    <strong><u>Maintenance of Confidentiality</u>.</strong> The Receiving Party shall protect and maintain the secrecy of the Confidential Information of HSDPT using measures at least as protective as those it takes to protect its own confidential information, but in any event using at least reasonable measures. The Receiving Party acknowledges that both (i) the fact that the parties are discussing a potential or existing business transaction and (ii) the status and content of such discussions are confidential, and shall not be disclosed by the Receiving Party or its Representatives to any third party without the prior written consent of HSDPT (except that the Receiving Party may disclose such information to the same extent and subject to the same limitations hereunder that it may disclose Confidential Information hereunder).
  </li>
  <li className="mt-2">
    <strong><u>No Obligation/Warranty</u>.</strong> Nothing in this Agreement shall obligate either party to proceed with any transaction or other business activities between them or to provide or disclose any Confidential Information, and each party reserves the right in its sole discretion to terminate the discussions or other activities contemplated by this Agreement or the Permitted Use. All Confidential Information is provided "as is," and HSDPT makes no representations or warranties (either express or implied) of any kind with respect to any Confidential Information. HSDPT shall have no liability to the Receiving Party relating to or resulting from any errors, inaccuracies, or omissions in the Confidential Information. Receiving Party has the sole responsibility to conduct its own due diligence prior to any transaction in connection with the Permitted Use.
  </li>
  <li className="mt-2">
    <strong><u>Owner's Permission to Contact Staff</u>.</strong> If HSDPT in connection with a Permitted Use refers the Receiving Party to an owner of a professional practice, the Receiving Party shall not contact any staff member of such practice without such owner's express written permission.
  </li>
  <li className="mt-2">
    <strong><u>Return of Materials</u>.</strong> All documents and other tangible objects (including electronic media) containing or representing Confidential Information that has been disclosed to the Receiving Party, and copies and summaries thereof and reports or other works derived therefrom, shall be and remain the property of HSDPT and shall, at HSDPT's written request, be promptly returned to HSDPT.
  </li>
  <li className="mt-2">
    <strong><u>Term</u>.</strong> This Agreement shall govern all communications between the parties, and the obligations hereunder with respect to Confidential Information shall survive for so long as such information is considered Confidential Information hereunder.
  </li>
  <li className="mt-2">
    <strong><u>Governing Law</u>.</strong> This Agreement shall be governed by the laws of the state of New York without reference to conflict of laws principles.
  </li>
  <li className="mt-2">
    <strong><u>Third-Party Beneficiary</u>.</strong> The professional practice whose Confidential Information is disclosed pursuant to the terms of this Agreement is a third-party beneficiary of this Agreement and shall have the right to enforce it.
  </li>
  <li className="mt-2">
    <strong><u>Customary Announcement</u>.</strong> Upon completion of a Permitted Use transaction with the Receiving Party, HSDPT is permitted to print, publish, and/or mail its usual and customary announcement of the transaction.
  </li>
  <li className="mt-2">
    <strong><u>No Joint Venture</u>.</strong> Nothing in this Agreement shall be construed to create, constitute, give effect to, or otherwise imply a joint venture, partnership, agency, or employment relationship of any kind between the parties.
  </li>
  <li className="mt-2">
    <strong><u>Waiver</u>.</strong> No failure or delay by HSDPT in exercising any right, power or privilege hereunder shall operate as a waiver thereof, nor shall any single or partial exercise thereof preclude any other or further exercise thereof or the exercise of any other right, power or privilege hereunder.
  </li>
  <li className="mt-2">
    <strong><u>Indemnification</u>.</strong> The Receiving Party shall indemnify and hold HSDPT harmless from all third-party claims, demands, liabilities, losses, costs, damages, and expenses (including reasonable attorney's fees) arising out of any disclosure or use of the Confidential Information by the Receiving Party.
  </li>
  <li className="mt-2">
    <strong><u>Remedies.</u>.</strong> The Receiving Party acknowledges that HSDPT will not be adequately compensated by money damages in the event of the Receiving Party's breach of any of the provisions of this Agreement, and that HSDPT, in addition to any other right or available remedy, is entitled to an injunction or other equitable relief restraining such breach or any threatened breach and to specific performance of any provision of this Agreement, without the necessity of posting bond.
  </li>
</ol>

    </ol>
  </div>
</div>

          <ol>
          </ol>

       <form className="nda-form" onSubmit={handleSubmit}>
        {/* Your header and NDA agreement text here */}

        <div className="row g-3">
          <div className="col-md-3">
            <label className="form-label">Salutation*</label>
            <select className="form-select" value={salutation} onChange={(e) => setSalutation(e.target.value)}>
              <option value="">Select</option>
              <option>Dr.</option>
              <option>Mr.</option>
              <option>Ms.</option>
            </select>
          </div>

          <div className="col-md-3">
            <label className="form-label">First Name*</label>
            <input type="text" className="form-control" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          </div>

          <div className="col-md-3">
            <label className="form-label">Last Name*</label>
            <input type="text" className="form-control" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </div>

          <div className="col-md-3">
            <label className="form-label">Degree*</label>
            <input type="text" className="form-control" value={degree} onChange={(e) => setDegree(e.target.value)} />
          </div>

          <div className="col-md-6">
            <label className="form-label">Email*</label>
            <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className="col-md-6">
            <label className="form-label">Phone*</label>
            <input type="text" className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>

          <div className="col-md-4">
            <label className="form-label">City*</label>
            <input type="text" className="form-control" value={city} onChange={(e) => setCity(e.target.value)} />
          </div>

          <div className="col-md-4">
            <label className="form-label">State*</label>
            <input type="text" className="form-control" value={state} onChange={(e) => setState(e.target.value)} />
          </div>

          <div className="col-md-4">
            <label className="form-label">Zip*</label>
            <input type="text" className="form-control" value={zip} onChange={(e) => setZip(e.target.value)} />
          </div>

        </div>
      </form>
   
<div className="mb-4">
  <label className="form-label fw-bold">State(s) of Preference<span className="text-danger">*</span></label>
  <div className="row row-cols-6 g-2">
    {[
      "AK", "AL", "AR", "AZ", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "HI",
      "IA", "ID", "IL", "IN", "KS", "KY", "LA", "MA", "MD", "ME", "MI", "MN",
      "MO", "MS", "MT", "NC", "ND", "NE", "NH", "NJ", "NM", "NV", "NY", "OH",
      "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VA", "VT", "WA",
      "WI", "WV", "WY", "AB", "BC", "MB", "NB", "NL", "NT", "NS", "NU", "ON",
      "PE", "QC", "SK", "YT"
    ].map((stateCode) => (
      <div key={stateCode} className="form-check d-flex align-items-center gap-1">
        <input className="form-check-input" type="checkbox" id={`state-${stateCode}`} />
        <label className="form-check-label" htmlFor={`state-${stateCode}`}>{stateCode}</label>
      </div>
    ))}
  </div>
</div>

<div className="row mb-3">
  <div className="col-md-4">
    <label className="form-label fw-bold">Geographic Area(s) of Interest (Primary Interest)<span className="text-danger">*</span></label>
    <input type="text" className="form-control" placeholder="Enter primary area of interest" />
  </div>
  <div className="col-md-4">
    <label className="form-label fw-bold">Geographic Area(s) of Interest (Secondary Interest)<span className="text-danger">*</span></label>
    <input type="text" className="form-control" placeholder="Enter secondary area of interest" />
  </div>
  <div className="col-md-4">
    <label className="form-label fw-bold">Geographic Area(s) of Interest (Tertiary Interest)<span className="text-danger">*</span></label>
    <input type="text" className="form-control" placeholder="Enter tertiary area of interest" />
  </div>
</div>
<div className="mb-4">
  <label className="form-label fw-bold">Licensed in States / Provinces<span className="text-danger">*</span></label>
  <div className="row">
    {[
      "AK", "AL", "AP", "AR", "AS", "AZ", "CA", "CO", "CT", "DC", "DE", "FL",
      "FM", "GA", "GU", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA", "MA",
      "MD", "ME", "MH", "MI", "MN", "MO", "MP", "MS", "MT", "NC", "ND", "NE",
      "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "PR", "PW", "RI",
      "SC", "SD", "TN", "TX", "UT", "VA", "VI", "VT", "WA", "WI", "WV", "WY",
      "AB", "BC", "MB", "NB", "NL", "NT", "NS", "NU", "ON", "PE", "QC", "SK", "YT"
    ].map((stateCode) => (
      <div key={stateCode} className="form-check form-check-inline" style={{ width: "70px" }}>
        <input className="form-check-input" type="checkbox" id={stateCode} name="licensedStates" value={stateCode} />
        <label className="form-check-label" htmlFor={stateCode}>{stateCode}</label>
      </div>
    ))}
  </div>
</div>

<div className="mb-3">
  <label className="form-label fw-bold">Primary Dental License Number</label>
  <input
    type="text"
    className="form-control"
    maxLength={24}
    placeholder="Enter your license number"
  />
  <small className="text-muted">0 of 24 max characters</small>
</div>
<div className="mb-4">
  <label className="form-label fw-bold">Agreement<span className="text-danger">*</span></label>
  <div className="border p-3 bg-white rounded">
    I understand that the information contained in this form and provided on the practice otherwise will be
    used by Henry Schein Dental Practice Transitions in the evaluation of my practice and that portions of
    it may be distributed to potential buyers of my practice after they have signed and submitted a
    confidentiality agreement. I also understand that this information may be used by financial institutions
    to extend credit to potential buyers of my practice. To the best of my knowledge, this information is
    true and correct and an accurate representation of my practice.
  </div>
  <div className="form-check mt-2">
    <input className="form-check-input" type="checkbox" id="agreeTerms" />
    <label className="form-check-label fw-bold" htmlFor="agreeTerms">
      I agree to the above terms
    </label>
    
  </div>
                <label className="form-label fw-bold">Signature<span className="text-danger">*</span></label>

</div>
            <div className="mb-4">
              <SignatureCanvas
                penColor="black"
                canvasProps={{ width: 500, height: 150, className: 'signature-canvas rounded border' }}
                ref={sigCanvasRef}
              />
            <div className="mt-2">
  <button
    type="button"
    className="btn btn-secondary btn-sm d-flex align-items-center gap-2"
    onClick={() => sigCanvasRef.current.clear()}
  >
    <i className="bi bi-arrow-clockwise"></i> {/* Bootstrap Icons */}
    Clear Signature
  </button>
</div>

            </div>

            <div className="mb-4 d-flex justify-content-center">
              <div
                style={{
                  border: "2px solid #ccc",
                  padding: "10px",
                  borderRadius: "6px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px"
                }}
              >
                <input type="checkbox" />
                <label className="mb-0">I'm not a robot</label>
                <img
                  src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                  alt="reCAPTCHA"
                  style={{ height: "30px" }}
                />
              </div>
            </div>

         
          <div className="col-12">
 <button
          type="submit"
          className="btn btn-primary mt-3 w-100"
          onClick={handleSubmit}
        >
          Submit
        </button>

</div>

      
        </div>
      </div>
    </div>
  );
};

export default NDAForm;