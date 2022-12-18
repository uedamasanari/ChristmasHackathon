import { Link } from "react-router-dom";
import "../CSS/addchildbutton.css"
const AddChildButton = () => {
    return (
        <Link to="/childadd">
            <div className="rectangle"></div>
        </Link>
    );
};

export default AddChildButton;