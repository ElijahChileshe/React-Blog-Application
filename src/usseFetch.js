import { useState, useEffect } from "react";

const useFetch = (url) => {


    // Update the setBlogs State with the data ---------> STEP 2
    const [data, setData] = useState( null );
    const [isPending, setIsPending] = useState( true );
    const [error, setError] = useState( null )


    // Use Effect Function to fecth the data from the blogs API -------> STEP 1
    useEffect(() => {
        setTimeout(() => {
            fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw Error('Failed to Fetch the data')
                }

                return res.json();
            })
            .then(data => {
                console.log(data)
                // Update setBlogs with the fetched data  
                setData(data)
                setIsPending(false)
                setError(null)
            })
            //  Add Error Catch Msg
            .catch(err => {
                setIsPending(false)
                setError(err.message)
                setData(null)
            })
        },)
    }, [url]);

    return { data, isPending, error }

}

export default useFetch;