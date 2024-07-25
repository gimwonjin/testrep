import "./App.css";
import backgroundImg from "../assets/background.png";
import logoImg from "../assets/logo.png";
import logTextoImg from "../assets/logo-text.png";
import FoodForm from "./FoodForm";
import seacrhImg from "../assets/ic-search.png";
import Foodlist from "./Foodlist";
import { useEffect, useState } from "react";
import {
  addDatas,
  deleteDatas,
  getDatasOrderByLimit,
  updateDatas,
} from "../apl/firebase";

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
    handleLoad({ fieldName: oredr, limits: LIMIT, lq: lq });
  };

  const handleNewestClick = () => setOredr("createdAt");
  const handleCalorieClick = () => setOredr("calorie");

  const handleDelete = async (docId, imgUrl) => {
    // items 에서 docId을 받아온다.

    // db에서 데이터 삭제(스토리지에 있는 사진파일 삭제, database에 있는 데이터 삭제)
    const { result, message } = await deleteDatas("food", docId, imgUrl);
    if (!result) {
      alert(message);
      return;
    }
    // 삭제 성공시 화면에 그 결과를 반영한다.
    setItems((prevItems) =>
      prevItems.filter(function (item) {
        return item.docId !== docId;
      })
    );
  };
  const handleAddSuccess = (resultData) => {
    setItems((prevItems) => [resultData, ...prevItems]);
  };

  const handleUpdateSuccess = (result) => {
    setItems((prevItems) => {
      // 수정된 item의 index 찾기
      const splitIdx = prevItems.findIndex(function (item) {
        return item.id === result.id;
      });
      const beforArr = prevItems.slice(0, splitIdx);
      const afterArr = prevItems.slice(splitIdx + 1);
      return [...beforArr, result, ...afterArr];
       // return [
      //   ...prevItems.slice(0, splitIdx),
      //   result,
      //   ...prevItems.slice(splitIdx + 1)
      // ]
    });
  };

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
          <FoodForm onSubmit={addDatas} onSubmitSuccess={handleAddSuccess} />
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
        <Foodlist
          items={items}
          onDelete={handleDelete}
          onUpdate={updateDatas}
          onUpdateSuccess={handleUpdateSuccess}
        />
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
