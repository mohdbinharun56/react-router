import { useNavigate } from "react-router-dom";

const Post = ({post}) =>{
    const {title, id } = post;
    const postStyle = {
        border: '2px solid yellow',
        padding: '10px',
        marginBottom: '10px',
        borderRadius: '30px'
    }
    const navigate = useNavigate();
    const showPostDetails = () =>{
        navigate(`/post/${id}`);
    }
    return (
        <div style={postStyle}>
            <h3>Post ID: {id}</h3>
            <p>{title}</p>
            <button onClick={showPostDetails}>Show Details</button>
        </div>
    );
}

export default Post;