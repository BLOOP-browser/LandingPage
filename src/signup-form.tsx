import React from 'react'


type SignUpFormProps = {
    text: string
}
export class SignUpForm extends React.Component<SignUpFormProps> {
    constructor(props: SignUpFormProps) {
        super(props)
        this.onClick = this.onClick.bind(this)
    }
    onClick() {

    }
    render() {
        return (            
        <div className="cta">
            <form>
              <input type="text" placeholder="What's your email?"/>
              <button>DOWNLOAD</button>
            </form>
          </div>
        )
    }
}
