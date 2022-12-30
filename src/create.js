import { useState } from "react";

const Create = () => {

    // Track State of values in form
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('elijah');
    const [isPending, setIsPending] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog  = {title, body, author};

        setIsPending(true)

        // console.log(blog);
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {'Content-Type': 'application/JSON'},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('New Blog Added');
            setIsPending(false)
        })
    }


    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit} action="" method="post">
                <label>Blog Title:</label>
                <input 
                    type="text" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />

                <label>Blog Body:</label>
                <textarea 
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}

                ></textarea>

                <label>Blog Author:</label>
                <select

                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    >
                    <option value="Elijah">Elijah</option>
                    <option value="Lanzi">Lanzi</option>
                </select>

                {!isPending && <button>Add blog</button>}
                {isPending && <button disabled>Adding blog...</button>}
                {/* <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p> */}
            </form>
        </div>
    );
}

export default Create;