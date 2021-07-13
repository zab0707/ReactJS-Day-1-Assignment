import React from 'react';

import Greet from './components/Greet';
import Button from './components/Button';

class App extends React.Component {
    render(){
        return(
            <div className="container">
                <Greet />
                <Button design='btn btn-primary'>Apple</Button>
                <Button design='btn btn-danger'>Orange</Button>  
                <Button design='btn btn-warning'>Mango</Button>    
            </div>
        );
    }
}

export default App;