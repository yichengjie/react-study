import React from 'react' ;
import Button from 'antd/es/button' ;
import './style.css';
import GenRequest from '../GenRequest';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;

class App extends React.Component{
    render(){
        return (
            <div className="App">
                <GenRequest></GenRequest>
            </div>
        ) ;
    }
}

export default App ;