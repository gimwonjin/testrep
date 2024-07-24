import "./App.css";
import backgroundImg from "../assets/background.png";
import logoImg from "../assets/logo.png";
import logTextoImg from "../assets/logo-text.png";
import FoodForm from "./FoodForm";
import seacrhImg from "../assets/ic-search.png";
import Foodlist from "./Foodlist";
import { useEffect, useState } from "react";
import { getDatasOrderByLimit } from "../apl/firebase";

function AppSortButton({ children, selected, onClick }) {
  return (
    <button
      className={`AppSortButton ${selected ? "selected" : ""}`}
      onClick={onClick}
      disabled={selected}
    >
      {children}
    </button>
  );
}

const LIMIT = 5;

function App() {
  const [items, setItems] = useState([]);
  const [oredr, setOredr] = useState("createdAt");
  const [lq, setLq] = useState();
  const [hasNext, setHasNext] = useState(true);

  const handleLoad = async (options) => {
    const { resultData, lastQuery } = await getDatasOrderByLimit(
      "food",
      options
    );
    if (!options.lq) {
      setItems(resultData);
    } else {
      setItems((prevItems) => [...prevItems, ...resultData]);
    }
    setLq(lastQuery);
    if (!lastQuery) {
      setHasNext(false);
    }
  };
  const handleLoadMore = async () => {
    handleLoad({ fieldName: oredr, limit: LIMIT, lq: lq });
  };

  const handleNewestClick = () => setOredr("createdAt");
  const handleCalorieClick = () => setOredr("calorie");

  useEffect(() => {
    handleLoad({ fieldName: oredr, limits: LIMIT, lq: undefined });
  }, [oredr]);

  return (
    <div className="App" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <div className="App-nav">
        <img src={logoImg} />
      </div>
      <div className="App-container">
        <div className="App-FoodForm">
          <FoodForm items={items} />
        </div>
        <div className="App-filter">
          <form className="App-search">
            <input className="App-search-input" />
            <button className="App-search-button">
              <img src={seacrhImg} />
            </button>
          </form>
          <div className="App-orders">
            <AppSortButton
              selected={oredr === "createdAt"}
              onClick={handleNewestClick}
            >
              최신순
            </AppSortButton>
            <AppSortButton
              selected={oredr === "calorie"}
              onClick={handleCalorieClick}
            >
              칼로리순
            </AppSortButton>
          </div>
        </div>
        <Foodlist items={items} />
        {hasNext && (
          <button className="App-load-more-button" onClick={handleLoadMore}>
            더보기
          </button>
        )}
      </div>
      <div className="App-footer">
        <div className="App-footer-container">
          <img src={logTextoImg} />
          <select>
            <option>한국어</option>
            <option>English</option>
          </select>
          <div className="App-footer-menu">
            서비스 이용약관 ㅣ 개인정보 처리방침
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
