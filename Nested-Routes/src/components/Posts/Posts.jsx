import { key } from "localforage";
import './posts.css';
import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";


const Posts = () => {
    const posts = useLoaderData();
    console.log(posts);
    return (
        <div>
            <h3>All Post: {posts.length}</h3>
            <div className="post-container">
                {
                    posts.map(post => <Post key={post.id} post={post}></Post>)
                }
            </div>
        </div>
    );
}

export default Posts;