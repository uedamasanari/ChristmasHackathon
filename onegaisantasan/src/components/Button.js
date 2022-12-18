import React from 'react';
import './Button.css';
import PassForm from './PassForm';
import RePassForm from './RePassForm';
import EmailForm from './EmailForm';
import NameForm from './NameForm';


class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmitted: false,
      
      hasbuttonError: false,
    };
  }

  handlebuttonChange(event) {
    const inputValue = event.target.value;
   
    const isEmpty = inputValue === '';
    
   
    this.setState({
      hasButtonError:isEmpty,
    });
    
  }

  handleSubmit() {
    this.setState({isSubmitted: true});
  }

  render() {
    let buttonErrorText;
    if (this.state.hasbuttonError) {
      buttonErrorText = (
        <p className='button-message-error'>
          
        </p>
      );
    }

    let buttonForm;
    if (this.state.isSubmitted) {
      buttonForm = (
        <div className='button-submit-message'>
         
        </div>
      );
    } 
    else 
    {
      buttonForm = (
        <form onSubmit={() => {this.handleSubmit()}}>
          <h2></h2>
          
          {buttonErrorText}
          <input
            type='submit'
            value='ログイン'
            className='Button_button'
          />
        </form>
      );
    }

    return (
      <div className='button-form'>
        {buttonForm}
      </div>
    );
  }
}

export default Button;
