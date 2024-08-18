
import Navleft from "../../components/navleft/Navleft";
import Posts from "../../components/posts/Posts";
import Navright from "../../components/navright/Navright";
import './Home.scss'
import { useReload } from "../../context/ReloadContext";





const Home = (props) => {
    const { postsKey } = useReload();
    return (
            <div className="content-container">
                <Navleft />
                <Posts key={postsKey} showHeader = {true} />
                <Navright />
            </div>
    );
}

export default Home;