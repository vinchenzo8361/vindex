import MapView from "./components/MapView";

function App() {
  return (
    <div className="app">

      {/* HEADER */}
      <header className="header">

        <div className="branding">
          <div className="logo">
            ★
          </div>

          <div>
            <h1>VINDEX</h1>
            <p>Emergency Response Simulator (Version 1)</p>
          </div>
        </div>


        <div className="sim-status">

          <div className="status-title">
            SIM STATUS
          </div>

          <div className="status-value">
            <span className="green-dot"></span>
            Idle
          </div>

        </div>


        <button className="restart-button">
          Restart
        </button>

      </header>



      {/* MAIN DASHBOARD */}
      <main className="dashboard">


        {/* LEFT PANEL */}
        <section className="panel left-panel">

          <h2>Patient Information</h2>

          <div className="info-row">
            <span>Status</span>
            <strong>--</strong>
          </div>

          <div className="info-row">
            <span>Age</span>
            <strong>--</strong>
          </div>

          <div className="info-row">
            <span>Sex</span>
            <strong>--</strong>
          </div>

          <div className="info-row">
            <span>Heart Rate</span>
            <strong>--</strong>
          </div>

          <div className="info-row">
            <span>Blood Pressure</span>
            <strong>--</strong>
          </div>

          <div className="info-row">
            <span>SpO₂</span>
            <strong>--</strong>
          </div>

          <div className="info-row">
            <span>Conscious</span>
            <strong>--</strong>
          </div>



          <h2>Patient Scenario</h2>

          <select>
            <option>Unconscious</option>
            <option>Broken Leg</option>
            <option>Stroke</option>
            <option>Heart Attack</option>
            <option>Punctured Lung</option>
            <option>Severe Bleeding</option>
            <option>Gunshot Wound</option>
            <option>Knife Wound</option>
            <option>Car Crash</option>
          </select>



          <h2>ECG Monitor</h2>

          <div className="ecg">

            <div className="ecg-line"></div>

            <div className="ecg-labels">
              <span>25 mm/s</span>
              <span>10 mm/mV</span>
              <span>Lead II</span>
            </div>

          </div>


        </section>





        {/* MAP */}
        <section className="map-panel">

          <MapView />

        </section>





        {/* RIGHT PANEL */}
        <section className="panel right-panel">


          <h2>Placement Mode</h2>

          <label>
            <input type="radio" defaultChecked />
            Incident Location
          </label>

          <br />

          <label>
            <input type="radio" />
            Ambulance Location
          </label>



          <h2>Navigation</h2>

          <div className="info-row">
            <span>Start</span>
            <strong>--</strong>
          </div>

          <div className="info-row">
            <span>Destination</span>
            <strong>--</strong>
          </div>

          <div className="info-row">
            <span>ETA</span>
            <strong>Waiting...</strong>
          </div>

          <div className="info-row">
            <span>Distance</span>
            <strong>--</strong>
          </div>



          <h2>Simulation Controls</h2>

          <button className="start-button">
            ▶ Start Simulation
          </button>

          <p className="helper">
            Place an incident location to begin
          </p>



          <h2>Hospital Information</h2>

          <p className="helper">
            Select a hospital marker to view information
          </p>


        </section>


      </main>

    </div>
  );
}


export default App;