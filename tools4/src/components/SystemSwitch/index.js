import React from 'react' ;
import './style.css' ;

class SystemSwitch extends React.Component{
    constructor (props){
        super(props) ;
        this.state = {
            systemName:'Dprice'
        } ;
    }

    checkSystemName(input,systemName){
        if(input === systemName){
            return "item activity" ;
        }
        return "item" ;
    }

    handleChangeSystem(systemName){
        this.setState({systemName}) ;
    }

    render(){
        return (
            <div className="system-switch-container">
                <div className="title">系统</div>
                <div className ="content">
                    <span className={this.checkSystemName(this.state.systemName,'Dprice')}
                          onClick={this.handleChangeSystem.bind(this,'Dprice')}>
                        Dprice
                    </span>
                    <span className={this.checkSystemName(this.state.systemName,'Dreprice')}
                          onClick={this.handleChangeSystem.bind(this,'Dreprice')}>
                        Dreprice
                    </span>
                    <span className={this.checkSystemName(this.state.systemName,'Dshop')}
                        onClick={this.handleChangeSystem.bind(this,'Dshop')}>
                        Dshop
                    </span>
                </div>
            </div>
        ) ;
    }
}

export default SystemSwitch ;