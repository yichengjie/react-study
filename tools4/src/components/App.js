import React from 'react' ;
import './App.css';
import SystemSwitch from './SystemSwitch' ;
import GenRequestXml from './GenRequestXml' ;

class App extends React.Component{
   
    render(){
        return (
            <div className="container App">
                <SystemSwitch></SystemSwitch>
                <GenRequestXml></GenRequestXml>
            </div>
        ) ;
    }
}

export default App ;