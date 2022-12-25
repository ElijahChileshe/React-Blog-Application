import { useState } from "react";


const Home = () => {

    const [blogs, setBlogs] = useState([
        {title: 'Software Engineering', body: 'lorem ipsum...', author: 'Peter', id: 1},
        {title: 'Database and Web Dev', body: 'lorem ipsum...', author: 'Elijah', id: 2},
        {title: 'Java Programming', body: 'lorem ipsum...', author: 'Mapalo', id: 3}
    ]);


    return (
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Written By { blog.author }</p>
                </div>
            ))}
        </div>
    );
}

export default Home;