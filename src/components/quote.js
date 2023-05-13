import { useState, useEffect } from 'react';

function Quotes() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!mounted) {
      setMounted(true);
      return;
    }

    const options = {
      method: 'GET',
      headers: { 'X-Api-Key': '7wgutqejltLcyirbYETXwg==SuLvCcQgbH432WT2' },
      contentType: 'application/json',
    };

    const fetcher = async () => {
      setLoading(true);
      try {
        const url = 'https://api.api-ninjas.com/v1/quotes';
        const response = await fetch(url, options);
        const data = await response.json();
        const message = data[0].quote;
        setQuotes(message);
      } catch (error) {
        setHasError(true);
      }
      setLoading(false);
    };
    fetcher();
  }, [setQuotes, setLoading, mounted]);

  if (loading) {
    document.title = 'Loading Quote...';
    return <div className="loading">Your quote is loading ...</div>;
  }
  document.title = 'Mathematics Magicians';

  if (hasError) return <div className="error">There is an error! try again.</div>;
  return (
    <div className="quotes"><h3 data-testid="quotes-div">{quotes}</h3></div>
  );
}

export default Quotes;
