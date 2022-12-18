import '../SantaLogin.css';
import Button from './Button';
import EmailForm from './EmailForm';
import PassForm from './PassForm';

const SantaLogin = () => {
    return (
        <div>
            <h1>お願いサンタさん</h1>
                
            
                <EmailForm/>

                <PassForm/>

                <Button/>

                
        </div>     
        );
                    };

export default SantaLogin;