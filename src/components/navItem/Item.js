import './Item.scss'
import {
    FontAwesomeIcon
} from '@fortawesome/react-fontawesome';
import {
    faCheckToSlot
} from '@fortawesome/free-solid-svg-icons';
const Item = () => {
    return (
        <div className = "left" >
            <FontAwesomeIcon icon={faCheckToSlot} />
            <div className="item-name">Item name</div>
            
        </div>
    )
}
export default Item;