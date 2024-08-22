
import Navleft from "../../components/navleft/Navleft";
import Posts from "../../components/posts/Posts";
import Navright from "../../components/navright/Navright";
import './Home.scss'
import { useReload } from "../../context/ReloadContext";
import { useEffect, useState } from "react";





const Home = (props) => {
    const [loading, setLoading] = useState(false)
    const { postsKey } = useReload();
    useEffect(()=> {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2);
    })
    return (
            <div className="content-container">
                {/* loading ?
                <div className="loader-container">
                    <div className="spinner"></div>
                </div>
                : */}
                
                    <Navleft />
                    <Posts key={postsKey} showHeader={true} isProfile={false} />
                    <Navright />
                
            
            </div>
    );
}

export default Home;