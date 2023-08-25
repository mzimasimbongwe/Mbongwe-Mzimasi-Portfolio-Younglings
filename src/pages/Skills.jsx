
function App() {
  return (
    
    <div className="container">
        <h2 className="page-section__title container__title">
                Sk<span>ills</span>
            </h2>
            <br></br>
      <div className="card">
        <div className="percent" style={{ '--clr': '#04fc43', '--num': 85 }}>
          <div className="dot"></div>
          <svg>
            <circle cx="70" cy="70" r="70"></circle>
            <circle cx="70" cy="70" r="70"></circle>
          </svg>
          <div className="number">
            <h2>85<span>%</span></h2>
            <p>HTML</p>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="percent" style={{ '--clr': '#fee800', '--num': 75 }}>
          <div className="dot"></div>
          <svg>
            <circle cx="70" cy="70" r="70"></circle>
            <circle cx="70" cy="70" r="70"></circle>
          </svg>
          <div className="number">
            <h2>75<span>%</span></h2>
            <p>CSS</p>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="percent" style={{ '--clr': '#ff00be', '--num': 60 }}>
          <div className="dot"></div>
          <svg>
            <circle cx="70" cy="70" r="70"></circle>
            <circle cx="70" cy="70" r="70"></circle>
          </svg>
          <div className="number">
            <h2>60<span>%</span></h2>
            <p>JS</p>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="percent" style={{ '--clr': '#06ccff', '--num': 95 }}>
          <div className="dot"></div>
          <svg>
            <circle cx="70" cy="70" r="70"></circle>
            <circle cx="70" cy="70" r="70"></circle>
          </svg>
          <div className="number">
            <h2>95<span>%</span></h2>
            <p>Bootstrap</p>
          </div>
        </div>
      </div>
      <div className="credits">
        <a href="https://umitrock.com/" target="_blank" rel="noopener noreferrer">
          Designed by <img src="https://github.com/UmitRock/Animated-Action-Menu/blob/main/umit%20rock.png?raw=true" alt="" />
        </a>
      </div>
    </div>
  );
}

export default App;
