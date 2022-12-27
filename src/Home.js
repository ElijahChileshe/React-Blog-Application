import { useState, useEffect } from "react";
import BlogList from "./BlogList";


const Home = () => {

    // Update the setBlogs State with the data ---------> STEP 2
    const [blogs, setBlogs] = useState( null );
    const [isPending, setIsPending] = useState( true );


    // Use Effect Function to fecth the data from the blogs API -------> STEP 1
    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log(data)
                // Update setBlogs with the fetched data  
                setBlogs(data)
                setIsPending(false)
            })
        }, 1000)
    }, [])

// render the 
    return (
        <div className="home">
            {/* Use Props to pass data from Parent to child component () */}

            {isPending && <div>Loading...</div>}

            {/* Add Blogs Prop */}
            { blogs && <BlogList blogs={blogs}/>}
        </div>
    );
}


// Code to run JSON Server
// npx json-server --watch data/db.json --port 8000

export default Home;