import { useLoaderData } from "react-router-dom";
import './postDetails.css'

const PostDetails = ()=>{
    const post = useLoaderData();
    const {id,title,body,userId} = post;
    return(
        <div className="post-details">
            <h3>Post ID: {id}</h3>
            <small> <span>title:</span> {title}</small>
            <small><span>User ID:</span> {userId}</small>
            <small><span>Body:</span> {body}</small>
        </div>
    )
}
export default PostDetails;