export default function Stats({ number, packed, percent }) {
  if (number === 0) {
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </footer>
    );
  }
  return (
    <footer className="stats">
      <em>
        {percent === 100
          ? "You got everything! Ready to go ✈️ "
          : `💼 You have ${number} items on your list, and you already packed ${packed} (${percent}%)`}
      </em>
    </footer>
  );
}
