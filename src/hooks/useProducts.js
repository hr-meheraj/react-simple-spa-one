import {useState,useEffect} from 'react';

export const useProducts = (url) => {
    const [products, setProducts] = useState([]);
    const [err, setErr] = useState(null);
    const [loading, setLoading] = useState(false)
    const getProducts = async (productUrl) => {
        try{
            setLoading(true);
            const res = await fetch(productUrl);
            const data = await res.json();
            setProducts(data);

        }catch(err){
            setErr(err.message);
        }finally{
            setLoading(false);
        }
    }
    useEffect(() => {
        getProducts(url);
    }, [url])
    return [products,setProducts,loading,err];
}