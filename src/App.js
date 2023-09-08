import logo from './aaappl.png';
import './App.css';
import {useState} from 'react'

function App() {
  const [backgroundState, setBackgroundState] = useState(false);
  return (
    <div className="App">
      {backgroundState &&
      <div className="backwrap gradient">
        <div className="back-shapes">
          <span className="floating circle" style={{ top: '66.59856996935649%', left: '13.020833333333334%', animationDelay: '-0.9s' }}></span>
          <span className="floating triangle" style={{ top: '31.46067415730337%', left: '33.59375%', animationDelay: '-4.8s' }}></span>
          <span className="floating cross" style={{ top: '76.50663942798774%', left: '38.020833333333336%', animationDelay: '-4s' }}></span>
          <span className="floating square" style={{ top: '21.450459652706844%', left: '14.0625%', animationDelay: '-2.8s' }}></span>
          <span className="floating square" style={{ top: '58.12053115423902%', left: '56.770833333333336%', animationDelay: '-2.15s' }}></span>
          <span className="floating square" style={{ top: '8.682328907048008%', left: '72.70833333333333%', animationDelay: '-1.9s' }}></span>
          <span className="floating cross" style={{ top: '31.3585291113381%', left: '58.541666666666664%', animationDelay: '-0.65s' }}></span>
          <span className="floating cross" style={{ top: '69.96935648621042%', left: '81.45833333333333%', animationDelay: '-0.4s' }}></span>
          <span className="floating circle" style={{ top: '15.117466802860061%', left: '32.34375%', animationDelay: '-4.1s' }}></span>
          <span className="floating circle" style={{ top: '13.074565883554648%', left: '45.989583333333336%', animationDelay: '-3.65s' }}></span>
          <span className="floating cross" style={{ top: '55.87334014300306%', left: '27.135416666666668%', animationDelay: '-2.25s' }}></span>
          <span className="floating cross" style={{ top: '49.54034729315628%', left: '53.75%', animationDelay: '-2s' }}></span>
          <span className="floating cross" style={{ top: '34.62717058222676%', left: '49.635416666666664%', animationDelay: '-1.55s' }}></span>
          <span className="floating cross" style={{ top: '33.19713993871297%', left: '86.14583333333333%', animationDelay: '-0.95s' }}></span>
          <span className="floating square" style={{ top: '28.19203268641471%', left: '25.208333333333332%', animationDelay: '-4.45s' }}></span>
          <span className="floating circle" style={{ top: '39.7344228804903%', left: '10.833333333333334%', animationDelay: '-3.35s' }}></span>
          <span className="floating triangle" style={{ top: '77.83452502553627%', left: '24.427083333333332%', animationDelay: '-2.3s' }}></span>
          <span className="floating triangle" style={{ top: '2.860061287027579%', left: '47.864583333333336%', animationDelay: '-1.75s' }}></span>
          <span className="floating triangle" style={{ top: '71.3993871297242%', left: '66.45833333333333%', animationDelay: '-1.25s' }}></span>
          <span className="floating triangle" style={{ top: '31.256384065372828%', left: '76.92708333333333%', animationDelay: '-0.65s' }}></span>
          <span className="floating triangle" style={{ top: '46.47599591419816%', left: '38.90625%', animationDelay: '-0.35s' }}></span>
          <span className="floating cross" style={{ top: '3.4729315628192032%', left: '19.635416666666668%', animationDelay: '-4.3s' }}></span>
          <span className="floating cross" style={{ top: '3.575076608784474%', left: '6.25%', animationDelay: '-4.05s' }}></span>
          <span className="floating cross" style={{ top: '77.3237997957099%', left: '4.583333333333333%', animationDelay: '-3.75s' }}></span>
          <span className="floating cross" style={{ top: '0.9193054136874361%', left: '71.14583333333333%', animationDelay: '-3.3s' }}></span>
          <span className="floating square" style={{ top: '23.6976506639428%', left: '63.28125%', animationDelay: '-2.1s' }}></span>
          <span className="floating square" style={{ top: '81.30745658835546%', left: '45.15625%', animationDelay: '-1.75s' }}></span>
          <span className="floating square" style={{ top: '60.9805924412666%', left: '42.239583333333336%', animationDelay: '-1.45s' }}></span>
          <span className="floating square" style={{ top: '29.009193054136876%', left: '93.90625%', animationDelay: '-1.05s' }}></span>
          <span className="floating square" style={{ top: '52.093973442288046%', left: '68.90625%', animationDelay: '-0.7s' }}></span>
          <span className="floating square" style={{ top: '81.51174668028601%', left: '83.59375%', animationDelay: '-0.35s' }}></span>
          <span className="floating square" style={{ top: '11.542390194075587%', left: '91.51041666666667%', animationDelay: '-0.1s' }}></span>
        </div>
      </div>
      }
      <div className="App-header">
        <p className="title">
          <b>
            Portland&nbsp;Mac Repair
          </b>
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
        <p className="services"><i>Specializing in laptops earlier than 2015, and iMacs and MacBook Airs earlier than 2019.</i></p>
        <img onClick={()=>setBackgroundState(!backgroundState)} src={logo} className="App-logo" alt="logo" />
        <div className="reviews" >
          <div className="review"><i>
            "Ben is a consummate professional who puts care and thoughtfulness into his work, and really takes care of his clients. Top notch work at incredibly fair and honest pricing, no BS. <br /> It’s inconceivable that I’d take my Mac anywhere else!" ~ John B
          </i></div>
          <div className="review"><i>
            "The person you'll be dealing with at Portland Mac Repair is Ben.
            Ben is your friend. Ben is awesome." ~ Michael Brooks
          </i></div>
          <div className="review"><i>
            "Had an awesome experience with Ben! I brought my Mac in for repair in early December, and it was fixed quickly for a fair price." ~ B Scoggin
          </i></div>
          <div className="review"><i>
            "I needed a keyboard replaced for my Mac and a couple other things done while the computer was apart. He ordered the part as soon as
            I had dropped the computer off, estimated the completion time and cost accurately." ~ Mason Parker
          </i></div>
          <div className="review"><i>
            "Ben got my MacBook Pro 2010 up and running for me for so much less than the Apple store quoted. Very Happy!" ~ Michael Blackwell
          </i></div>
          <div className="review"><i>
            "Honest and knowledgeable. I reached out thinking I was in for a big expensive repair and instead I was given the solution,
            part to order and a link to DIY repair instructions by these guys and never charged a penny. They responded to my texts immediately and
            encouraged me to do the work myself. So impressed, I’d trust them to do the right thing and will use them from now on." ~ Lota LaMontagne
          </i></div>
        </div>
        <a href="tel:+5038756345">(503) 875-6345</a>
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
