import { useParams } from "react-router-dom/cjs/react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import  useFetch  from "./useFetch"

const BlogDetails = () => {

    const { id } = useParams()
    const { data: blog, isPending, error } = useFetch('http://localhost:8000/blogs/' + id);
    const histroy = useHistory();

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            histroy.push('/')
        })
    }

    return (
        <div className="blog-details">
            {isPending && <div>loadin blog...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written By {blog.author}</p>
                    <p>{blog.body}</p>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}

        </div>
    );

}

export default BlogDetails;