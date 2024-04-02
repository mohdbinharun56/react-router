import { Outlet } from "react-router-dom";
import Header from "../Header/header";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <h1>This is the home component.</h1>
            <Outlet></Outlet>
        </div>
    );
}
export default Home;