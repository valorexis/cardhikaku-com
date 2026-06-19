import { useState } from "react";

function App() {
  const [game, setGame] = useState("ポケカ");
  const [cardName, setCardName] = useState("");
  const [prices, setPrices] = useState(null);

  const searchCard = async () => {
    const res = await fetch(`/api/prices?card=${cardName}`);
    const data = await res.json();
    setPrices(data);
  };

  return (
    <div style={{ padding: "30px", textAlign: "center" }}>
      <h1>カード比較.com</h1>

      <select
        value={game}
        onChange={(e) => setGame(e.target.value)}
      >
        <option value="ポケカ">ポケカ</option>
        <option value="ワンピース">ワンピース</option>
        <option value="ドラゴンボール">ドラゴンボール</option>
      </select>

      <input
        type="text"
        placeholder="カード名を入力"
        value={cardName}
        onChange={(e) => setCardName(e.target.value)}
        style={{ marginLeft: "10px" }}
      />

      <button
        onClick={searchCard}
        style={{ marginLeft: "10px" }}
      >
        検索
      </button>

      <hr />

      <h2>検索結果</h2>

      {prices && (
        <div>
          <p>CardRush: {prices.cardrush}</p>
          <p>Hareruya: {prices.hareruya}</p>
          <p>DoragonStar: {prices.dragonstar}</p>
        </div>
      )}
    </div>
  );
}

export default App;