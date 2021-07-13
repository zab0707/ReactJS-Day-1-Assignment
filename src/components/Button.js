import React from 'react';

class Button extends React.Component{
    render(){
        return(
            <button className={this.props.design}>{this.props.children}</button>
        );
    }
}

export default Button;