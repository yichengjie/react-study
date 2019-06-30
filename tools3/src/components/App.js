import React from 'react' ;
import './App.css';
import GenRequest from './GenRequest' ;

class App extends React.Component{
    
    render(){
        return (
            <div className="container">
                <GenRequest  />
            </div>
        ) ;
    }
}

export default App ;