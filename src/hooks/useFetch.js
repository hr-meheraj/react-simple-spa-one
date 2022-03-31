import {useState, useEffect} from 'react'
const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);
  const fetchData = async (urlParam) => {
      try{
          setLoading(true);
          const res = await fetch(urlParam);
          const data = await res.json();
          setData(data);
      }catch(err){
          alert(err.message);
      }finally{
          setLoading(false);
      }
  }
  useEffect(() => {
      fetchData(url);
  },[]);
  return {data, loading, err};
}

export default useFetch;