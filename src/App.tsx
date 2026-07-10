function App() {
  return (
    <div className="app">

      <header className="header">
        <h1>VINDEX</h1>

        <div className="status">
          🟢 Idle
        </div>

        <button>
          Restart
        </button>
      </header>


      <main className="dashboard">

        <section className="panel left-panel">
          <h2>Patient Information</h2>

          <p>Status: --</p>
          <p>Age: --</p>
          <p>Sex: --</p>
          <p>Heart Rate: --</p>
          <p>Blood Pressure: --</p>
          <p>SpO₂: --</p>
          <p>Conscious: --</p>

          <hr />

          <h2>Patient Medical Issue</h2>

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

        </section>


        <section className="map">
          <h2>MAP AREA</h2>
        </section>


        <section className="panel right-panel">

          <h2>Navigation</h2>

          <p>ETA: --</p>
          <p>Distance: --</p>
          <p>Next Turn: --</p>

          <hr />

          <button>
            Start Simulation
          </button>

        </section>


      </main>

    </div>
  );
}

export default App;