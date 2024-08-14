import Item from '../navItem/Item';
import './Navright.scss'
const Navright = () => {
    return (
        <div className="nav-right">
            <div className="title">
                Friends
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
export default Navright;