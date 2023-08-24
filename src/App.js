import logo from './aaappl.png';
import './App.css';

function App() {
  return (
    <div className="App">
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
        <img src={logo} className="App-logo" alt="logo" />

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
