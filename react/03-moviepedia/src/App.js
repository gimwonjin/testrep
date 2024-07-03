import "./App.css";
import ReviesFrom from "./ReviewFrom";
import ReviewList from "./ReviewList";
import logoImg from "./assets/logo.png"
import { useEffect, useState } from "react";
import { getDatas } from "./firebase";
import mockItems from "./mock.json";
// import ticketImg from "./assets/ticket.png"

function AppSortButton({ children }) {
  return <button className="AppSortButton selected">{children}</button>;
}


function App() {
  const [items, setItems] = useState([]);

const handleLoad = async () => {
  const resultData = await getDatas("movie");
  console.log(resultData);
  setItems(resultData);
};

useEffect(() => {
  handleLoad();
}, []);
  return (
    <div className="App">
      <nav className="App-nav">
        <div className="App-nav-container">
          <img className='App-logo' src={logoImg}/>
          <select>
            <option>한국어</option>
            <option>English</option>
          </select>
        </div>
      </nav>
      <div className="App-container">
        <div className='App-ReviewForm'>
          <ReviesFrom />
        </div>
        <div className="App-sorts">
        <AppSortButton>최신순</AppSortButton>
        <AppSortButton>베스트순</AppSortButton>
        </div>
        <div className="App-ReviewList">
          <ReviewList items={items}/>
        </div>
      </div>
      <footer className="App-footer">
        <div className='App-footer-container'>| 개인정보 처리방침</div>
      </footer>
    </div>
  );
}

export default App;
