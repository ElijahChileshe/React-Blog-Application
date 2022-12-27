import { useState, useEffect } from "react";
import BlogList from "./BlogList";


const Home = () => {

    // Update the setBlogs State with the data ---------> STEP 2
    const [blogs, setBlogs] = useState( null );
    const [isPending, setIsPending] = useState( true );
    const [error, setError] = useState( null )


    // Use Effect Function to fecth the data from the blogs API -------> STEP 1
    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
            .then(res => {
                if (!res.ok) {
                    throw Error('Failed to Fetch the data')
                }

                return res.json();
            })
            .then(data => {
                console.log(data)
                // Update setBlogs with the fetched data  
                setBlogs(data)
                setIsPending(false)
                setError(null)
            })
            //  Add Error Catch Msg
            .catch(err => {
                setIsPending(false)
                setError(err.message)
                setBlogs(null)
            })
        }, 1000)
    }, [])

// render the 
    return (
        <div className="home">

            {error && <div>Sorry, seems like the page is down...</div>}

            {/* Display the loading state */}
            {isPending && <div>Loading...</div>}

            {/* Add Blogs Prop */}
            { blogs && <BlogList blogs={blogs}/>}
        </div>
    );
}


// Code to run JSON Server
// npx json-server --watch data/db.json --port 8000

export default Home;