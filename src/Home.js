import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./usseFetch";


const Home = () => {

    const { data, isPending, error } = useFetch('http://localhost:8000/blogs');

// render the 
    return (
        <div className="home">

            {error && <div>Sorry, seems like the page is down...</div>}

            {/* Display the loading state */}
            {isPending && <div>Loading...</div>}

            {/* Add Blogs Prop */}
            { data && <BlogList blogs={data}/>}
        </div>
    );
}


// Code to run JSON Server
// npx json-server --watch data/db.json --port 8000

export default Home;