import React, { Component, PropTypes } from 'react' ;
import ClassCheck from '../ClassCheck' ;
import SearchRequest from '../SearchRequest' ;
import CopyRequest from '../CopyRequest' ;

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
    renderTabItem(){
        if(this.state.requestType == 'search'){
            return <SearchRequest /> ;
        }
        return <CopyRequest/> ;
    }
    render () {
        return (
            <div>
               <ClassCheck 
                    systemName ={this.state.systemName}
                    requestType = {this.state.requestType}
                    handleItemClick = {this.handleItemClick}/> 
                {
                    this.renderTabItem() 
                }
            </div>
        )
    }
}

export default GenRequest ;