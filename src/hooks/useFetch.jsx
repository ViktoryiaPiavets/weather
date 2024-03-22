import { useState, useEffect } from 'react';

export const useFetch = (url) => {  
  const [data, setData] = useState(null);  
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);        
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };  
    fetchData();    
    
  }, [url]); 

  return { data, loading, error };
}