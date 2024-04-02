import { useLoaderData } from "react-router-dom"; 
import User from "../User/User";

const Users = () => {
    const users = useLoaderData();
    console.log(users);
    return (
        <div>
            <h3>All Users Information</h3>
            <p>Total Users: {users.length}</p>
            <div>
                {
                    users.map(user => <User key={user.id} user = {user}></User>)
                }
            </div>
        </div>
    )
}

export default Users;