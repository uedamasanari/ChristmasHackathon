import edit from '../PNG/edit.png';
import { useNavigate } from 'react-router-dom';
import "../CSS/children.css"
import deletepng from '../PNG/delete.png';
const Header = (props)  =>{
    const navigation = useNavigate()
    const check=(id)=> ()=>{
        navigation("/presentcheck")
        console.log(id)
    }
    return (
        <div className="children">
            <p className="name" onClick={check(props.child.id)}>{props.child.name}</p>
            <img alt="edit" className="edit" src={edit} />
            <img alt="delete" className="delete" src={deletepng} />
        </div>
    );
};

export default Header;