import { useEffect, useState } from "react";
import ListComponent from "./ListComponent";

const App = () => {
  const [quotes, setQuotes] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getQuotes = () => {
    setLoading(true);
    setError(null);
    fetch("http://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setQuotes(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    getQuotes();
  }, []);

  return (
    <div className="app-container">
      {loading && <div>Loading...</div>}
      {!loading && quotes && (
        <ul>
          <ListComponent quote={quotes} />
        </ul>
      )}
      {error && <p>Oops! Something went wrong. Please try again later.</p>}
      <button className="quote-button" onClick={getQuotes}>
        Get new quote
      </button>
    </div>
  );
};

export default App;
