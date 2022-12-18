import './ChildLogin.css';
import NameForm from './NameForm';
import Button from './Button';
const ChirdLogin = () => {
    return (
        <div>
        <h1>お願いサンタさん</h1>
        
        
            <NameForm/>


            <div className="ChildLogin_Error">
                <h2>そのなまえはサンタさんが<br/>まだ覚えてないよ</h2>
            </div>
        
            <Button />

    </div>
    );
};

export default ChirdLogin;