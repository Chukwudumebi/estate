import axios from "axios";
import { useState, useEffect } from "react";
const useAxios = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchedData = async () => {
      try {
        const response = await axios(url);
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoaded(false);
      }
    };
    fetchedData();
  }, [url]);

  return [data, loaded, error];
};

export default useAxios;
