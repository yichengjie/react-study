import React from 'react' ;
import './style.css' ;

class ClassCheck extends React.Component{
    constructor(props){
        super(props) ;
    }
    checkItemActivite (name1,name2){
        if(name1 === name2){
            return "item activite" ;
        }
        return "item" ;
    }
    handleItemClick (type,value){
        return (event) => {
            this.props.handleItemClick(type,value) ;
        }
    }
    render(){
        let systemName = this.props.systemName ;
        let requestType = this.props.requestType ;
        return (
          <div className="header">
            <div className="row">
                <span className="title">系统选择:</span>
                <div className="content">
                    <span className={this.checkItemActivite('Dprice',systemName)}
                        onClick ={this.handleItemClick('systemName','Dprice')}>Dprice</span>
                    <span className={this.checkItemActivite('Dreprice',systemName)}
                        onClick ={this.handleItemClick('systemName','Dreprice')}>Dreprice</span>
                    <span className={this.checkItemActivite('Dshop',systemName)}
                        onClick ={this.handleItemClick('systemName','Dshop')}>Dshop</span>
                </div>
            </div>
            <div className="row">
                <span className="title">获取请求:</span>
                <div className="content">
                    <span className={this.checkItemActivite('search',requestType)}
                        onClick ={this.handleItemClick('requestType','search')}>生产机搜索</span>
                    <span className={this.checkItemActivite('copy',requestType)}
                        onClick ={this.handleItemClick('requestType','copy')}>复制XML</span>
                    <span className={this.checkItemActivite('tam',requestType)}
                        onClick ={this.handleItemClick('requestType','tam')}>跟踪带</span>
                    <span className={this.checkItemActivite('manual',requestType)}
                        onClick ={this.handleItemClick('requestType','manual')}>手动构造</span>
                </div>
            </div>  
          </div>      
        ) ;
    }
}

export default ClassCheck ;