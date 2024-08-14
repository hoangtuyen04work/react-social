import Item from '../navItem/Item';
import './Navleft.scss'
const Navleft = () => {
    return (
        <div className="nav-left">
            <div className="title">
                Social
            </div>
            <div className="list-item">
                <Item/>
                <Item/>
                <Item/>
                <Item/>
            </div>
        </div>
    )
}
export default Navleft;