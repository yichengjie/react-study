import React from 'react' ;
import './style.css';
import GenRequest from '../GenRequest';
import RequestResult from '../RequestResult' ;

class App extends React.Component{
    render(){
        return (
            <div className="App">
                <GenRequest></GenRequest>
                <RequestResult></RequestResult>
            </div>
        ) ;
    }
}

export default App ;