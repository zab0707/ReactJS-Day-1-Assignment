import React from 'react';

class Greet extends React.Component{
    render(){
        return(
            <div>
                <div className="jumbotron">
                    <h1 className="display-4">Hello, React!</h1>
                    <p className="lead">Welcome to ReactJS a JavaScript Framework to develop frontend.</p>
                    <hr className="my-4" />
                </div>
            </div>
        );
    }
}

export default Greet;