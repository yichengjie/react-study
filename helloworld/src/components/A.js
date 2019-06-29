import React from 'react' ;
import {ColorContext} from '../color-context' ;
//父组建A
class A extends React.Component{
    constructor(props){
        super(props) ;
        this.state = {
            childColor: '#555'
        }; 
        this.handleChangeColor = this.handleChangeColor.bind(this) ;
    }
    handleChangeColor(event){
        event.preventDefault() ;
        this.setState({childColor:this.state.childColor==='#555' ? '#000' : '#555'})
    }
    render(){
        return (
            <ColorContext.Provider value={this.state.childColor}>
                <B></B>
                <br/>
                <button type="button" onClick={this.handleChangeColor}>改变颜色</button>
            </ColorContext.Provider>
        ) ;
    }
}

//子组件B
class B extends React.Component{
    render(){
        return <C></C>
    }
}

//子组件C
class C extends React.Component{
    render(){
       return (
            <ColorContext.Consumer>
                {
                    value => <span style ={{color:value}}>context颜色{value}</span>
                }
            </ColorContext.Consumer>
       ) 
    }
}

export default A ;