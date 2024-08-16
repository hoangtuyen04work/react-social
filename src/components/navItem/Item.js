import './Item.scss'
import Avatar from '../avatar/Avata';

const Item = ({ id, onClick }) => {
    const handleClick = () => {
        onClick(id);
    };

    return (
        <div className="item" onClick={handleClick}>
            <Avatar />
            Item name
        </div>
    );
};

export default Item;