import './NewCreate.css';
import EmailForm from './EmailForm';
import PassForm from './PassForm';
import RePassForm from './RePassForm';
import Button from './Button';
class NewCreate extends React.Component 
{
    constructor(props) {
        super(props);
        this.state = {
            isSubmitted: false,
            email: '',
            hasEmailError: false,
            pass: '',
            hasPassError: false,
            repass: '',
            hasRePassError: false,
        };
    }

    handleEmailChange(event) {
        const inputValue = event.target.value;
        const isEmpty = inputValue === '';
        this.setState({email: inputValue,
            hasEmailError:isEmpty,
        });
    }

    handlePassChange(event) {
        const inputValue = event.target.value;
        const isEmpty = inputValue === '';
        this.setState({pass: inputValue

        });
    }

    handleRePassChange(event) {
        const inputValue = event.target.value;
        const isEmpty = inputValue === '';
        this.setState({repass: inputValue
        });
    }}

    const NewCreate = () => {
        return (
            <div className='newcreate'>
                <h1>お願いサンタさん</h1>
                <EmailForm/>
                <PassForm/>
                <RePassForm/>
                <Button />
            </div>
        );
    };

export default NewCreate;