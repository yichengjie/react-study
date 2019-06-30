import React from 'react' ;

class RequestCheckSystem extends React.Component{
    constructor(props){
        super(props) ;
        this.state = {
            inputType:'search'
        } ;
    }
    handleChangeSystem(inputType){
        return (event) => {
            this.setState({inputType:inputType})
        }
    }
    render(){
        return (
          <div className="header">
            <div>
                <span>系统选择:</span>
                <ul className="type-select">
                    <li>Dprice</li>
                    <li>Dreprice</li>
                    <li>Dshop</li>
                </ul>
            </div> 
          </div>      
        ) ;
    }
}

export default RequestCheckSystem ;