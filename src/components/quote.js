import { useState, useEffect } from 'react';

function Quotes() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(null);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: { 'X-Api-Key': '7wgutqejltLcyirbYETXwg==SuLvCcQgbH432WT2' },
      contentType: 'application/json',
    };
    const fetcher = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://api.api-ninjas.com/v1/quotes', options);
        const data = await response.json();
        const message = data[0].quote;
        setQuotes(message);
      } catch (error) {
        setHasError(true);
      }
      setLoading(false);
    };
    fetcher();
  }, [setQuotes, setLoading]);

  if (loading) return <div className="loading">Your quote is loading ...</div>;
  if (hasError) return <div className="error">There is an error! try again.</div>;
  return (
    <div className="quotes"><h3>{quotes}</h3></div>
  );
}

export default Quotes;
