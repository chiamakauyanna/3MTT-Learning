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
          <ListComponent content={quotes.content} author={quotes.author} />
        </ul>
    )}
      {error && <p className="error-message">{error.message}</p>}
      <button className="quote-button" onClick={getQuotes}>Get new quote</button>  
    </div>
  );
};

export default App;
