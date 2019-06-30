import React from 'react' ;
import './style.css';
import GenRequest from '../GenRequest';

class App extends React.Component{
    render(){
        return (
            <div className="App">
                <GenRequest></GenRequest>
                这边是执行结果区域
            </div>
        ) ;
    }
}

export default App ;