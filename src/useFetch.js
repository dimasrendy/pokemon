import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw Error('Could not fetch the data from the resource');
                }
                return res.json();
            })
            .then(data => {
                setData(data.results);
                setIsPending(false);
                setError(null);
            })
            .catch(err => setError(err.message));
            setIsPending(false);            
    }, [url]);

    return { data, isPending, error };
}
 
export default useFetch;