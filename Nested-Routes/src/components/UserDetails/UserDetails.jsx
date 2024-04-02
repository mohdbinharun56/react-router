import { useLoaderData } from "react-router-dom";

const UserDetails = ({}) => {
    const user = useLoaderData();
    const {name,website,email,phone} = user;
    console.log(user);
    return (
        <div>
            <h2>Details about user</h2>
            <h5>{name}</h5>
            <p>Email: {email}</p>
            <p>Website: {website}</p>
            <small>Phone: {phone}</small>
        </div>
    )
}

export default UserDetails;