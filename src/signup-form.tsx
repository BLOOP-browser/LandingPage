import React from 'react'
import { sendEmailTest } from './sib-integration'

type IState = {
    value: string;
}

export class SignUpForm extends React.Component<any, IState> {
    constructor(props: any) {
        super(props)
        this.state = {value: ''}
        this.onClick = this.onClick.bind(this)
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event: any) {
        this.setState({value: event.target.value})
    }
    async onClick() {
        const response = await sendEmailTest(this.state.value)
        if (response) {
            this.setState({value: 'Thanks for Signing Up!'})
        }
    }
    render() {
        return (            
        <div className="cta">
            <form>
              <input id='signupInput' type="text" placeholder="What's your email?" 
              value={this.state.value} onChange={this.handleChange}/>
              <button type='button' onClick={this.onClick}>DOWNLOAD</button>
            </form>
          </div>
        )
    }
}
