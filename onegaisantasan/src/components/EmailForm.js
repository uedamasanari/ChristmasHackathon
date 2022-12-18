import './EmailForm.css';
import React from 'react';

class EmailForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmitted: false,
      email: '',
      hasEmailError: false,
    };
  }

  handleEmailChange(event) {
    const inputValue = event.target.value;
  
    const isEmpty = inputValue === '';
    
    
    this.setState({email: inputValue,
      hasEmailError:isEmpty,
    });
    
  }

  handleSubmit() {
    this.setState({isSubmitted: true});
  }

  render() {
    let emailErrorText;
    if (this.state.hasEmailError) {
      emailErrorText = (
        <h2 className='email-message-error'>
            メールアドレスを入力してください
        </h2>
      );
    }

    let emailForm;
    if (this.state.isSubmitted) {
      emailForm = (
        <div className='email-submit-message'>
          {this.state.email}
        </div>
      );
    } else {
      emailForm = (
        <form onSubmit={() => {this.handleSubmit()}}>
          <h2>メールアドレス　　　　　</h2>
          <input
            value={this.state.email}
            onChange={(event) => {this.handleEmailChange(event)}}
          />
          {emailErrorText}
        </form>
      );
    }

    return (
      <div className='email-form'>
        {emailForm}
      </div>
    );
  }
}

export default EmailForm;
