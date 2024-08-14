import { Nav } from "react-bootstrap";
import Header from "../../components/header/Header";
import Navleft from "../../components/navleft/Navleft";
import Posts from "../../components/posts/Posts";
import Navright from "../../components/navright/Navright";
import './Home.scss'


const Home = (props) => {
    const {offLogin} =  props 
    const handleOffLogin = () => {
        offLogin(false)
    }
    return (
        <div className="home-container">
            < Header offLogin={handleOffLogin}/>
            <div className="content-container">
                <Navleft />
                <Posts />
                <Navright />
            </div>
        </div>
    );
}

export default Home;