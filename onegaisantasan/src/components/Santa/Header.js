import headerimg from '../PNG/header.png';
import "../CSS/header.css"
import logout from '../PNG/logout.png';
const Header = () => {
    return (
        <div className="headerrap">
            <img alt="header" className="header" src={headerimg} />
            <img alt="logout" className="logout" src={logout} />
        </div>
    );
};

export default Header;