import React from 'react' ;

class RequestCheckSystem extends React.Component{
    constructor(props){
        super(props) ;
        this.state = {
            sysname:'Dprice'
        } ;
    }
    handleChangeSystem(sysname){
        return (event) => {
            this.setState({sysname:sysname})
        }
    }
    render(){
        return (
            <div>
                <nav className="navbar navbar-default navbar-static-top">
                    <p className="navbar-text">系统选择:</p>
                    <div className="btn-group" role="group" aria-label="Basic example"
                        style ={{marginTop:"8px"}}>
                        <button type="button" 
                                className={this.state.sysname === 'Dprice'? 'btn btn-primary' : 'btn btn-default'} 
                                onClick={this.handleChangeSystem('Dprice')}>
                            Dprice
                        </button>
                        <button type="button" 
                                className={this.state.sysname === 'Dreprice'? 'btn btn-primary' : 'btn btn-default'}
                                onClick={this.handleChangeSystem('Dreprice')}>
                            Dreprice
                        </button>
                        <button type="button" 
                                className={this.state.sysname === 'Dshop'? 'btn btn-primary' : 'btn btn-default'}
                                onClick={this.handleChangeSystem('Dshop')}>
                            Dshop
                        </button>
                    </div> 
                </nav>
                 
            </div>
            
        ) ;
    }
}

export default RequestCheckSystem ;