export default function handler(req, res) {
  const { card } = req.query;

  const prices = {
    ピカチュウ: {
      cardrush: "550円",
      hareruya: "530円",
      dragonstar: "580円"
    },
    リザードン: {
      cardrush: "12000円",
      hareruya: "11800円",
      dragonstar: "12500円"
    }
  };

  res.status(200).json(
    prices[card] || {
      cardrush: "データなし",
      hareruya: "データなし",
      dragonstar: "データなし"
    }
  );
}