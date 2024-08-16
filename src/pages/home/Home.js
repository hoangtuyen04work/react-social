
import Navleft from "../../components/navleft/Navleft";
import Posts from "../../components/posts/Posts";
import Navright from "../../components/navright/Navright";
import './Home.scss'


const Home = (props) => {
    return (
            <div className="content-container">
                <Navleft />
                <Posts />
                <Navright />
            </div>
    );
}

export default Home;