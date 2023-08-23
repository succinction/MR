import logo from './aaappl.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
      <p className="title">
        Portland&nbsp;Mac&nbsp;Repair
        <br />
        <a href="tel:+5038756345">(503) 875-6345</a>
      </p>
      <p className="subtitle"><i>Let me help you today...</i></p>
      <p className="subtitle">
        Computer Repair Service
      </p>
      <p className="services">
        Tablet&nbsp;repair &nbsp;  &nbsp;
        Data&nbsp;Retrieval &nbsp;  &nbsp;
        Hard&nbsp;Drive&nbsp;Replacement &nbsp;  &nbsp;
        Liquid&nbsp;Damage &nbsp;  &nbsp;
        Mac&nbsp;Repair &nbsp;  &nbsp;
        Macbook&nbsp;Pro &nbsp;  &nbsp;
        New&nbsp;Computer &nbsp;  &nbsp;
        Screen&nbsp;Replacement &nbsp;  &nbsp;
        Virus&nbsp;Removal &nbsp;  &nbsp;
        Water&nbsp;Damage &nbsp;  &nbsp;
      </p>
      <img src={logo} className="App-logo-x" alt="logo" />
      <div>
        <p className="footer">
          Copyright © {new Date().getFullYear()} Portland Mac Repair, All rights reserved.
        </p>
      </div>

      </div>
    </div>
  );
}

export default App;
