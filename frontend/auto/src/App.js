import logo from "./icon_header.png";
import React, { useState } from 'react';
import './App.css';

function App() {
  const [csvFile, setCsvFile] = useState(null);
  const [locales, setLocales] = useState("");
  const [addedBy, setAddedBy] = useState("");
  const [ticket, setTicket] = useState("");
  const [status, setStatus] = useState("");

  const EXCEL_TEMPLATE_URL = ProcessingInstruction.env.PUBLIC_URL + '/template.xlsx';

  const handleCsvFileChange = (event) => {
    setCsvFile(event.target.files[0]);
  }

  const handleLocalesChange = (event) => {
    setLocales(event.target.value);
  };

  const handleAddedByChange = (event) => {
    setAddedBy(event.target.value);
  };

  const handleTicketChange = (event) => {
    setTicket(event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const readFileAsText = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => resolve(e.target.result);
      reader.onerror = (e) => reject(e);
      reader.readAsText(file);
    });
  };

  const parseSingleColumnCsv = (csvText) => {
    const lines = csvText.trim().split('\n');
    return lines.filter(line => line.trim() !== '').map(line => line.trim());
  }



  return (
    <div className="App">
      <header className="App-header">
        <p className="p_header">Hello Amazonian!</p>
        <img className="logo_header" src={logo} />
      </header>
      <div className="App-subtitle">
        <p>
          This App was created to ease the manual task of receiving MOB new
          editorials and submit them in the ADS Tracker.
        </p>
      </div>
      <div>
        <p>
          Now, instead of putting all the editorials in four different trackers
          which takes so long, you can just submit the initial MOB spreadsheet,
          answer some questions and download your new ADS tracker totally ready
          to be shared.
        </p>
      </div>
      <hr />
      <form onSubmit={handleSubmit} className="form-section">
        <div>
          <label htmlFor="localesSelect">Choose a locale:</label>
          <select
            id="localesSelect"
            value={locales}
            onChange={handleLocalesChange}
            className="form-select"
            required
          >
            <option value="">Choose a Locale</option>
            <option value="es_MX">es_MX</option>
            <option value="es_US">es_US</option>
            <option value="pt_BR">pt_BR</option>
          </select>
        </div>
        <div>
          <label htmlFor="addedByInput">Who are you?!</label>
          <input
            type="text"
            id="addedByInput"
            value={addedBy}
            onChange={handleAddedByChange}
            placeholder="alias please :)"
            className="form-input"
            required
          />
        </div>
        <div>
          <label htmlFor="ticketLinkInput">Ticket please!</label>
          <input
            type="url"
            id="ticketLinkInput"
            value={ticket}
            onChange={handleTicketChange}
            placeholder="just the url"
            className="form-input"
            required
          />
        </div>
        <div>
          <label htmlFor="statusSelect">What's the status:</label>
          <select
            id="statusSelect"
            value={status}
            onChange={handleStatusChange}
            className="form-select"
            required
          >
            <option value="">Choose Status</option>
            <option value="to_be_Implemented">to_be_Implemented</option>
            <option value="Reviewed">Reviewed</option>
          </select>
        </div>
        <button type="submit" className="submit-button">Sumbit answers</button>
      </form>
    </div>
  );
}

export default App;
