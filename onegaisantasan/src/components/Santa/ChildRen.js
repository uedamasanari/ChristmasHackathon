import edit from '../PNG/edit.png';
import "../CSS/children.css"
import deletepng from '../PNG/delete.png';
const Header = (props) => {
    return (
        <div className="children">
            <p>{props.child.name}</p>
            <img alt="edit" className="edit" src={edit} />
            <img alt="delete" className="delete" src={deletepng} />
        </div>
    );
};

export default Header;