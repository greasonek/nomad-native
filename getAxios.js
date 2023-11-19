import axios from 'axios';
import { useEffect, useState } from 'react';
// hook returns values instead of jsx to render to the dom
const useGetAxios = (apiUrl) => {
  const [response, setResponse] = useState({});
  const [error, setError]= useState({});
// set up a getPage - 

  useEffect(() => {
    const initialGetRequest = async () => {
      try {
        let res = await axios.get(apiUrl)
        res: {
          //variables we want to have returned from the api (ie book title, author, img, description)
        }
        setResponse(res.data);
      } catch (e) {
        setError(e)
      }
    };
  }, []);
  return {...response, error}
}

// put const {results, repsonse data } = getA