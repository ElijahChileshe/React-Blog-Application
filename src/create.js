import { useState } from "react";

const Create = () => {

    // Track State of values in form
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('elijah');


    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form action="" method="post">
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

                <button>Add blog</button>
                {/* <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p> */}
            </form>
        </div>
    );
}

export default Create;