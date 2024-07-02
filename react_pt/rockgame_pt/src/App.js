import "./App.css";
import "./HandIcon.css";
import HandIcon from "./HandIcon";
import reset from "./assets/ic-reset.svg";
import HandButton from "./HandButton";

function App() {

  const handButtonClick = (value) => {
    
  }
  return (
    <div className="App">
      <h1 className="App-heading">가위바위보</h1>
      <img className="App-reset" src={reset} />
      <div className="App-scores">
        <div className="Score">
          <div className="Score-num">0</div>
          <div className="Scroe-name">나</div>
        </div>
        <div className="App-versus">:</div>
        <div className="Score">
          <div className="Score-num">0</div>
          <div className="Score-name">상대</div>
        </div>
      </div>
      <div className="Box App-box">
        {/* 가위바위보 내는곳 */}
        <div className="App-hands">
          <div className="Hand-icon">
            <HandIcon />
          </div>
          <div className="App-versus">VS</div>
          <div className="Hand-icon">
            <HandIcon />
          </div>
        </div>
        {/* 배점 */}
        <div className="App-bet">
          <span>배점</span>
          <input type="number" min={1} max={9} />
          <span>배</span>
        </div>
        {/* 기록 */}
        <div className="App-history">
          <h2>승부기록</h2>
          <p>승리, 패배, 무승부</p>
        </div>
      </div>
      <div>
        <HandButton value="rock" onClick={HandButtonClick} />
        <HandButton value="scissor" onClick={HandButtonClick} />
        <HandButton value="paper" onClick={HandButtonClick} />
      </div>
    </div>
  );
}

export default App;
