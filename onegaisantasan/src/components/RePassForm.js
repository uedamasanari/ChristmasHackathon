import React from 'react';
import './RePassForm.css'

class RePassForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmitted: false,
      repass: '',
      hasPassError: false,
    };
  }

  handleRePassChange(event) {
    const inputValue = event.target.value;
    /* 定数isEmptyを定義し、入力チェックの結果を代入してください */
    const isEmpty = inputValue === '';
    
    /* hasEmailErrorを更新してください */
    this.setState({repass: inputValue,
      hasRePassError:isEmpty,
    });
    
  }

  handleSubmit() {
    this.setState({isSubmitted: true});
  }

  render() {
    let repassErrorText;
    if (this.state.hasRePassError) {
      repassErrorText = (
        <h2 className='repass-message-error'>
          パスワードを入力してください
        </h2>
      );
    }

    let repassForm;
    if (this.state.isSubmitted) {
      repassForm = (
        <div className='repass-submit-message'>
          {this.state.repass}
        </div>
      );
    } else {
      repassForm = (
        <form onSubmit={() => {this.handleSubmit()}}>
          <h2>パスワード（再入力）　　</h2>
          <input
            value={this.state.repass}
            onChange={(event) => {this.handleRePassChange(event)}}
          />
          {repassErrorText}
          
        </form>
      );
    }

    return (
      <div className='repass-form'>
        {repassForm}
      </div>
    );
  }
}

export default RePassForm;
