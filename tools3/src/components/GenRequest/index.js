import React, { Component, PropTypes } from 'react' ;
import ClassCheck from '../ClassCheck' ;

class GenRequest extends Component {
    constructor(props){
        super(props) ;
        this.state ={
            systemName:'Dprice',
            requestType:'search'
        } ;
        this.handleItemClick = this.handleItemClick.bind(this) ;
    }
    handleItemClick(type,value){
       this.setState({[type]:value}) ;
    }
    render () {
        return (
            <div>
               <ClassCheck 
                    systemName ={this.state.systemName}
                    requestType = {this.state.requestType}
                    handleItemClick = {this.handleItemClick}/> 
            </div>
        )
    }
}

export default GenRequest ;