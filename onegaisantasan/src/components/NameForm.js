import React from 'react';
import './NameForm.css';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmitted: false,
      name: '',
      hasNameError: false,
    };
  }

  handleNameChange(event) {
    const inputValue = event.target.value;
    
    const isEmpty = inputValue === '';
    
    
    this.setState({name: inputValue,
      hasNameError:isEmpty,
    });
    
  }

  handleSubmit() {
    this.setState({isSubmitted: true});
  }

  render() {
    let nameErrorText;
    if (this.state.hasNameError) {
      nameErrorText = (
        <h2 className='name-message-error'>
          なまえを入れてね
        </h2>
      );
    }

    let nameForm;
    if (this.state.isSubmitted) {
      nameForm = (
        <div className='name-submit-message'>
          {this.state.name}
        </div>
      );
    } else {
      nameForm = (
        <form onSubmit={() => {this.handleSubmit()}}>
          <h2>なまえ　　　</h2>
          <input
            value={this.state.name}
            onChange={(event) => {this.handleNameChange(event)}}
          />
          {nameErrorText}
          
        </form>
      );
    }

    return (
      <div className='name-form'>
        {nameForm}
      </div>
    );
  }
}

export default NameForm;
