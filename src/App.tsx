import React from 'react';
import './App.css';
import EMAILQrCode from './components/EMAILQrCode';
import SMSQrCode from './components/SMSQrCode';
import URLQrCode from './components/URLQrCode';
import Header from './components/Header';



const App: React.FC = () => {
  return (
    <div className="Header">
      <div>
        <Header />
      </div>
      <div className="Container">
          <div className="Row1">
            <EMAILQrCode />
        </div>
        <div className="Row2">
          <SMSQrCode />
        </div>
        <div className="Row3">
          <URLQrCode />
        </div>
      </div>
    </div>
  );    
}



export default App;
