import React from 'react';
import './PassForm.css';

class PassForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmitted: false,
      pass: '',
      hasPassError: false,
    };
  }

  handlePassChange(event) {
    const inputValue = event.target.value;
    
    const isEmpty = inputValue === '';
    
    
    this.setState({pass: inputValue,
      hasPassError:isEmpty,
    });
    
  }

  handleSubmit() {
    this.setState({isSubmitted: true});
  }

  render() {
    let passErrorText;
    if (this.state.hasPassError) {
      passErrorText = (
        <h2 className='pass-message-error'>
          パスワードを入力してください
        </h2>
      );
    }

    let passForm;
    if (this.state.isSubmitted) {
      passForm = (
        <div className='pass-submit-message'>
          {this.state.pass}
        </div>
      );
    } else {
      passForm = (
        <form onSubmit={() => {this.handleSubmit()}}>
          <h2>パスワード　　　　　　　</h2>
          <input
            value={this.state.pass}
            onChange={(event) => {this.handlePassChange(event)}}
          />
          {passErrorText}
          
        </form>
      );
    }

    return (
      <div className='pass-form'>
        {passForm}
      </div>
    );
  }
}

export default PassForm;
